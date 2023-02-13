import groupBy from 'lodash/groupBy';
import { processCdkV2Workflow } from '../../cdk/v2/handler';
import IntegrationDestinationService from '../../interfaces/DestinationService';
import {
  DeliveryResponse,
  ErrorDetailer,
  MetaTransferObject,
  ProcessorTransformationRequest,
  ProcessorTransformationResponse,
  RouterTransformationRequestData,
  RouterTransformationResponse,
  ProcessorTransformationOutput,
  UserDeletionRequest,
  UserDeletionResponse,
} from '../../types/index';
import { TransformationError } from '../../v0/util/errorTypes';
import tags from '../../v0/util/tags';
import DestinationPostTransformationService from './postTransformation';

export default class CDKV2DestinationService implements IntegrationDestinationService {
  public init() {}

  public getTags(
    destType: string,
    destinationId: string,
    workspaceId: string,
    feature: string,
  ): MetaTransferObject {
    const metaTO = {
      errorDetails: {
        destType: destType.toUpperCase(),
        module: tags.MODULES.DESTINATION,
        implementation: tags.IMPLEMENTATIONS.CDK_V2,
        feature,
        destinationId,
        workspaceId,
        context: '[CDKV2 Integration Service] Failure During Router Transform',
      } as ErrorDetailer,
    } as MetaTransferObject;
    return metaTO;
  }

  public async processorRoutine(
    events: ProcessorTransformationRequest[],
    destinationType: string,
    _version: string,
    _requestMetadata: Object,
  ): Promise<ProcessorTransformationResponse[]> {
    // TODO: Change the promise type
    const respList: ProcessorTransformationResponse[][] = await Promise.all(
      events.map(async (event) => {
        try {
          let transformedPayloads: ProcessorTransformationOutput | ProcessorTransformationOutput[] =
            await processCdkV2Workflow(destinationType, event, tags.FEATURES.PROCESSOR);
          // We are not passing destination handler for CDK flows
          return DestinationPostTransformationService.handleSuccessEventsAtProcessorDest(
            event,
            transformedPayloads,
            undefined,
          );
        } catch (error) {
          const metaTO = this.getTags(
            destinationType,
            event.metadata.destinationId,
            event.metadata.workspaceId,
            tags.FEATURES.PROCESSOR,
          );
          metaTO.metadata = event.metadata;
          const erroredResp =
            DestinationPostTransformationService.handleFailedEventsAtProcessorDest(error, metaTO);
          return [erroredResp];
        }
      }),
    );
    return respList.flat();
  }

  public async routerRoutine(
    events: RouterTransformationRequestData[],
    destinationType: string,
    _version: string,
    _requestMetadata: Object,
  ): Promise<RouterTransformationResponse[]> {
    const allDestEvents: Object = groupBy(
      events,
      (ev: RouterTransformationRequestData) => ev.destination?.ID,
    );
    const response: RouterTransformationResponse[][] = await Promise.all(
      Object.values(allDestEvents).map(async (destInputArray: RouterTransformationRequestData[]) => {
        const metaTO = this.getTags(
          destinationType,
          destInputArray[0].metadata.destinationId,
          destInputArray[0].metadata.workspaceId,
          tags.FEATURES.ROUTER,
        );
        try {
          const routerRoutineResponse: RouterTransformationResponse[] = await processCdkV2Workflow(
            destinationType,
            destInputArray,
            tags.FEATURES.ROUTER,
          );
          return DestinationPostTransformationService.handleSuccessEventsAtRouterDest(
            routerRoutineResponse,
            undefined,
            metaTO,
          );
        } catch (error) {
          metaTO.metadatas = destInputArray.map((input) => {
            return input.metadata;
          });
          const erroredResp = DestinationPostTransformationService.handleFailureEventsAtRouterDest(
            error,
            metaTO,
          );
          return [erroredResp];
        }
      }),
    );
    return response.flat();
  }

  public batchRoutine(
    _events: RouterTransformationRequestData[],
    _destinationType: string,
    _version: string,
    _requestMetadata: Object,
  ): RouterTransformationResponse[] {
    throw new TransformationError('CDKV2 Does not Implement Batch Transform Routine');
  }

  public deliveryRoutine(
    _event: ProcessorTransformationOutput,
    _destinationType: string,
    _requestMetadata: Object,
  ): Promise<DeliveryResponse> {
    throw new TransformationError('CDV2 Does not Implement Delivery Routine');
  }

  public deletionRoutine(
    requests: UserDeletionRequest[],
    rudderDestInfo: string,
  ): Promise<UserDeletionResponse[]> {
    throw new TransformationError('CDV2 Does not Implement Deletion Routine');
  }
}
