import React from "react";

interface QuestionProps {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
  };
  selectedOption: number | null;
  handleOptionChange: (optionKey: string, selectedOption: any) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <div className="bg-stone-500 text-white p-5 my-5 mx-3 rounded-sm text-lg font-mono select-none md:mx-auto md:max-w-4xl">
      <div className="divide-y divide-gray-200">
        <h2 className="text-base md:text-lg leading-normal">
          Question: <span className="font-semibold">{question}</span>
        </h2>
        <div className="pt-4">
          <h3 className="font-semibold">Options:</h3>
          <div className="space-y-4 mt-2">
            <button
              className="block w-full text-left transition duration-500 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionChange("a", selectedOption)}
            >
              a) {options.a}
            </button>
            <button
              className="block w-full text-left transition duration-500 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionChange("b", selectedOption)}
            >
              b) {options.b}
            </button>
            <button
              className="block w-full text-left transition duration-500 ease-in-out transform hover:scale-105"
              onClick={() => handleOptionChange("c", selectedOption)}
            >
              c) {options.c}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
