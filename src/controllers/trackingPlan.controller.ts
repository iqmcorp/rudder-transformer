import { Context } from "koa";
import TrackingPlanservice from "../services/trackingPlan/trackingPlan.service";
import ControllerUtility from "./util";

export default class TrackingPlanController {
  public static async validateTrackingPlan(ctx: Context) {
    const events = ctx.request.body;
    const requestSize = ctx.request.get("content-length");
    const reqParams = ctx.request.query;
    const response = await TrackingPlanservice.validateTrackingPlan(
      events,
      requestSize,
      reqParams
    );
    ctx.body = response.body;
    ControllerUtility.transformerPostProcessor(ctx, response.status);
    return ctx;
  }
}
