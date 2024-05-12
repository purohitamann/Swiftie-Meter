

// node --version # Should be >= 18
// npm install @google/generative-ai
import { readFile, writeFile } from 'fs';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
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
          parts: [{ text: "start"}],
        },
        {
          role: "model",
          parts: [{ text: `{question: In the 'Anti-Hero' music video, what does the phrase 'sexy baby' written on the scale represent?,options: [A reference to a lyric from the song 'Delicate',  A commentary on societal beauty standards,  A childhood nickname given to Taylor Swift ], answer: A commentary on societal beauty standards, evidence: The scene with the scale in the 'Anti-Hero' video is full of symbolism related to body image and self-perception. The phrase 'sexy baby' highlights the unrealistic and often conflicting expectations placed on women.}`}],
        },
      ],
    });
  
    const result = await chat.sendMessage("start");
    const response = result.response;
    const triviaString = response.text();
    console.log(response.text());
    // const triviaObject = parseTriviaResponse(triviaString);

    // console.log("Extracted Trivia Object:", triviaObject);
    // function parseTriviaResponse(triviaString) {
    //     const openingIndex = triviaString.indexOf('{question:');
    //     const closingIndex = triviaString.lastIndexOf('}');
  
    //     if (openingIndex === -1 || closingIndex === -1) {
    //       return null; // Handle invalid response format
    //     }
  
    //     const triviaData = triviaString.substring(openingIndex + 11, closingIndex);
    //     const parts = triviaData.split(',');
  
    //     const question = parts[0].split(':')[1].trim().slice(1, -1); // Extract question
    //     const options = parts[1].split(':')[1].trim().slice(1, -2).split(', '); // Extract options as array
    //     const answer = parts[2].split(':')[1].trim().slice(1, -1); // Extract answer (assuming it's the correct option)
    //     const evidence = parts[3].split(':')[1].trim().slice(1, -1); // Extract evidence
  
    //     return { question, options, answer, evidence };
    //   }
  
    // storing the response in a file
    const responseText = response.text();

// Convert the response text to a JSON object
    const responseObject = { text: responseText };
    readFile('response.json', 'utf8', (err, data) => {
        if (err) {
          // If the file does not exist, create a new array
          data = '[]';
        }
      
        // Parse the existing data to a JSON array
        const responseArray = JSON.parse(data);
      
        // Add the new response to the array
        responseArray.push(responseObject);
      
        // Convert the array back to a JSON string
        const responseJson = JSON.stringify(responseArray, null, 2);
      
        // Write the JSON string to the file
        writeFile('response.json', responseJson, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });
      });
      
  }
  
  runChat();