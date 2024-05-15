import { config } from 'dotenv';
import { Telegraf } from 'telegraf';

config();

const bot = new Telegraf(`${process.env.TELEGRAM_BOT_TOKEN}`);

bot.command('start', ctx => {
  // Handle start command
  ctx.reply('Welcome to Activity Tracker Bot!');
});

bot.command('log', async ctx => {
  const { id, username } = ctx.from;
  const { text } = ctx.message;

  ctx.reply(`Activity "${text}" logged successfully for user ${username}`);
});

bot.launch().then(ctx => {
  console.log(ctx);
});
