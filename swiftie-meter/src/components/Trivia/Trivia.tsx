import React, { useState } from "react";
import data from "../../gai-api/response.json";

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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [result, setResult] = useState<string[]>([]);

  const handleOptionChange = (optionKey: string, index: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = optionKey;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = (item: TriviaItem, key: number) => {
    if (selectedOptions[key] != null) {
      if (selectedOptions[key] === item.answer) {
        const newResult = [...result];
        newResult[key] = `Correct! ${item.evidence}`;
        setResult(newResult);
      } else {
        const newResult = [...result];
        newResult[key] = `Incorrect! ${item.evidence}`;
        setResult(newResult);
      }
    } else {
      const newResult = [...result];
      newResult[key] = `Select your answer!`;
      setResult(newResult);
    }
  };

  return (
    <div>
      <button type="submit">Start</button>
      {data.map((subArray: TriviaItem[], index: number) =>
        subArray.map((item: TriviaItem, key: number) => (
          <div className="trivia" key={key}>
            <h2>Question: {item.question.toUpperCase()}</h2>
            <h3>Options</h3>
            <label htmlFor={"a"} >a</label>
            <button id={"a"} onClick={() => handleOptionChange("a", key)}>
              {item.options.a}
            </button>
            <label htmlFor={"b"} >b</label>
            <button id={"b"}  onClick={() => handleOptionChange("b", key)}>
              {item.options.b}
            </button>
            <label htmlFor={"c"} >c</label>
            <button id={"c"}  onClick={() => handleOptionChange("c", key)}>
              {item.options.c}
            </button>
            <button type="submit" onClick={() => handleSubmit(item, key)}>
              Submit Answer
            </button>
            <p> You Selected: {selectedOptions[key]}</p>
            <p> Result: {result[key]} </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Trivia;
