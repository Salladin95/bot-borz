import { config } from '../../../config.ts';
import { MyBot } from '../../../contracts.ts';
import { collectMessages } from '../../middlewares/collectMessages.ts';
import { startMetricsServer } from './startMetricsServer.ts';

const port = config.appPort ?? 6000;

export const collectMetrics = (bot: MyBot) => {
	const { controller } = startMetricsServer(+port);
	
	bot.use(collectMessages);

	Deno.addSignalListener('SIGINT', () => {
		controller.abort();
		bot.stop();
	});
	Deno.addSignalListener('SIGTERM', () => {
		controller.abort();
		bot.stop();
	});
};
