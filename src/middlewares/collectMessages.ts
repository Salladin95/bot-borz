import { MyContext } from "../../contracts.ts";
import { NextFunction } from "../../deps.ts";
import { newMessageHistogram } from "../services/collectMetrics/histograms.ts";

export const collectMessages = (ctx: MyContext, next: NextFunction) => {
  if (ctx.message) {
    const time = newMessageHistogram.startTimer();
    newMessageHistogram.observe({ message: JSON.stringify(ctx.message) }, time());
  }
  next();
}