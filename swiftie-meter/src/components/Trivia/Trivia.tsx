import React, { useState } from "react";
import data from "../../gai-api/response.json";
import Question from "./Trivia/Question/Question";

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
  const [noOfQuestion, setNoOfQuestion] = useState<number>(data.flat().length);
  const [noOfCorrect, setNoOfCorrect] = useState<number>(0);

  const handleOptionChange = (optionKey: string, key: number) => {
    setSelectedOption(optionKey);
  };

  const handleSubmit = (item: TriviaItem, key: number) => {
    if (selectedOption != null) {
      if (selectedOption === item.answer) {
        setResult(`Correct! ${item.evidence}`);
        setNoOfCorrect(noOfCorrect + 1);
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

  const totalScore =
    Number(((noOfCorrect / noOfQuestion) * 100).toPrecision(1)) * 13;
  return (
    <>
      {currentQuestionIndex === noOfQuestion ? (
        <div>
          <h2>Quiz Completed</h2>
          <h2>Your Swiftie Score: {totalScore}</h2>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <h2>Question: {`${currentQuestionIndex} / ${noOfQuestion}`}</h2>
            </div>

            <div>
              <Question
                question={item.question}
                options={item.options}
                handleOptionChange={handleOptionChange}
                selectedOption={currentQuestionIndex}
              ></Question>
            </div>
            <div>
              <h2>Quiz Completed</h2>
              <h2>Your Swiftie Score: {totalScore}</h2>
            </div>
            <div>
              <div>
                <button
                  onClick={() => handleSubmit(item, currentQuestionIndex)}
                >
                  Submit Answer
                </button>
                <button
                  className={
                    selectedOption ? "cursor-default" : "cursor-not-allowed"
                  }
                  onClick={handleNext}
                >
                  Next Question
                </button>
              </div>

              <div>
                <p> You Selected: {selectedOption}</p>
                <p> Result: {result} </p>
              </div>
            </div>
          </div>
          {/* onClick={selectedOption ? handleNext : undefined} */}
        </div>
      )}
    </>
  );
};

export default Trivia;
