import {
	Application,
	prom,
	Router,
} from '../../../deps.ts';

export const startMetricsServer = (port: number) => {
  const app = new Application();
  const router = new Router();
  const controller = new AbortController();
  const { signal } = controller;

  const { register, Registry } = prom;
  const registry = new Registry();


  app.use(router.routes());
  app.use(router.allowedMethods());
  
	router.get('/metrics', async ({ request, response }) => {
		response.headers.set('Content-Type', register.contentType);
		response.body = await register.metrics();
	});


  const listenPromise = app.listen({ port, signal });
  return { controller, router, register, listenPromise, registry, app };
}