import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SquadPage = () => {
  const [teamsData, setTeamsData] = useState({});
  const [teamAmounts, setTeamAmounts] = useState({});

  useEffect(() => {
    const storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    setTeamsData(storedTeams);
    setTeamAmounts(storedAmounts);
  }, []);

  //   const clearLocal = () => {
  //     localStorage.clear();
  //   }

  const clearteamAmounts = () => {
    localStorage.removeItem("teamAmounts");
    alert("Team Amount have been cleared from local storage.");
  };
  return (
    <div className="min-h-screen bg-[url('https://i.pinimg.com/736x/92/70/c1/9270c19eb7d37366c20da05e28844248.jpg')] bg-cover py-4 px-6">
      <Link to="/NewAuctionPage" className="text-white">
        Back
      </Link>
      {/* <button onClick={clearLocal()} className="px-3">Clear</button> */}
      <Link to="/" className="float-right text-white">
        Home
      </Link>
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        New Team Squads
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {Object.entries(teamsData).map(([team, squad]) => (
          <div
            key={team}
            className="text-white bg-[#222] shadow rounded relative p-4 border border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-4">{team}</h2>
            <span class="bg-gray-100 absolute top-2 right-2 text-gray-800 text-xl font-semibold  px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {" "}
              {teamAmounts[team]?.toLocaleString() || "1"} Cr
            </span>

            <ul>
              {squad.map((playerData, index) => (
                <li key={index} className="mb-2">
                  {index + 1}. {playerData.player} -
                  <span class="bg-gray-100 text-gray-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    ₹{playerData.price.toLocaleString()} Cr
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button to Clear Teams */}
      <div className="mt-4 text-center">
      <button
  onClick={() => {
    if (window.confirm("Are you sure you want to clear the amount?")) {
      clearteamAmounts();
    }
  }}
  className="bg-red-600 text-white p-2 rounded"
>
  Clear Amount
</button>

      </div>
    </div>
  );
};

export default SquadPage;
