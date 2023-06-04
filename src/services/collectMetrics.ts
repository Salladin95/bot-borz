import { config } from '../../config.ts';
import { MyBot } from '../../contracts.ts';
import { startServer } from './startServer.ts';

const port = config.prometheusPort ?? 6000;

export const startMetricsServer = async (bot: MyBot) => {
	const { router, register, controller, listenPromise, histogram } = startServer(+port);
	
	bot.use((ctx, next) => {
		if (ctx.from && ctx.message?.text) {
			const time = histogram.startTimer();
			histogram.observe({ from: ctx.from.id.toString(), text: ctx.message.text }, time())
		}
		next();
	});
	
	router.get('/metrics', async ({ request, response }) => {
		response.headers.set('Content-Type', register.contentType);
		response.body = await register.metrics();
	});

	Deno.addSignalListener('SIGINT', () => {
		controller.abort();
		bot.stop();
	});
	Deno.addSignalListener('SIGTERM', () => {
		controller.abort();
		bot.stop();
	});

	console.log(`Metrics server started on http://localhost:${port}/`);
	await listenPromise;
};
