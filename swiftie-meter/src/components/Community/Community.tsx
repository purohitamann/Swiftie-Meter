import React from "react";

const Community = () => {
  return (
    <div id="community">
      <div className="flex flex-col font-sometype-mono w-[1200px]  mt-32 h-[536px]">
        <h1 className=" font-bold text-3xl  pb-4 ">COMMUNITY</h1>
        <div className=" text-3xl bg-white rounded-md p-12">
          <div className=" font-bold px-16">
            <table className="w-full">
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>1</td>
                <td>purohitamann</td>
                <td>1333</td>
              </tr>
              <tr>
                <td>1</td>
                <td>purohitamann</td>
                <td>1333</td>
              </tr>
              <tr>
                <td>1</td>
                <td>purohitamann</td>
                <td>1333</td>
              </tr>
              <tr>
                <td>1</td>
                <td>purohitamann</td>
                <td>1333</td>
              </tr>
            </table>
            <table className="w-full">
              {/* <thead>
    <tr>
      <th>Rank</th>
      <th>Username</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    {data.map((user, index) => (
      <tr key={index}>
        <td>{user.rank}</td>
        <td>{user.username}</td>
        <td>{user.score}</td>
      </tr>
    ))}
  </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
