import { MyContext } from "../../contracts.ts";
import { NextFunction, prom } from "../../deps.ts";
import getErrorMessage from "../helpers/getErrorMessage.ts";

export const collectMessages = (ctx: MyContext, next: NextFunction, register: prom.Registry) => {
  const { Histogram } = prom;
  const newMessage = new Histogram({
    name: 'new_incoming_message',
    help: 'Incoming message for bot',
    labelNames: ['message']
  });

  try {
    register.registerMetric(newMessage);
  } catch (err) {
    console.warn('Get an error while registering HISTOGRAM')
    console.warn(getErrorMessage(err));
  }

  if (ctx.message) {
    const time = newMessage.startTimer();
    newMessage.observe({ message: JSON.stringify(ctx.message) }, time())
  }
  next();
}