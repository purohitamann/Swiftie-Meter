import React from "react";

const About = () => {
  return (
    <div id="about" className="z-40">
      <div className="blur-[500px] w-1/2 h-1/2  absolute -left-1/2 uppercase -top-2/3  bg-white rounded-xl"></div>
      <div className="flex flex-col font-sometype-mono w-[1200px]  mt-32 h-auto">
        <h1 className=" font-bold text-3xl  text-white pb-4 ">ABOUT</h1>
        <div className=" text-3xl bg-white rounded-md p-12">
          <div className=" font-bold px-16 text-2xl">
            <h1 className="font-bold uppercase mb-4">How It Works</h1>

            <ol className="list-decimal uppercase">
              <li>
                Take the Trivia:{" "}
                <span className="font-normal italic">
                  {" "}
                  Answer a series of fun and challenging questions.
                </span>
              </li>
              <li>
                Get Your Score:{" "}
                <span className="font-normal italic">
                  {" "}
                  See how many questions you got right and get instant feedback.
                </span>
              </li>
              <li>
                Climb the Leaderboard:{" "}
                <span className="font-normal italic">
                  {" "}
                  Compare your score with other Swifties and see where you rank.
                </span>
              </li>
              <li>
                Challenge Your Friends:{" "}
                <span className="font-normal italic">
                  {" "}
                  Invite friends to take the quiz and see who knows Taylor Swift
                  best.
                </span>
              </li>
            </ol>
            <h1 className="font-bold uppercase mt-4 mb-4">Features</h1>
            <ul className="list-disc uppercase ">
              <li>
                Quick and Fun Quizzes:
                <span className="font-normal italic">
                  {" "}
                  Each quiz is designed to be quick, so you can test your
                  knowledge anytime, anywhere.
                </span>
              </li>
              <li>
                Up-to-Date Content:{" "}
                <span className="font-normal italic">
                  {" "}
                  Our trivia questions cover Taylor Swift{"'"}s latest albums,
                  singles, and fun facts.
                </span>
              </li>
              <li>
                Global Leaderboard:{" "}
                <span className="font-normal italic">
                  {" "}
                  See how you stack up against other fans from around the world.
                </span>
              </li>
              <li>
                Regular Updates:{" "}
                <span className="font-normal italic">
                  {" "}
                  New questions added regularly to keep the trivia fresh and
                  exciting.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blur-[500px] w-1/2 h-1/2 z-100 absolute -left-1/2 top-96 bg-white rounded-xl"></div>
    </div>
  );
};

export default About;
