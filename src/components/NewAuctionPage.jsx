import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RandomPlayerPicker from "./RandomPlayerPicker";

const players = {
  Set1: [
    { name: "Hamza", price: "1cr" },
    { name: "Arshad", price: "1cr" },
    { name: "Ayaan Big Shot", price: "2cr" },
    { name: "Shafiq", price: "50L" },
    { name: "Maaz", price: "1cr" },
  ],
  Set2: [
    { name: "Ayaan Small Shot", price: "2cr" },
    { name: "Amaan", price: "2cr" },
    { name: "Sonu", price: "50L" },
    { name: "Zidan", price: "1cr" },
    { name: "Arsal", price: "50L" },
  ],
  Set3: [
    { name: "Aqdus", price: "2cr" },
    { name: "Wasim", price: "1cr" },
    { name: "Umar", price: "50L" },
    { name: "Aakif", price: "1cr" },
    { name: "Sufiyan", price: "50L" },
  ],
  Set4: [
    { name: "Shayaan Small", price: "50L" },
    { name: "Shayaan Big", price: "1cr" },
    { name: "Arsalan", price: "50L" },
    { name: "Affan", price: "50L" },
    { name: "Bilal Small", price: "1cr" },
  ],
};

const PlayersList = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedPlayers, setCheckedPlayers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [playerForModal, setPlayerForModal] = useState(null);
  const [teams, setTeams] = useState([
    "Byculla Super Kings",
    "V Aura",
    "Super Giants",
  ]);

  const [selectedTeam, setSelectedTeam] = useState("");
  const [soldPrice, setSoldPrice] = useState("");
  const [teamAmounts, setTeamAmounts] = useState(() => {
    // Initialize team amounts from localStorage or default to 10,000,000
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    return teams.reduce((acc, team) => {
      acc[team] = storedAmounts[team] || 50;
      return acc;
    }, {});
  });

  const handlePlayerSale = () => {
    if (!selectedTeam || !soldPrice) {
      alert("Please select a team and enter a sold price.");
      return;
    }

    const newTeamAmounts = { ...teamAmounts };
    // Check if the remaining amount is sufficient
    if (newTeamAmounts[selectedTeam] < soldPrice) {
      alert("Insufficient budget for this team!");
      return;
    }

    // Deduct the sold price from the team's amount
    newTeamAmounts[selectedTeam] -= soldPrice;

    // Store the updated team amounts in localStorage
    setTeamAmounts(newTeamAmounts);
    localStorage.setItem("teamAmounts", JSON.stringify(newTeamAmounts));

    // Add the player and sold price to the selected team's squad
    let storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
    if (!storedTeams[selectedTeam]) {
      storedTeams[selectedTeam] = [];
    }
    storedTeams[selectedTeam].push({
      player: playerForModal,
      price: soldPrice,
    });
    localStorage.setItem("teams", JSON.stringify(storedTeams));

    alert(
      `${playerForModal} sold to ${selectedTeam} for ₹${soldPrice.toLocaleString()}Cr`
    );
    closeModal();
  };

  useEffect(() => {
    const storedCheckedPlayers = JSON.parse(
      localStorage.getItem("checkedPlayers")
    );
    if (storedCheckedPlayers) {
      setCheckedPlayers(storedCheckedPlayers);
    }
  }, []);

  const handleCheckboxChange = (player, category) => {
    const updatedCheckedPlayers = {
      ...checkedPlayers,
      [`${category}-${player}`]: !checkedPlayers[`${category}-${player}`],
    };
    setCheckedPlayers(updatedCheckedPlayers);
    localStorage.setItem(
      "checkedPlayers",
      JSON.stringify(updatedCheckedPlayers)
    );
  };

  const openModal = (player) => {
    setPlayerForModal(player);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPlayerForModal(null);
  };

  const selectTeam = (team) => {
    let storedTeams = JSON.parse(localStorage.getItem("teams")) || {};
    if (!storedTeams[team]) {
      storedTeams[team] = [];
    }
    storedTeams[team].push(playerForModal);
    localStorage.setItem("teams", JSON.stringify(storedTeams));
    closeModal();
  };

  const clearTeams = () => {
    localStorage.removeItem("teams");
    alert("Teams have been cleared from local storage.");
  };

  // const pickRandomPlayer = (category) => {
  //   const playerList = players[category];
  //   const randomPlayer =
  //     playerList[Math.floor(Math.random() * playerList.length)];
  //   setSelectedPlayer(randomPlayer);
  //   setSearchTerm(randomPlayer);
  // };
  const pickRandomPlayer = (category) => {
    const playerList = players[category];
    const randomPlayer =
      playerList[Math.floor(Math.random() * playerList.length)].name; // Extract only the name
    setSelectedPlayer(randomPlayer); // Set only the name as the selected player
    setSearchTerm(randomPlayer); // Set the name for filtering
  };

  const getCheckedCounts = () => {
    const totalCheckboxes = Object.keys(checkedPlayers).length;
    const checkedCount = Object.values(checkedPlayers).filter(Boolean).length;
    const uncheckedCount = 20 - checkedCount;

    return { checkedCount, uncheckedCount };
  };

  const { checkedCount, uncheckedCount } = getCheckedCounts();

  // const formRef = useRef(null);

  const handleUncheckAll = () => {
    setCheckedPlayers({});
    localStorage.removeItem("checkedPlayers");
  };
  return (
    <>
      <div className="bg-black p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-">
          <button
            onClick={() => pickRandomPlayer("Set1")}
            className="bg-[#FFD700] rounded-tl-full rounded-br-full font-bold text-black text-md text-center self-center px-3 py-3 "
          >
            Set 1
          </button>
          <button
            onClick={() => pickRandomPlayer("Set2")}
            className="bg-[#FFD700] rounded-tl-full rounded-br-full font-bold text-black text-md text-center self-center px-3 py-3 "
          >
            Set 2
          </button>
          <button
            onClick={() => pickRandomPlayer("Set3")}
            className="bg-[#FFD700] rounded-tl-full rounded-br-full font-bold text-black text-md text-center self-center px-3 py-3 "
          >
            Set 3
          </button>
          <button
            onClick={() => pickRandomPlayer("Set4")}
            // className=" text-black py-3 px-3 rounded shadow "
            className="bg-[#FFD700] rounded-tl-full rounded-br-full font-bold text-black text-md text-center self-center px-3 py-3 "
          >
            Set 4
          </button>
          
        </div>
        {selectedPlayer && (
          <div className="text-2xl font-semibold text-white mt-4">
            Player:{" "}
            <span className="text-white font-ububtu">{selectedPlayer}</span>
          </div>
        )}
      </div>
      <div className=" py-1 px-4 flex bg-black text-white shadow border-t border-gray-300">
        <p className="mr-2">Sold: {checkedCount}</p>
        <p>Players Left: {uncheckedCount}</p>
      </div>
      <div className="min-h-screen bg-black text-white py-4 px-4">
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 bg-[#222] text-white rounded"
            placeholder="Search player..."
          />
          <Link
            to="/NewSquad"
            className="bg-[#222] p-2 border border-white rounded ml-4"
          >
            Squads
          </Link>
          <Link to="/" className="float-right">
            Home
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Players List</h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(players).map(([category, playerList]) => (
            <div
              key={category}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-ububtu text-gray-800 mb-4 border-b pb-2">
                {category}
              </h2>
              <ul>
                {playerList
                  .filter((player) =>
                    player.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((player, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 border-b last:border-b-0 transition duration-300 hover:bg-black hover:text-white"
                    >
                      <span
                        className="text-base font-ububtu cursor-pointer"
                        onClick={() => openModal(player)}
                      >
                        {index + 1}. {player}
                      </span>
                      <input
                        type="checkbox"
                        checked={
                          checkedPlayers[`${category}-${player}`] || false
                        }
                        onChange={() => handleCheckboxChange(player, category)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(players).map(([category, playerList]) => (
            <div
              key={category}
              className="bg-[url('https://i.pinimg.com/736x/92/70/c1/9270c19eb7d37366c20da05e28844248.jpg')] bg-cover shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h2 className="text-xl font-ububtu text-white mb-4 border-b pb-2">
                {category}
              </h2>
              <ul>
                {playerList
                  .filter((player) =>
                    player.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((player, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 border-b last:border-b-0 transition duration-300 hover:bg-black hover:text-white"
                    >
                      <span
                        className="text-base font-ububtu cursor-pointer"
                        onClick={() => openModal(player.name)}
                      >
                        {index + 1}. {player.name} - ₹{player.price}
                      </span>
                      <input
                        type="checkbox"
                        
                        checked={
                          checkedPlayers[`${category}-${player.name}`] || false
                        }
                        onChange={() =>
                          handleCheckboxChange(player.name, category)
                        }
                        className="w-6 h-6 text-black bg-gray-100 border-gray-300 rounded"
                      />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {showModal && playerForModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-black p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 border-b pb-1">
                Player: {playerForModal}
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePlayerSale();
                }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Select a Team:</h3>
                  {teams.map((team) => (
                    <div key={team} className="mb-2">
                      <label className="flex items-center text-xl">
                        <input
                          type="radio"
                          name="team"
                          value={team}
                          checked={selectedTeam === team}
                          onChange={(e) => setSelectedTeam(e.target.value)}
                          className="mr-2 h-4 w-4"
                        />
                        {team} -
                        <span class="bg-gray-100 text-gray-800  font-medium text-xl ml-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          {" "}
                          {teamAmounts[team]?.toLocaleString() || "1"} Cr
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Sold Price:</label>
                  <input
                    type="number"
                    min="0"
                    max={teamAmounts[selectedTeam] || 1}
                    step="0.5"
                    value={soldPrice}
                    onChange={(e) => setSoldPrice(Number(e.target.value))}
                    className="w-full p-2 border rounded bg-[#222]"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-[#222] border border-white text-white px-4 py-2 rounded"
                  >
                    Sold
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Button to Clear Teams */}
        <div className="mt-4 text-center">
          {/* <button
            onClick={clearTeams}
            className="bg-red-600 text-white p-2 rounded"
          >
            Clear Squads (Teams)
          </button>
          <button
            className="bg-red-700 ml-2 text-white px-4 py-2 rounded"
            onClick={handleUncheckAll}
          >
            Uncheck All
          </button> */}
          <button
            onClick={() => {
              if (
                window.confirm("Are you sure you want to clear squads (teams)?")
              ) {
                clearTeams();
              }
            }}
            className="bg-red-600 text-white p-2 rounded"
          >
            Clear Squads (Teams)
          </button>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to uncheck all checkboxes?"
                )
              ) {
                handleUncheckAll();
              }
            }}
            className="bg-red-700 ml-2 text-white px-4 py-2 rounded"
          >
            Uncheck All
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayersList;
