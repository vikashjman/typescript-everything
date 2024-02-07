import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

async function getEmoji(): Promise<Emoji> {
  const response = await axios.get("https://emojihub.yurace.pro/api/random");
  const emoji: Emoji = response.data as Emoji;
  return emoji;
}

async function generateTextFromEmojis(emojis: Emoji[]): Promise<string> {
  const emojiCodes = emojis.map((emoji) => emoji.unicode[0]);

  let text = "";
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      { 
        model: "text-davinci-003",
        prompt: `Generate name from the emojis: ${emojiCodes.join(
          ", "  
        )}`,
        max_tokens: 7, 
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    text = response.data.choices[0].text.trim();
  } catch (error: any) {
    console.error("error", error.response); 
  }
  return text; 
} 

async function generateTextForEmojis() {
  const emojis: Emoji[] = [];
  for (let i = 0; i < 5; i++) {
    const emoji = await getEmoji();
    emojis.push(emoji);
  }
  const text = await generateTextFromEmojis(emojis);
  console.log(text);
}

generateTextForEmojis();
