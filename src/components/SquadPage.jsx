// import React, { useState, useEffect } from "react";
// import bg_img from "../assets/auctiontop.jpg";

// const SquadPage = () => {
//   const [teams, setTeams] = useState({});
//   const [teamAmounts, setTeamAmounts] = useState({});

//   useEffect(() => {
//     // Fetch teams data from localStorage
//     const storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
//     setTeams(storedTeams);
//     const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
//     setTeamAmounts(storedAmounts);

//     console.log(storedTeams.players);
//   }, []);

//   return (
//     // <div className=">
//     <div
//           className={`p-6 min-h-screen`}
//           style={{
//             backgroundImage: `url(${bg_img})`,
//             backgroundSize: "cover",
//             backgroundAttachment: "fixed",
//           }}
//         >
//       <span className="p-3 ">Home</span>
//       <h1 className="text-2xl font-bold mb-4">Squad Page</h1>
//       {Object.keys(teams).length > 0 ? (
//         Object.entries(teams).map(([teamName, players]) => (
//           <div key={teamName} className="mb-6">
//             {/* (console.log(players)) */}
//             <h2 className="text-xl font-semibold mb-2">
//               {teamName}
//               <span class="bg-gray-100 absolute top-2 right-2 text-gray-800 text-xl font-semibold  px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
//                 {" "}
//                 {teamAmounts[teamName]?.toLocaleString() || "1"} Cr
//               </span>
//             </h2>
//             {players.length > 0 ? (
//               <ul className="list-disc pl-5">
//                 {players.map((player, index) => (
//                   <li key={index} className="mb-1">
//                     <img src={player.src} alt="" />
//                     <span className="font-medium">{player.player}</span> - ₹
//                     {player.price.toLocaleString()}Cr
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No players in this squad.</p>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No squads available. Add players to squads first.</p>
//       )}
//     </div>
//   );
// };

// export default SquadPage;

import React, { useState, useEffect } from "react";
import bg_img from "../assets/bg_img2.jpeg";
import { Link } from "react-router-dom";

const SquadPage = () => {
  const [teams, setTeams] = useState({});
  const [teamAmounts, setTeamAmounts] = useState({});

  useEffect(() => {
    // Fetch teams data from localStorage
    const storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
    setTeams(storedTeams);
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    setTeamAmounts(storedAmounts);
  }, []);

  return (
    <div
      className={`p-6 min-h-screen`}
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <span className="p-3">Home</span> */}
      <Link to="/MainAuction" className="text-white mr-5 bg-black p-2 ">
        Back
      </Link>
      <Link to="/" className="text-white bg-black p-2 ">
        Home
      </Link>
      <h1 className="text-2xl font-bold my-4 bg-[#ef4123] text-white p-3 uppercase text-center">
        Squad Page
      </h1>
      {Object.keys(teams).length > 0 ? (
        Object.entries(teams).map(([teamName, players]) => (
          <div
            key={teamName}
            className="mb-6 p-4 rounded-lg bg-[#031945] border border-gray-300 relative"
          >
            {/* Badge for Remaining Amount */}
            <span className="absolute top-2 right-2 bg-gray-800 border  text-white text-xl font-semibold py-1 px-3 rounded-full">
              {teamAmounts[teamName]?.toLocaleString() || "1"} Cr
            </span>

            <h2 className="text-2xl font-semibold mb-2 text-white uppercase tracking-wider">
              {teamName}
            </h2>

            {players.length > 0 ? (
              <div className=" grid grid-cols-2 gap-4">
                {players.map((player, index) => (
                  <div
                    key={index}
                    className="bg-white relative rounded shadow-lg pb-2 pt-1 flex flex-col items-center"
                  >
                    <span className="absolute top-2 left-2 bg-white text-black text-sm font-bold py-1 px-1 rounded-full">
                      {index + 1}
                    </span>
                    {(player.type === "bat" && (
                      <img
                        src="https://www.iplt20.com/assets/images/teams-batsman-icon.svg"
                        alt="Batsman Icon"
                        className="mx-auto absolute bg-white rounded-full p-2 h-10 top-0 right-0"
                      />
                    )) ||
                      (player.type === "wk" && (
                        <img
                          src="https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg"
                          alt="Batsman Icon"
                          className="mx-auto absolute bg-white rounded-full p-2 h-10 top-0 right-0"
                        />
                      )) ||
                      (player.type === "bowl" && (
                        <img
                          src="https://www.iplt20.com/assets/images/teams-bowler-icon.svg"
                          alt="Batsman Icon"
                          className="mx-auto absolute bg-white rounded-full p-2 h-10 top-0 right-0"
                        />
                      ))}

                    <img
                      src={player.src}
                      // src="https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"
                      alt={player.player}
                      className="w-24 h-24   bg-white "
                    />

                    <span className="border-t-2 pt-1 font-ububtu font-extrabold border-[#031945] tracking-wider uppercase w-full text-center">
                      {player.player}{" "}
                    </span>
                    <span className="text-gray-800 font-bold">
                      {player.price.toLocaleString()} Cr
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p>No players in this squad.</p>
            )}
          </div>
        ))
      ) : (
        <p>No squads available. Add players to squads first.</p>
      )}
    </div>
  );
};

export default SquadPage;
