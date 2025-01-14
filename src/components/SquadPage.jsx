
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
    <div className="min-h-screen bg-gray-100 py-4 px-6">
      <Link to="/PlayerList">Back</Link>
      {/* <button onClick={clearLocal()} className="px-3">Clear</button> */}
      <Link to="/" className="float-right">
        Home
      </Link>
      <h1 className="text-2xl font-bold text-center mb-6">Team Squads</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(teamsData).map(([team, squad]) => (
          <div
            key={team}
            className="bg-white shadow rounded p-4 border border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-4">
              {team} - Remaining Amount: ₹
              {teamAmounts[team]?.toLocaleString() || "1"} Cr
            </h2>
            <ul>
              {squad.map((playerData, index) => (
                <li key={index} className="mb-2">
                  {playerData.player} - ₹{playerData.price.toLocaleString()}Cr
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

       {/* Button to Clear Teams */}
       <div className="mt-4 text-center">
          <button
            onClick={clearteamAmounts}
            className="bg-red-600 text-white p-2 rounded"
          >
            Clear Amount
          </button>
        </div>
    </div>
  );
};

export default SquadPage;
