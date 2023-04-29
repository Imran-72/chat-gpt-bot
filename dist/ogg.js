var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { createWriteStream } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
class OggConverter {
    constructor() {
    }
    toMp3() {
    }
    create(url, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oggPath = resolve(__dirname, '../voices', `${fileName}.ogg`);
                const response = yield axios({
                    method: 'get',
                    url,
                    responseType: 'stream'
                });
                return new Promise(resolve => {
                    const stream = createWriteStream(oggPath);
                    response.data.pipe(stream);
                    stream.on('finish', () => resolve(oggPath));
                });
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
}
