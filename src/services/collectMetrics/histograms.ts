import { prom } from "../../../deps.ts";
const { Histogram } = prom;

export const newMessageHistogram = new Histogram({
  name: 'new_incoming_message',
  help: 'Incoming message for bot',
  labelNames: ['message']
});