// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SquadPage = () => {
//     const [teams, setTeams] = useState({});

//     useEffect(() => {
//         const storedTeams = JSON.parse(localStorage.getItem('teams'));
//         if (storedTeams) {
//             setTeams(storedTeams);
//         }
//     }, []);

//     const deletePlayer = (team, player) => {
//         // Create a copy of the teams state
//         const updatedTeams = { ...teams };

//         // Remove the player from the specific team
//         updatedTeams[team] = updatedTeams[team].filter(p => p !== player);

//         // Update the state with the new teams object
//         setTeams(updatedTeams);

//         // Save the updated teams to localStorage
//         localStorage.setItem('teams', JSON.stringify(updatedTeams));
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-4 px-4">
//             <Link to='/PlayerList'>Back</Link>
//             <Link to='/' className='float-right'>Home</Link>

//             <h1 className="text-2xl font-bold text-center mb-4">Team Squads</h1>
//             {Object.entries(teams).map(([team, players]) => (
//                 <div key={team} className="mb-6">
//                     <h2 className="text-xl font-bold">{team}</h2>
//                     <ul>
//                         {players.map((player, index) => (
//                             <li key={index} className="p-2 flex justify-between items-center">
//                                 {player}
//                                 <button
//                                     onClick={() => deletePlayer(team, player)}
//                                     className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
//                                 >
//                                     Delete
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}

//         </div>
//     );
// };

// export default SquadPage;
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
              {teamAmounts[team]?.toLocaleString() || "10,000,000"}
            </h2>
            <ul>
              {squad.map((playerData, index) => (
                <li key={index} className="mb-2">
                  {playerData.player} - ₹{playerData.price.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquadPage;
