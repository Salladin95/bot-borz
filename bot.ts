import { load } from "https://deno.land/std/dotenv/mod.ts";
import { Bot, Context } from "https://deno.land/x/grammy@v1.16.0/mod.ts";

const env = await load();
const token = env["TOKEN"];


// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(token); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx: Context) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx: Context) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();

console.log('Bot is running');