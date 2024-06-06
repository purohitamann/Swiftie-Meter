// node --version # Should be >= 18
// npm install @google/generative-ai
import { readFile, writeFile } from "fs";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyBQZiYBsCR0aLm7EW_OZBp0aOrlehD2dMI";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "start" }],
      },
      {
        role: "model",
        parts: [
          {
            text: '[\n  {\n    "question": "In the \'Lavender Haze\' music video, what color is the record player?",\n    "options": {\n      "a": "Purple",\n      "b": "Blue",\n      "c": "Green"\n    },\n    "evidence": "Throughout the video, several objects appear in a lavender shade, including a fishbowl, smoke, and the record player, aligning with the song\'s title.",\n    "answer": "a"\n  },\n  {\n    "question": "Which track on \'Midnights\' features Lana Del Rey?",\n    "options": {\n      "a": "Snow On The Beach",\n      "b": "Lavender Haze",\n      "c": "You\'re On Your Own, Kid"\n    },\n    "evidence": "Lana Del Rey is credited as a featured artist on the track \'Snow On The Beach\'.",\n    "answer": "a"\n  },\n  {\n    "question": "What is the name of the fictional talk show mentioned in \'Anti-Hero\'?",\n    "options": {\n      "a": "The Tonight Show",\n      "b": "The Late Show",\n      "c": "Midnights Mayhem With Me"\n    },\n    "evidence": "The lyrics state, \'Sometimes I feel like everybody is a sexy baby / And I\'m a monster on the hill / Too big to hang out / Slowly lurching toward your favorite city / Pierced through the heart but never killed / Did you hear my covert narcissism I disguise as altruism / Like some kind of congressman? (Tale as old as time) / I wake up screaming from dreaming / One day, I\'ll watch as you\'re leaving / \'Cause you got tired of my scheming (For the last time) / And on that day, I\'ll lose the loudest of my crown / I\'ll stare directly at the sun, but never in the mirror / It must be exhausting always rooting for the anti-hero / Sometimes I feel like everybody is a sexy baby / And I\'m a monster on the hill / Too big to hang out / Slowly lurching toward your favorite city / Pierced through the heart but never killed / Did you hear my covert narcissism I disguise as altruism / Like some kind of congressman? (Tale as old as time) / I wake up screaming from dreaming / One day, I\'ll watch as you\'re leaving / And you got tired of my scheming (For the last time) / And on that day, I\'ll lose the loudest of my crown / I\'ll stare directly at the sun, but never in the mirror / It must be exhausting always rooting for the anti-hero / Did you hear about the girl who lives in delusion? / Breakups and breakdowns and swirling with the fumes / She\'ll hang you out to dry, like you were her best friend / She\'ll throw a party and you won\'t get in / This is my town / We never see each other now / I don\'t want to play, I want to go home / I\'ll stay on my own in my lavender haze / I just wanna stay in my lavender haze / I just wanna stay in my lavender haze / I don\'t want to play, I want to go home / I\'ll stay on my own in my lavender haze / All they keep asking me is if I\'m gonna be your bride / The only kinda girl they see is a one-night or a wife / I find it dizzying, they\'re bringing up my history / But you weren\'t even listening\', which references a fictional talk show.",\n    "answer": "c"\n  },\n  {\n    "question": "Which song on \'Midnights\' is about falling in love with a best friend?",\n    "options": {\n      "a": "You\'re On Your Own, Kid",\n      "b": "Snow On The Beach",\n      "c": "Lavender Haze"\n    },\n    "evidence": "The lyrics of \'You\'re On Your Own, Kid\' depict a narrative of unrequited love for a best friend, ultimately ending with the realization of being alone.",\n    "answer": "a"\n  },\n  {\n    "question": "What is the name of the lead single from \'Midnights\'?",\n    "options": {\n      "a": "Anti-Hero",\n      "b": "Lavender Haze",\n      "c": "Snow On The Beach"\n    },\n    "evidence": "Taylor Swift announced \'Anti-Hero\' as the lead single from \'Midnights\' on her social media platforms.",\n    "answer": "a"\n  },\n  {\n    "question": "In the \'Anti-Hero\' music video, what object does Taylor Swift use to toast with her future self?",\n    "options": {\n      "a": "Wine glass",\n      "b": "Coffee mug",\n      "c": "Champagne flute"\n    },\n    "evidence": "The music video shows Taylor Swift toasting with her future self using champagne flutes, symbolizing a celebration or cheers.",\n    "answer": "c"\n  },\n  {\n    "question": "Which song on \'Midnights\' reflects on a past relationship with regret?",\n    "options": {\n      "a": "Midnight Rain",\n      "b": "You\'re On Your Own, Kid",\n      "c": "Karma"\n    },\n    "evidence": "The lyrics of \'Midnight Rain\' express regret over a past relationship where the narrator chose ambition over love.",\n    "answer": "a"\n  },\n  {\n    "question": "What mythical creature is mentioned in the lyrics of \'Lavender Haze\'?",\n    "options": {\n      "a": "Mermaid",\n      "b": "Dragon",\n      "c": "Siren"\n    },\n    "evidence": "The lyrics, \'I\'ve been under scrutiny / You handle it beautifully / All this shit is new to me / I feel the lavender haze creeping up on me / Surreal / I\'m damned if I do give a damn what people say / No deal / The 1950s shit they want from me / I just wanna stay in my lavender haze / That\'s the state I\'m in when you\'re near me / \'Cause you know it gets me out of my head / It\'s a lavender haze / The only kinda girl they see is a one night or a wife / I find it dizzying, they\'re bringing up my history / But you weren\'t even listening\' mention the mythical creature \'Siren\'.",\n    "answer": "c"\n  },\n  {\n    "question": "Which song on \'Midnights\' explores the feeling of being haunted by past mistakes?",\n    "options": {\n      "a": "Anti-Hero",\n      "b": "Snow On The Beach",\n      "c": "Karma"\n    },\n    "evidence": "The song \'Anti-Hero\' delves into the theme of self-loathing and being haunted by one\'s past mistakes, as evident in the lyrics and music video.",\n    "answer": "a"\n  },\n  {\n    "question": "In the \'Bejeweled\' music video, what fairy tale character does Taylor Swift portray?",\n    "options": {\n      "a": "Cinderella",\n      "b": "Snow White",\n      "c": "Sleeping Beauty"\n    },\n    "evidence": "The \'Bejeweled\' music video features Taylor Swift in a Cinderella-like narrative, complete with a castle, stepsisters, and a transformation scene.",\n    "answer": "a"\n  },\n  {\n    "question": "Which song on \'Midnights\' describes a relationship that feels like a dream?",\n    "options": {\n      "a": "Lavender Haze",\n      "b": "Snow On The Beach",\n      "c": "Sweet Nothing"\n    },\n    "evidence": "The lyrics of \'Snow On The Beach\' depict a love that feels surreal and dreamlike, comparing it to the rare phenomenon of snow falling on a beach.",\n    "answer": "b"\n  },\n  {\n    "question": "In the \'Anti-Hero\' music video, what instrument does Taylor Swift play on the roof?",\n    "options": {\n      "a": "Guitar",\n      "b": "Piano",\n      "c": "Saxophone"\n    },\n    "evidence": "The \'Anti-Hero\' music video shows Taylor Swift playing a guitar on the roof, overlooking the city.",\n    "answer": "a"\n  },\n  {\n    "question": "What is the name of the track five on \'Midnights\'?",\n    "options": {\n      "a": "You\'re On Your Own, Kid",\n      "b": "Midnight Rain",\n      "c": "Anti-Hero"\n    },\n    "evidence": "Track five on \'Midnights\' is titled \'You\'re On Your Own, Kid\', known by fans as a significant position in Taylor Swift\'s albums for emotionally charged songs.",\n    "answer": "a"\n  }\n]\n',
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage("start");
  const response = result.response;
  console.log(response.text().substring(0, 100) + "...");
  const responseText = response.text();

  function trimTriviaData(text) {
    // Parse the text into a JSON object
    const data = JSON.parse(text);

    // Map over the data and return a new object with trimmed properties
    const trimmedData = data.map((item) => {
      return {
        question: item.question.trim(),
        options: {
          a: item.options.a.trim(),
          b: item.options.b.trim(),
          c: item.options.c.trim(),
        },
        answer: item.answer.trim(),
        evidence: item.evidence.trim(),
      };
    });

    return trimmedData;
  }

  // Usage:
  const trimmedData = trimTriviaData(response.text());
  console.log(trimmedData);
  // Convert the response text to a JSON object
  const responseObject = trimmedData;
  readFile("response.json", "utf8", (err, data) => {
    if (err || data === "") {
      // If the file does not exist, create a new array
      data = "[]";
    }

    //   Parse the existing data to a JSON array
    const responseArray = JSON.parse(data);

    //   Add the new response to the array
    responseArray.push(responseObject);

    // Convert the array back to a JSON string
    const responseJson = JSON.stringify(responseArray, null, 2);

    // Write the JSON string to the file
    writeFile("response.json", responseJson, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
}

runChat();
