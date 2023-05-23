import { Context, NextFunction } from '../../../deps.ts';

const greetNewMembers = (ctx: Context, next: NextFunction) => {
	console.log('new member');
	ctx.reply('WELCOME TO OUR CHAT');

	next();
};

export default greetNewMembers;
