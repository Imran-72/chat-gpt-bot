import {Telegraf} from 'telegraf';
import config from 'config';

const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));


bot.on("message", async (ctx) => {
    try {
        const link = await ctx.telegram.getFileLink(ctx.message.voice.file_id)
        const userId = String(ctx.message.from.id)
        await ctx.reply(JSON.stringify(link, null, 2))
    } catch (e) {
        console.log(e.message)
    }
})

bot.start(async (ctx) => {
    await ctx.reply('Hello!')
});

bot.launch()
