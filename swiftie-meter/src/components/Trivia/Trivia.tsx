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
        <div className="m-8 p-5 flex justify-center items-center flex-col rounded-sm text-white bg-stone-600 sepia ">
          <h2>Quiz Completed!</h2>
          <h2>
            Your Swiftie Score:{" "}
            <span className="font-extrabold font-mono">{totalScore}</span>
          </h2>
        </div>
      ) : (
        <div className="p-3 sm:p-5">
          <div className="flex flex-col sm:flex-row justify-between bg-stone-500 text-white font-mono sepia rounded-sm mb-3 mt-12">
            <h2 className="text-sm sm:text-base">
              Question: {`${currentQuestionIndex + 1} / ${noOfQuestion}`}
            </h2>
          </div>

          <Question
            question={item.question}
            options={item.options}
            handleOptionChange={handleOptionChange}
            selectedOption={currentQuestionIndex}
          />

          <div className="flex flex-col sm:flex-row justify-between mt-4">
            <button
              className="bg-blue-500 w-full sm:w-auto sepia hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2 sm:mb-0"
              onClick={() => handleSubmit(item, currentQuestionIndex)}
            >
              Submit Answer
            </button>
            <button
              className={`${
                selectedOption ? "cursor-default" : "cursor-not-allowed"
              } bg-blue-500 w-full sm:w-auto sepia hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={handleNext}
            >
              Next Question
            </button>
          </div>

          <div className="bg-stone-500 sepia p-4 mt-3 rounded-sm text-start">
            <p>
              You Selected:{" "}
              <span className="font-semibold font-mono italic">
                {selectedOption}
              </span>
            </p>
            <p>
              Result:{" "}
              <span className="font-light font-mono italic">{result}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Trivia;
