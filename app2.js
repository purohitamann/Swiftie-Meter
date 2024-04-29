// node --version # Should be >= 18
// npm install @google/generative-ai
const fs = require('fs');
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
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
          parts: [{ text: "give me a trivia question about Taylor Swift"}],
        },
        {
          role: "model",
          parts: [
            { text: `{...}`} // We don't need the full response text here
          ],
        },
      ],
    });
  
    const result = await chat.sendMessage("give me a trivia question about Taylor Swift");
    const response = result.response;

    // Full response is logged
    console.log("Full Model Response:", response.text()); 

    // Parse the response text to extract trivia object
    const triviaString = response.text();
    const triviaObject = parseTriviaResponse(triviaString);

    console.log("Extracted Trivia Object:", triviaObject);  // This will log the trivia object

    // Function to parse trivia response and return the object
    function parseTriviaResponse(triviaString) {
      const openingIndex = triviaString.indexOf('{question:');
      const closingIndex = triviaString.lastIndexOf('}');

      if (openingIndex === -1 || closingIndex === -1) {
        return null; // Handle invalid response format
      }

      const triviaData = triviaString.substring(openingIndex + 11, closingIndex);
      const parts = triviaData.split(',');

      const question = parts[0].split(':')[1].trim().slice(1, -1); // Extract question
      const options = parts[1].split(':')[1].trim().slice(1, -2).split(', '); // Extract options as array
      const answer = parts[2].split(':')[1].trim().slice(1, -1); // Extract answer (assuming it's the correct option)
      const evidence = parts[3].split(':')[1].trim().slice(1, -1); // Extract evidence

      return { question, options, answer, evidence };
    }

    // Storing the trivia object in a file (optional)
    fs.writeFile('trivia.json', JSON.stringify(triviaObject, null, 2), (err) => {
      if (err) throw err;
      console.log('The trivia object has been saved to trivia.json!');
    });
  }
  
  runChat();
