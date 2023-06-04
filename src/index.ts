import { config } from '../config.ts';
import launchBot from './services/launchBot.ts';

const token = config.botToken;

token && launchBot(token);
