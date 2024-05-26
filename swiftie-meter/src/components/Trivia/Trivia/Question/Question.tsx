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
    <div className=" filter w-20 h-5/6 sepia md:container box-content z-10 font-light tracking-wide align-top md:break-normal border-dashed rounded-sm  mx-3 p-5  leading-relaxed text-left subpixel-antialiased text-lg font-mono md:mx-auto bg-stone-500  text-white select-none ">
      <div className="grid grid-row-2 divide-y-2 divide-none">
        <h2>
          Question: <span className="font-semibold"> {question}</span>
        </h2>
        <div className="container w-90 ">
          <h3>Options:</h3>
          <div className="grid grid-cols-3 divide-x divide-none">
            <button
              className="transition duration-500 ease-in-out transform hover:filter hover:invert hover:scale-110 delay-10 hover:skew-y-2 cursor-pointer"
              value={"a"}
              onClick={() => handleOptionChange("a", selectedOption)}
            >
              a {options.a}
            </button>
            <button
              className="transition duration-500 ease-in-out transform hover:filter hover:invert hover:scale-110 delay-10 hover:skew-x-2 cursor-pointer"
              value={"b"}
              onClick={() => handleOptionChange("b", selectedOption)}
            >
              b {options.b}
            </button>

            <button
              className="transition duration-500 ease-in-out transform hover:filter hover:invert hover:scale-110 delay-10 hover:-skew-y-2 cursor-pointer"
              value={"c"}
              onClick={() => handleOptionChange("c", selectedOption)}
            >
              c {options.c}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
