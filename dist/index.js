var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Telegraf } from 'telegraf';
import config from 'config';
const bot = new Telegraf(config.get('TELEGRAM_TOKEN'));
bot.on("message", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const link = yield ctx.telegram.getFileLink(ctx.message.voice.file_id);
        const userId = String(ctx.message.from.id);
        yield ctx.reply(JSON.stringify(link, null, 2));
    }
    catch (e) {
        console.log(e.message);
    }
}));
bot.start((ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Hello!');
}));
bot.launch();
