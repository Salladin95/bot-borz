import { Api, Bot, Context, RawApi } from './deps.ts';

export type LangOption = 'ru' | 'eng';

export type MyContext = Context & {
	userLanguage: LangOption;
};

export type MyBot = Bot<MyContext, Api<RawApi>>;
export type Command = { command: string; description: string };
