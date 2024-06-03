import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col font-sometype-mono w-[1200px]  mt-32 h-auto">
        <h1 className=" font-bold text-3xl  text-white pb-4 ">ABOUT</h1>
        <div className=" text-3xl bg-white rounded-md p-12">
          <div className=" font-bold px-16">
            <h1 className="font-bold  mb-4">How It Works</h1>

            <ol className="list-decimal">
              <li>Take the Trivia: Answer a series of fun and challenging</li>
              <li>
                Get Your Score: See how many questions you got right and get
                instant feedback.
              </li>
              <li>
                Climb the Leaderboard: Compare your score with other Swifties
                and see where you rank.
              </li>
              <li>
                Challenge Your Friends: Invite friends to take the quiz and see
                who knows Taylor Swift best.
              </li>
            </ol>
            <h1 className="font-bold  mt-4 mb-4">Features</h1>
            <ul className="list-disc">
              <li>
                Quick and Fun Quizzes: Each quiz is designed to be quick, so you
                can test your knowledge anytime, anywhere.
              </li>
              <li>
                Up-to-Date Content: Our trivia questions cover Taylor Swift’s
                latest albums, singles, and fun facts.
              </li>
              <li>
                Global Leaderboard: See how you stack up against other fans from
                around the world.
              </li>
              <li>
                Regular Updates: New questions added regularly to keep the
                trivia fresh and exciting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
