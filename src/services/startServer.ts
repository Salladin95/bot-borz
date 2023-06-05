import {
	Application,
	prom,
	Router,
} from '../../deps.ts';

export const startServer = (port: number) => {
  const { register, Registry, Histogram } = prom;
  const app = new Application();
  const controller = new AbortController();
  const { signal } = controller;

  const router = new Router();
  const registry = new Registry();

  app.use(router.routes());
  app.use(router.allowedMethods());

  const histogram = new Histogram({
    name: 'new_message',
    help: 'new_message_help',
    labelNames: ['from', 'text']
  });
  register.registerMetric(histogram);

  const listenPromise = app.listen({ port: 6000, signal });
  return { controller, router, register, app,  listenPromise, registry, histogram };
}