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

  const { register } = prom;

  app.use(router.routes());
  app.use(router.allowedMethods());
  
	router.get('/metrics', async ({ response }) => {
		response.headers.set('Content-Type', register.contentType);
		response.body = await register.metrics();
	});

  app.listen({ port, signal });
  return { controller };
}