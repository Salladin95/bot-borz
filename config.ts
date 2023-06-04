import 'https://deno.land/x/dotenv@v3.2.2/load.ts';

export enum EnvVariables {
	botToken = 'BOT_TOKEN',
	port = 'PORT',
	supabaseUrl = 'BASE_URL',
	anonKey = 'ANON_KEY',
	functionSecret = 'FUNCTION_SECRET',
	yandexApiKey = 'YANDEX_API_KEY',
	prometheusPort = 'PROMETHEUS_PORT',
}

export const config: Record<keyof typeof EnvVariables, string | undefined> = {
	botToken: Deno.env.get(EnvVariables.botToken),
	port: Deno.env.get(EnvVariables.port),
	supabaseUrl: Deno.env.get(EnvVariables.supabaseUrl),
	anonKey: Deno.env.get(EnvVariables.anonKey),
	functionSecret: Deno.env.get(EnvVariables.functionSecret),
	yandexApiKey: Deno.env.get(EnvVariables.yandexApiKey),
	prometheusPort: Deno.env.get(EnvVariables.prometheusPort),
};
