"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEmoji() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get("https://emojihub.yurace.pro/api/random");
        const emoji = response.data;
        return emoji;
    });
}
function generateTextFromEmojis(emojis) {
    return __awaiter(this, void 0, void 0, function* () {
        const emojiCodes = emojis.map((emoji) => emoji.unicode[0]);
        let text = "";
        try {
            const response = yield axios_1.default.post("https://api.openai.com/v1/completions", {
                model: "text-davinci-003",
                prompt: `Generate name from the emojis: ${emojiCodes.join(", ")}`,
                max_tokens: 7,
                temperature: 0,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            });
            text = response.data.choices[0].text.trim();
        }
        catch (error) {
            console.error("error", error.response);
        }
        return text;
    });
}
function generateTextForEmojis() {
    return __awaiter(this, void 0, void 0, function* () {
        const emojis = [];
        for (let i = 0; i < 5; i++) {
            const emoji = yield getEmoji();
            emojis.push(emoji);
        }
        const text = yield generateTextFromEmojis(emojis);
        console.log(text);
    });
}
generateTextForEmojis();
