import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  email: string;
  score: number;
  // Include other properties of the user object if there are any
}

const Community = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/leaderboard");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="community">
      <div className="flex flex-col font-sometype-mono w-[1200px]  mt-32 h-[536px]">
        <h1 className=" font-bold text-3xl text-black pb-4 ">COMMUNITY</h1>
        <div className=" text-3xl bg-white rounded-md p-12">
          <div className=" font-bold px-16">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Username</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.email}</td>
                      <td>{user.score}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
