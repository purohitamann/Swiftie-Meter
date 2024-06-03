import React from "react";

const Home = () => {
  return (
    <div className="flex z-3 flex-col items-center w-[1200px] z-10 mt-32 p-16 h-[536px] bg-white rounded-md">
      <div className="flex flex-col justify-center items-center  p-2 font-sometype-mono text-3xl uppercase ">
        <h1 className=" font-bold ">
          Test Your <span className="italic font-light">Taylor Swift</span>{" "}
          Knowledge!
        </h1>
        <br />
        <p className="font-bold ">
          Are you a true Swiftie? Prove it! Swiftie Meter is the ultimate trivia
          app for Taylor Swift fans. Dive into our exciting trivia challenges
          and see how well you know Taylor Swift's music, lyrics, and life.
        </p>
        <p className="font-bold mt-12">
          Compete against other fans and climb your way to the top of the
          leaderboard!
        </p>
      </div>
    </div>
  );
};

export default Home;
