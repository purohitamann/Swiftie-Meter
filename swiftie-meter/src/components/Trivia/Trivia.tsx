// import React, { useState } from "react";
// import data from "../../gai-api/response.json";

// interface TriviaItem {
//   question: string;
//   options: {
//     a: string;
//     b: string;
//     c: string;
//   };
//   answer: string;
//   evidence: string;
// }

// const Trivia = () => {
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
//   const [result, setResult] = useState<string[]>([]);

//   const handleOptionChange = (optionKey: string, index: number) => {
//     const newSelectedOptions = [...selectedOptions];
//     newSelectedOptions[index] = optionKey;
//     setSelectedOptions(newSelectedOptions);
//   };

//   const handleSubmit = (item: TriviaItem, key: number) => {
//     if (selectedOptions[key] != null) {
//       if (selectedOptions[key] === item.answer) {
//         const newResult = [...result];
//         newResult[key] = `Correct! ${item.evidence}`;
//         setResult(newResult);
//       } else {
//         const newResult = [...result];
//         newResult[key] = `Incorrect! ${item.evidence}`;
//         setResult(newResult);
//       }
//     } else {
//       const newResult = [...result];
//       newResult[key] = `Select your answer!`;
//       setResult(newResult);
//     }
//   };

//   return (
//     <div>
//       <button type="submit">Start</button>
//       {data.map((subArray: TriviaItem[], index: number) =>
//         subArray.map((item: TriviaItem, key: number) => (
//           <div className="trivia" key={key}>
//             <h2>Question: {item.question.toUpperCase()}</h2>
//             <h3>Options</h3>
//             <label htmlFor={"a"} >a</label>
//             <button id={"a"} onClick={() => handleOptionChange("a", key)}>
//               {item.options.a}
//             </button>
//             <label htmlFor={"b"} >b</label>
//             <button id={"b"}  onClick={() => handleOptionChange("b", key)}>
//               {item.options.b}
//             </button>
//             <label htmlFor={"c"} >c</label>
//             <button id={"c"}  onClick={() => handleOptionChange("c", key)}>
//               {item.options.c}
//             </button>
//             <button type="submit" onClick={() => handleSubmit(item, key)}>
//               Submit Answer
//             </button>
//             <p> You Selected: {selectedOptions[key]}</p>
//             <p> Result: {result[key]} </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Trivia;
import React, { useState } from 'react'
import data from  '../../gai-api/response.json';

interface TriviaItem {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
  };
  answer: string;
  evidence: string;
}

const Trivia = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [noOfQuaestion, setNoOfQuestion] = useState<number>(data.flat().length);

  const handleOptionChange = (optionKey: string, key: number) => {
    setSelectedOption(optionKey);
  };

  const handleSubmit = (item: TriviaItem, key: number) => {
    if (selectedOption != null) {
      if (selectedOption === item.answer) {
        setResult(`Correct! ${item.evidence}`);
      } else {
        setResult(`Incorrect! ${item.evidence}`);
      }
    } else {
      setResult(`Select your answer!`);
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setResult(null);
  };

  const item = data.flat()[currentQuestionIndex];

  return (
    <div>
      <h2>No. of Questions: {noOfQuaestion- currentQuestionIndex}</h2>
      <h2>Question: {item.question.toUpperCase()}</h2>
      <h3>Options</h3>
      <button value={"a"} onClick={() => handleOptionChange('a', currentQuestionIndex)}>{item.options.a}</button>
      <button value={"b"} onClick={() => handleOptionChange('b', currentQuestionIndex)}>{item.options.b}</button>
      <button value={"c"} onClick={() => handleOptionChange('c', currentQuestionIndex)}>{item.options.c}</button>
      <button type="submit" onClick={() => handleSubmit(item, currentQuestionIndex)}>Submit Answer</button>
      <p> You Selected: {selectedOption}</p>
      <p> Result: {result} </p>
      <button onClick={selectedOption ? handleNext : undefined}>Next Question</button>
    </div>
  )
}

export default Trivia