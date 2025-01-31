import React, { useState, useEffect } from "react";
import bg_img from "../assets/bg_img2.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SquadPage = () => {
  const [teams, setTeams] = useState({});
  const [teamAmounts, setTeamAmounts] = useState({});

  useEffect(() => {
    // localStorage.clear();

    // Fetch teams data from localStorage
    const storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
    setTeams(storedTeams);
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    setTeamAmounts(storedAmounts);
  }, []);
  const getTotalPlayersCount = () => {
    return Object.values(teams).reduce(
      (total, players) => total + players.length,
      0
    );
  };

  const totalPlayers = getTotalPlayersCount();

  // console.log("Total players: ", totalPlayers);
  const [isOpen, setIsOpen] = useState(false);

  const getTeams = () => {
    const teams = localStorage.getItem("teams");
    return teams ? JSON.parse(teams) : {};
  };

  const saveTeams = (teams) => {
    localStorage.setItem("teams", JSON.stringify(teams));
  };

  // Function to delete a player
  // const deletePlayer = (teamName, playerName) => {
  //   const teams = getTeams();
  //   if (teams[teamName]) {
  //     teams[teamName] = teams[teamName].filter(
  //       (player) => player.player !== playerName
  //     );
  //     saveTeams(teams);
  //     window.location.reload(); // Refresh UI
  //   }
  // };

  const deletePlayer = (teamName, playerName) => {
    if (!window.confirm(`Are you sure you want to remove ${playerName} from ${teamName}?`)) {
      return; // Exit if user cancels
    }
  
    const teams = getTeams();
     // Get current team amounts
  
    if (teams[teamName]) {
      const playerToDelete = teams[teamName].find(player => player.player === playerName);
      
      if (playerToDelete) {
        // Add deleted player's price back to the team's amount
        teamAmounts[teamName] = (teamAmounts[teamName] || 0) + playerToDelete.price;
      }
  
      // Remove player from the team
      teams[teamName] = teams[teamName].filter(player => player.player !== playerName);
  
      // Save updated data
      saveTeams(teams);
      saveTeamAmounts(teamAmounts);
  
      // Refresh UI
      setTeams(teams);
      setTeamAmounts(teamAmounts);
    }
  };

  // Function to edit player price and update teamAmounts
  const editPlayerPrice = (teamName, playerName) => {
    const teams = getTeams();
    // const teamAmounts = getTeamAmounts();

    if (!teams[teamName]) return;

    const playerIndex = teams[teamName].findIndex(
      (player) => player.player === playerName
    );
    if (playerIndex === -1) return;

    const oldPrice = teams[teamName][playerIndex].price;
    const newPrice = parseFloat(prompt(`Enter new price for ${playerName}:`));

    if (isNaN(newPrice) || newPrice <= 0)
      return alert("Invalid price! Enter a number greater than 0.");

    // Update player's price
    teams[teamName][playerIndex].price = newPrice;

    // Adjust team amount
    teamAmounts[teamName] = (teamAmounts[teamName] || 0) + oldPrice - newPrice;

    // Save updated data
    saveTeams(teams);
    saveTeamAmounts(teamAmounts);

    // Refresh UI
    window.location.reload();
  };

  const saveTeamAmounts = (teamAmounts) => {
    localStorage.setItem("teamAmounts", JSON.stringify(teamAmounts));
  };

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
      <h1 className="text-2xl font-bold my-4  bg-[#ef4123] text-white p-3 uppercase text-center">
        <span className="pb-1 border-b">Squad Page</span>
        <br />
        <span className="text-base">
          sold - {totalPlayers} remaining - {240 - totalPlayers}
        </span>
      </h1>

      {Object.keys(teams).length > 0 ? (
        Object.entries(teams).map(([teamName, players]) => {
          const airplaneCount = players.filter((player) =>
            player.player.includes("✈️")
          ).length;

          return (
            <details
              key={teamName}
              className=" bg-[#031945] border border-gray-300 rounded-lg"
            >
              <summary className="px-4 py-3 text-balance text-lg font-semibold text-white uppercase tracking-wider cursor-pointer">
                {teamName}
                

                <span className="float-right bg-gray-800 text-white text-sm text-balance font-semibold py-1 px-3 rounded-full">
                  {teamAmounts[teamName]?.toLocaleString() || "1"} Cr
                </span>
              </summary>
              <span className="text-xs text-white ml-2 normal-case">
                  (Total {players.length} ✈️ {airplaneCount})
                </span>
              <div className="py-4 px-2">
                {players.length > 0 ? (
                  <div className="grid grid-cols-3 gap-1">
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
                            className="mx-auto absolute bg-white rounded-full p-1 h-7 top-0 right-0"
                          />
                        )) ||
                          (player.type === "wk" && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg"
                              alt="Wicket Keeper Icon"
                              className="mx-auto absolute bg-white rounded-full p-1 h-7 top-0 right-0"
                            />
                          )) ||
                          (player.type === "bowl" && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-bowler-icon.svg"
                              alt="Bowler Icon"
                              className="mx-auto absolute bg-white rounded-full p-1 h-7 top-0 right-0"
                            />
                          )) ||
                          (player.type === "al" && (
                            <img
                              src="https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg"
                              alt="All-rounder Icon"
                              className="mx-auto absolute bg-white rounded-full p-1 h-7 top-0 right-0"
                            />
                          ))}

                        <img
                          src={player.src}
                          alt={player.player}
                          className="h-24 bg-white"
                        />
                        <span className="border-t-2 pt-1 px-1 font-ububtu text-xs font-extrabold border-[#031945] tracking-wide uppercase w-full text-center">
                          {player.player}
                        </span>
                        <span className="text-gray-800 text-xs font-bold">
                          {player.price.toLocaleString()} Cr
                        </span>

                        {/* Edit & Delete Buttons */}
                        <div className="flex gap-2 w-full mt-2 justify-around">
                          <button
                            className="bg-blue-500 text-white px-1 py-1 rounded text-xs "
                            onClick={() =>
                              editPlayerPrice(teamName, player.player)
                            }
                          >
                            <i className="fa-classic fa-solid fa-pen-to-square fa-fw"></i>
                          </button>
                          <button
                            className="bg-red-500 text-white px-1 py-1 rounded text-xs"
                            onClick={() =>
                              deletePlayer(teamName, player.player)
                            }
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No players in this squad.</p>
                )}
              </div>
            </details>
          );
        })
      ) : (
        <p className="text-white">
          No squads available. Add players to squads first.
        </p>
      )}
    </div>
  );
};

export default SquadPage;
