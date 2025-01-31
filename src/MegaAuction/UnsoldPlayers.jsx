import React, { useEffect, useState } from "react";
import bg_img from "../assets/auctiontop.jpg";
import unsold_bg from "../assets/unsold_bg.png";
import { Link } from "react-router-dom";

function MainAuction() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storedUnsoldPlayers, setStoredUnsoldPlayers] = useState({});
  const [playerIndex, setPlayerIndex] = useState(() => {
    const storedIndex = localStorage.getItem("playerIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0; // Default to 0 if not found
  });
  const [setIndex, setSetIndex] = useState(() => {
    const storedIndex = localStorage.getItem("setIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  }); // For cycling between sets
  const [setNumber, setSetNumber] = useState(setIndex);

  useEffect(() => {
    const players = JSON.parse(localStorage.getItem("unsold_players")) || [];
    setStoredUnsoldPlayers(players);
    console.log(storedUnsoldPlayers);
    localStorage.setItem("playerIndex", playerIndex);
    localStorage.setItem("setIndex", setIndex);
    // localStorage.setItem("setIndex", 0);
  }, [playerIndex, setIndex]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigate to the next player
  const nextPlayer = () => {
    setPlayerIndex(
      (prevIndex) => (prevIndex + 1) % storedUnsoldPlayers[setIndex].players.length
    );
  };

  // Navigate to the previous player
  const prevPlayer = () => {
    setPlayerIndex(
      (prevIndex) =>
        (prevIndex - 1 + storedUnsoldPlayers[setIndex].players.length) %
        storedUnsoldPlayers[setIndex].players.length
    );
  };

  // Navigate to the next set
  const nextSet = () => {
    setSetIndex((prevIndex) => (prevIndex + 1) % storedUnsoldPlayers.length);
    setPlayerIndex(0); // Reset player index to 0 when moving to the next set
  };

  // Navigate to the previous set
  const prevSet = () => {
    setSetIndex(
      (prevIndex) => (prevIndex - 1 + storedUnsoldPlayers.length) % storedUnsoldPlayers.length
    );
    setPlayerIndex(0); // Reset player index to 0 when moving to the previous set
  };

  const { setName, players } = storedUnsoldPlayers[setIndex];
  const { name, basePrice, src, type } = players[playerIndex];

  // Retrieve the teams from localStorage
  let teams = JSON.parse(localStorage.getItem("teamNames"));

  // Check if teams exist in localStorage, otherwise initialize an empty array
  if (!teams) {
    teams = [];
  }

  const [storeTeams, setStoredTeams] = useState({});
  const [selectedTeam, setSelectedTeam] = useState("");
  const [soldPrice, setSoldPrice] = useState("");

  const [teamAmounts, setTeamAmounts] = useState(() => {
    // Initialize team amounts from localStorage or default to 150 cr
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    return teams.reduce((acc, team) => {
      acc[team] = storedAmounts[team] || 150;
      return acc;
    }, {});
  });

  const [showModal, setShowModal] = useState(false);
  const [imgsrc, setImgSrc] = useState(null);
  const [playerForModal, setPlayerForModal] = useState(null);
  const [ptype, setType] = useState(null);
  const openModal = (player, src, type) => {
    setPlayerForModal(player);
    setImgSrc(src);
    setType(type);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setPlayerForModal(null);
  };

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

    // Update `teamAmounts` in localStorage
    setTeamAmounts(newTeamAmounts);
    localStorage.setItem("teamAmounts", JSON.stringify(newTeamAmounts));

    // Retrieve the `teams` object from localStorage
    let storedTeams = JSON.parse(localStorage.getItem("teams")) || {};

    // Debugging: Check the structure of `storedTeams`
    // console.log("Before Update:", storedTeams);

    // Ensure the selected team exists as a key in `storedTeams`
    if (!storedTeams[selectedTeam]) {
      storedTeams[selectedTeam] = [];
    }

    

    // if (storedUnsoldPlayers.name === playerForModal) {
    //   const updatedPlayers = storedUnsoldPlayers.filter(
    //     (player) => player.name !== playerForModal
    //   );

    //   // Update state and localStorage
    //   setStoredUnsoldPlayers(updatedPlayers);
    //   localStorage.setItem("unsold_players", JSON.stringify(updatedPlayers));
    // }

    // Add the player and sold price to the team's array
    storedTeams[selectedTeam].push({
      player: playerForModal,
      price: soldPrice,
      src: imgsrc,
      type: ptype,
    });

    // Save the updated `teams` object to localStorage
    localStorage.setItem("teams", JSON.stringify(storedTeams));

    // Debugging: Verify the updated structure of `storedTeams`
    console.log("After Update:", storedTeams);

    alert(
      `${playerForModal} sold to ${selectedTeam} for ₹${soldPrice.toLocaleString()}Cr`
    );

    closeModal();
  };

  // Check if the player is already sold
  //  console.log(storeTeams)
  const isPlayerSold = () => {
    let storedTeams = JSON.parse(localStorage.getItem("teams")) || {};

    for (let team in storedTeams) {
      if (storedTeams[team].some((player) => player.player === name)) {
        return true;
      }
    }
    return false;
  };
  // const isUnsoldPlayerSold = () => {
  //   let unsoldPlayers = JSON.parse(localStorage.getItem("unsold_players")) || [];

  //   // Check if any player in the array matches the given name
  //   return unsoldPlayers.some(player => player.name === storedUnsoldPlayers.name);
  // };

  // const isPlayerUnSold = () => {
  //   // Retrieve the list of unsold players from localStorage
  //   const storedUnsoldPlayer =
  //     JSON.parse(localStorage.getItem("unsold_players")) || [];

  //   // Iterate through the array to check if the player exists
  //   for (let player of storedUnsoldPlayer) {
  //     if (player.name === name) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };
  const isPlayerUnSold = () => {
    // Retrieve the list of unsold players from localStorage
    const storedUnsoldData =
      JSON.parse(localStorage.getItem("unsold_players")) || [];

    // Find the "Unsold Players" set
    const unsoldSet = storedUnsoldData.find(
      (set) => set.setName === "Unsold Players"
    );

    if (!unsoldSet) return false; // If the set doesn't exist, return false

    // Check if the player exists in the "Unsold Players" set
    return unsoldSet.players.some((player) => player.name === name);
  };

  const handleBidClick = () => {
    if (isPlayerSold()) {
      alert("Player already sold!");
    } else {
      openModal(name, src, type);
    }
  };

  const handleUnsoldBidClick = (playerName, playerSrc, playerType) => {
    if (isPlayerSold()) {
      alert("Player already sold!");
    } else {
      openModal(playerName, playerSrc, playerType);
    }
  };
  // const [isUnsold, setIsUnsold] = useState(false);

  // const handleUnsold = () => {
  //   if (window.confirm("Sure Unsold ?")) {
  //     // setIsUnsold(true);

  //     // Retrieve player details
  //     const { name, basePrice, src, type } = players[playerIndex];

  //     // Retrieve existing unsold players from localStorage
  //     const unsoldPlayers =
  //       JSON.parse(localStorage.getItem("unsold_players")) || [];

  //     // Check if the player is already in the list
  //     const isAlreadyUnsold = unsoldPlayers.some(
  //       (player) => player.name === name
  //     );

  //     if (!isAlreadyUnsold) {
  //       // Add the current unsold player to the list if not already present
  //       const updatedUnsoldPlayers = [
  //         ...unsoldPlayers,
  //         { name, basePrice, src, type },
  //       ];

  //       // Store the updated list in localStorage
  //       localStorage.setItem(
  //         "unsold_players",
  //         JSON.stringify(updatedUnsoldPlayers)
  //       );

  //       window.location.reload();
  //     } else {
  //       alert(`${name} is already marked as unsold.`);
  //     }
  //   }
  // };

  const handleUnsold = () => {
    if (window.confirm("Sure Unsold ?")) {
      // Retrieve player details
      const { name, basePrice, src, type } = players[playerIndex];

      // Default set name for all unsold players
      const setName = "Unsold Players";

      // Retrieve existing unsold players from localStorage
      const unsoldPlayersData =
        JSON.parse(localStorage.getItem("unsold_players")) || [];

      // Find if "Unsold Players" set already exists
      const existingSetIndex = unsoldPlayersData.findIndex(
        (set) => set.setName === setName
      );

      if (existingSetIndex !== -1) {
        // Set exists, check if the player is already in the list
        const isAlreadyUnsold = unsoldPlayersData[
          existingSetIndex
        ].players.some((player) => player.name === name);

        if (!isAlreadyUnsold) {
          // Add the player to the existing "Unsold Players" set
          unsoldPlayersData[existingSetIndex].players.push({
            name,
            basePrice,
            src,
            type,
          });
        } else {
          alert(`${name} is already marked as unsold.`);
          return;
        }
      } else {
        // Create "Unsold Players" set and add the player
        unsoldPlayersData.push({
          setName,
          players: [{ name, basePrice, src, type }],
        });
      }

      // Store the updated list in localStorage
      localStorage.setItem("unsold_players", JSON.stringify(unsoldPlayersData));

      window.location.reload();
    }
  };

  const clearTeams = () => {
    localStorage.removeItem("teams");
    localStorage.removeItem("unsold_players");
    localStorage.removeItem("teamAmounts");
    alert("Teams have been cleared from local storage.");
  };

  const handleSetNum = () => {
    if (setNumber > 0) {
      localStorage.setItem("setIndex", setNumber - 1);
    } else {
      localStorage.setItem("setIndex", 0);
    }
    window.location.reload();
  };

  return (
    <div
      className={`relative p-6 min-h-screen`}
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hamburger Icon */}
      <div
        className="hamburger-icon z-50 absolute top-6 left-6 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-1 bg-white my-1 transition-transform duration-300 ${
            menuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-white my-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-white my-1 transition-transform duration-300 ${
            menuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>
      {/* Full Page Nav Menu */}
      {menuOpen && (
        <div
          className="menu-overlay fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center"
          onClick={toggleMenu}
        >
          <div className="menu-content bg-white p-6 rounded-lg w-64">
            <Link to="/">
              <button
                onClick={toggleMenu}
                className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
              >
                Home
              </button>
            </Link>
            <Link to="/SquadPage">
              <button
                onClick={toggleMenu}
                className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
              >
                Squads
              </button>
            </Link>
            <Link to="/TeamManage">
              <button
                onClick={toggleMenu}
                className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
              >
                Team Manage
              </button>
            </Link>
            <Link to="/NewListPage">
              <button
                onClick={toggleMenu}
                className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
              >
                Players
              </button>
            </Link>
            {/* <button
              onClick={toggleMenu}
              className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
            >
              Settings
            </button> */}
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to clear squads (teams)?"
                  )
                ) {
                  clearTeams();
                }
              }}
              className="text-center text-lg text-white block w-full p-2 mb-4 bg-red-600 rounded"
            >
              Clear Squads (Teams)
            </button>
          </div>
        </div>
      )}

      <div className="absolute top-4 right-5 justify-end">
        <input
          type="number"
          // value={setNumber}
          min={0}
          max={40}
          required
          onChange={(e) => {
            const value = Math.min(40, Math.max(0, Number(e.target.value)));
            setSetNumber(value);
          }}
          className="border border-gray-300  rounded p-2 mx-2 w-48"
          placeholder="Enter SET number"
        />
        <button
          onClick={handleSetNum}
          className="bg-black text-white p-2 rounded"
        >
          GO
        </button>{" "}
        <br />
        {/* <button
          className="px-3 py-1 rounded ml-2 mt-1 bg-black text-white"
          onClick={() =>
            unsoldOpen ? setUnsoldOpen(false) : setUnsoldOpen(true)
          }
        >
          {unsoldOpen ? "Show Unsold Players" : "Hide Unsold Players"}
        </button> */}
      </div>

      <div className=" flex flex-col items-center ">
        {/* Display the current player card */}
        <div className=" relative w-full mt-20 max-w-sm border rounded-lg shadow-sm border-gray-800 bg-white/20 backdrop-blur-none">
          {/* Display the current set name */}
          <div className="mt-4 text-center ">
            <h3 className="text-2xl  font-ububtu font-extrabold bg-black py-1 text-white">
              {setName}
            </h3>
          </div>
          <img
            className=" h-60 w-60 block mx-auto rounded-full my-4 bg-white/30"
            src={src}
            alt="Player image"
          />

          <div className="px-3 pb-6">
            <a href="#">
              <h5 className="text-3xl  uppercase font-bold text-gray-900 dark:text-white font-ububtu tracking-wide text-center mb-2">
                {name}
              </h5>
              {(type === "bat" && (
                <img
                  src="https://www.iplt20.com/assets/images/teams-batsman-icon.svg"
                  alt="Batsman Icon"
                  className="mx-auto absolute bg-white rounded-full p-2 h-10 top-20 right-3"
                />
              )) ||
                (type === "wk" && (
                  <img
                    src="https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg"
                    alt="Batsman Icon"
                    className="mx-auto absolute bg-white rounded-full p-2 h-10 top-20 right-3"
                  />
                )) ||
                (type === "bowl" && (
                  <img
                    src="https://www.iplt20.com/assets/images/teams-bowler-icon.svg"
                    alt="Batsman Icon"
                    className="mx-auto absolute bg-white rounded-full p-2 h-10 top-20 right-3"
                  />
                )) ||
                (type === "al" && (
                  <img
                    src="https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg"
                    alt="Batsman Icon"
                    className="mx-auto absolute bg-white rounded-full p-2 h-10 top-20 right-3"
                  />
                ))}
            </a>
            <p className="text-center mb-4 text-xl text-black bg-white/80 w-fit block mx-auto px-5 rounded-md font-bold py-2">
              Base Price : {basePrice}
            </p>

            <div className="flex items-center justify-between">
              {/* <button
            onClick={() => openModal(name)}
            className="text-white bg-[#222] block mx-1 w-1/2 font-ububtu rounded-lg text-lg py-2.5 text-center"
          >
            BID
          </button> */}
              {isPlayerSold() ? (
                <button
                  disabled
                  className="text-white bg-red-600 block mx-auto w-1/2  font-ububtu rounded-lg text-xl uppercase py-2.5 text-center cursor-not-allowed"
                >
                  Sold
                </button>
              ) : (
                <>
                  {isPlayerUnSold() ? (
                    <div
                      // onClick={handleBidClick}
                      // disabled
                      style={{ backgroundImage: `URL(${unsold_bg})` }}
                      className={`text-white bg-contain bg-no-repeat block mx-auto w-1/4 h-10 font-ububtu rounded-lg text-xl  text-center cursor-not-allowed`}
                    >
                      {/* <img src={unsold_bg} alt="" /> */}
                      {/* Unsold */}
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={handleUnsold}
                        className="text-white bg-[#222] block mx-1 w-1/2  font-ububtu rounded-lg text-lg py-2.5 text-center"
                      >
                        Unsold
                      </button>
                      <button
                        onClick={handleBidClick}
                        className="text-white bg-[#222] block mx-1 w-1/2 font-ububtu rounded-lg text-lg py-2.5 text-center"
                      >
                        Bid
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Buttons to navigate between players */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={prevPlayer}
            className="text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            Previous Player
          </button>
          <button
            onClick={nextPlayer}
            className="text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            Next Player
          </button>
        </div>

        {/* Buttons to navigate between sets */}
        <div className="mt-4 flex space-x-4">
          <button
            onClick={prevSet}
            className="text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            Previous Set
          </button>
          <button
            onClick={nextSet}
            className="text-white bg-gray-800 px-4 py-2 rounded-lg"
          >
            Next Set
          </button>
        </div>
      </div>

      <></>
      {/* NEW CODE */}
      {showModal && playerForModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-center uppercase  font-ububtu font-extrabold tracking-wider mb-4 border-b pb-1">
              {playerForModal}
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePlayerSale();
              }}
            >
              <div className="mb-4">
                {/* <h3 className="text-lg font-semibold mb-2">Select a Team:</h3> */}
                {teams.map((team) => (
                  <div
                    key={team}
                    className="mb-2  p-3  uppercase text-gray-900 font-bold rounded-md bg-[url('https://img.freepik.com/free-vector/gold-metal-background_78370-154.jpg?semt=ais_hybrid')] bg-cover bg-no-repeat"
                  >
                    <label className="items-center inline-block">
                      <input
                        type="radio"
                        name="team"
                        value={team}
                        checked={selectedTeam === team}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="mr-2 bg-black"
                      />
                      {team} -
                    </label>
                    <b className="bg-gray-100 text-gray-800 float-right left-0  font-medium ml-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {" "}
                      {teamAmounts[team]?.toLocaleString() || "1"} Cr
                    </b>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Sold Price:</label>
                <input
                  type="number"
                  min="0"
                  max={teamAmounts[selectedTeam] || 1}
                  step="0.01"
                  value={soldPrice}
                  onChange={(e) => setSoldPrice(Number(e.target.value))}
                  className="w-full p-2 border border-black rounded "
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
    </div>
  );
}

export default MainAuction;
