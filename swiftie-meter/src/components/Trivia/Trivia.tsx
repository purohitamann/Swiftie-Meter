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
        <div className=" m-5 p-10 flex justify-center align-items-center flex-col p-5 mt-3 rounded-sm text-white bg-stone-600 sepia">
          <h2>Quiz Completed!</h2>
          <h2>
            Your Swiftie Score:{" "}
            <span className="font-extrabold font-mono"> {totalScore}</span>
          </h2>
        </div>
      ) : (
        <div>
          <div>
            <div className="flex justify-between flex-col p-5 m-10 -mb-3 bg-stone-500 text-white  font-mono sepia rounded-sm">
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

            <div className="flex justify-between flex-col p-5 m-5 -mt-7">
              <div className=" flex justify-center align-items-center text-center  ">
                <button
                  className="bg-blue-500 w-1/2 sepia hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleSubmit(item, currentQuestionIndex)}
                >
                  Submit Answer
                </button>
                <button
                  className={
                    selectedOption
                      ? "cursor-default w-1/2 bg-blue-500 sepia hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      : "cursor-not-allowed w-1/2 bg-blue-500 sepia hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  }
                  onClick={handleNext}
                >
                  Next Question
                </button>
              </div>

              <div className="flex text-white flex-col bg-stone-500 sepia p-4  mt-3 rounded-sm text-start">
                <p>
                  {" "}
                  You Selected:{" "}
                  <span className="font-semibold font-mono italic">
                    {selectedOption}{" "}
                  </span>
                </p>
                <p>
                  Result:{" "}
                  <span className="font-light font-mono italic"> {result}</span>
                </p>
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
