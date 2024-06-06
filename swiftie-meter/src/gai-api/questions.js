/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You're a Taylor Swift Encyclopedia. You know everything about Taylor Swift and her Music. you will ask Taylor Swift fan, so called Swifties trivia question. the trivia should be in the following format, a question, three options, and evidence for the correct answer. I just wanted to let you know that I just wanted to let you know that you will return this response in JSON format. keep this response up to 10 questions set at least\nstart as soon as the user says start. ",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [{ text: "give me 10 questions" }],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n[\n  {\n    "question": "In which year did Taylor Swift release her debut self-titled album?",\n    "options": [\n      "2006",\n      "2007",\n      "2008"\n    ],\n    "evidence": "Taylor Swift\'s debut album, titled \\"Taylor Swift\\", was released on October 24, 2006."\n  },\n  {\n    "question": "Which song from Taylor Swift\'s album \'Fearless\' won her the Grammy Award for Song of the Year in 2010?",\n    "options": [\n      "Love Story",\n      "You Belong With Me",\n      "Fifteen"\n    ],\n    "evidence": "\\"You Belong With Me\\" from Taylor Swift\'s album \'Fearless\' won the Grammy Award for Song of the Year in 2010."\n  },\n  {\n    "question": "Which of these songs was NOT featured on Taylor Swift\'s album \'Red\'?",\n    "options": [\n      "All Too Well",\n      "I Knew You Were Trouble",\n      "Blank Space"\n    ],\n    "evidence": "\\"Blank Space\\" was released on Taylor Swift\'s album \'1989\', not \'Red\'."\n  },\n  {\n    "question": "What is the name of Taylor Swift\'s first self-directed music video?",\n    "options": [\n      "You Belong With Me",\n      "Love Story",\n      "Our Song"\n    ],\n    "evidence": "Taylor Swift directed the music video for \\"Our Song\\", which was released in 2007."\n  },\n  {\n    "question": "Which song did Taylor Swift write for the movie \'Valentine\'s Day\'?",\n    "options": [\n      "Today Was a Fairytale",\n      "Enchanted",\n      "Mine"\n    ],\n    "evidence": "Taylor Swift wrote and performed the song \\"Today Was a Fairytale\\" for the movie \'Valentine\'s Day\'."\n  },\n  {\n    "question": "What is the name of Taylor Swift\'s cat who has been featured in multiple music videos and Instagram posts?",\n    "options": [\n      "Meredith",\n      "Olivia",\n      "Benjamin"\n    ],\n    "evidence": "Meredith is the name of Taylor Swift\'s cat who has been featured in numerous music videos and social media posts."\n  },\n  {\n    "question": "Which of these awards has Taylor Swift NOT won?",\n    "options": [\n      "Grammy Award for Album of the Year",\n      "Academy Award for Best Original Song",\n      "American Music Award for Artist of the Year"\n    ],\n    "evidence": "Taylor Swift has won numerous Grammy Awards, American Music Awards, and other prestigious accolades, but has yet to win an Academy Award for Best Original Song."\n  },\n  {\n    "question": "What is the name of the fictional town Taylor Swift often references in her songs?",\n    "options": [\n      "Nashville",\n      "New York City",\n      "Long Pond"\n    ],\n    "evidence": "Taylor Swift frequently mentions the fictional town of \\"Long Pond\\" in her songs."\n  },\n  {\n    "question": "In which year did Taylor Swift release her first re-recorded album, \'Fearless (Taylor\'s Version)\'?",\n    "options": [\n      "2020",\n      "2021",\n      "2022"\n    ],\n    "evidence": "\'Fearless (Taylor\'s Version)\' was released on April 9, 2021."\n  },\n  {\n    "question": "Which of these songs was NOT originally written by Taylor Swift but was covered by her?",\n    "options": [\n      "White Horse",\n      "You\'re Not Sorry",\n      "Untouchable"\n    ],\n    "evidence": "\\"Untouchable\\" was originally written and performed by the band \'The Band Perry\', later covered by Taylor Swift."\n  }\n]\n```',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("start");
  console.log(result.response.text());
}

run();
