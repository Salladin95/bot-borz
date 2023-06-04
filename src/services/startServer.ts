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
  // histogram.observe(10); // Observe value in histogram

  const listenPromise = app.listen({ port, signal });
  return { controller, router, register,  listenPromise, registry, histogram };
}