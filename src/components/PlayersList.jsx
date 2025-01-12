import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RandomPlayerPicker from "./RandomPlayerPicker";

const players = {
  Batsman: [
    "Rohit Sharma",
    "Virat Kohli",
    "Suryakumar Yadav",
    "Yashasvi Jaiswal",
    "Rajat Patidar",
    "Tilak Varma",
    "Shreyas Iyer",
    "Ruturaj Gaikwad",
    "Faf du Plessis",
    "Shubman Gill",
    "Travis Head",
    "Pathum Nissanka",
    "Karun Nair",
    "Aiden Markram",
    "Joe Root",
    "Rinku Singh",
    "Dawid Warner",
    "Babar Azam",
    "Reeza Hendricks",
    "Ibrahim Zadran",
    "Sarfaraz Khan",
    "Charith Asalanka",
    "Fakhar Zaman",
    "Steve Smith",
    "David Miller",
    "Temba Bavuma",
    "Marnus Labuchagne",
    "Kane Williamson",
    "Saim Ayub",
    "Abdullah Shafique",
    "Usman Khawaja",
    "Devdutt Padikkal",
    "Jacob Bethell",
    "Jake Frasor McGurk",
    "Sameer Rizwi",
    "Ashutosh Sharma",
    "Abdul Samad",
  ],
  Bowler: [
    "Khaleel Ahmed",
    "Jasprit Bumrah",
    "Nathon Lyon",
    "Adil Rashid",
    "Umran Malik",
    "Dilshan Madhushanka",
    "Lokie Ferguson",
    "Avesh Khan",
    "Jofra Archer",
    "Mitchell Starc",
    "Matt Henry",
    "Mustafizur Rahman",
    "William U Rouke",
    "Abbas Afridi",
    "M Pathirana",
    "Akash Deep",
    "Md Siraj",
    "Mohit Sharma",
    "Adam Zampa",
    "Mohammad Shami",
    "Nathan Ellis",
    "Alzari Joseph",
    "Reece Topley",
    "Sandeep Sharma",
    "Jaydev Unadket",
    "Yuzvendra Chahal",
    "Taskin Ahmed",
    "Shaheen Afridi",
    "Trent Boult",
    "Tim Southee",
    "Anrich Nortje",
    "Kagiso Rabada",
    "T Natrajan",
    "Fazal Haq Farooqi",
    "Ish Sodhi",
    "Naseem Shah",
    "Akeal Hosein",
    "Maheesh Theekshana",
    "Ravi Bishnoi",
    "Arshdeep Singh",
    "Josh Hazlewood",
    "Naveen Ul Haq",
    "Mahedi Hasan",
    "Keshav Maharaj",
    "Haris Rauf",
    "Varun Chakravarthy",
    "Tabraiz Shamsi",
    "Mujeeb Ur Rahman",
    "Kuldeep Yadav",
    "Romario Shepherd",
    "Nuwan Tushara",
    "Michael Bracewell",
    "Pat Cummins",
    "Ashton Agar",
    "Lungi Nigdi",
    "Chris Woakes",
    "Mohd Nawaz",
    "Shardul Thakur",
    "Bhuvneshwar Kumar",
    "Yash Dayal",
    "Kyle Jamison",
    "Azaz Patel",
    "Swapnil Singh",
    "Mukesh Kumar",
    "Prasidh Krishna",
    "Ishant Sharma",
    "Harshit Rana",
    "Mayank yadav",
    "Deepak Chahar",
    "Rahul Chahar",
    "Harshal Patel",
    "Jamie Anderson",
  ],
  AllRounder: [
    "Ravindra Jadeja",
    "Hardik Pandya",
    "Sunil Narine",
    "Moeen Ali",
    "Vijay Shankar",
    "Cameron Green",
    "Liam Livingstone",
    "Sam Curran",
    "Rahul Tewatia",
    "Krishnappa Gowtham",
    "Krunal Pandya",
    "Marcus Stoinis",
    "Washington Sundar",
    "Andre Russell",
    "Mitchell Marsh",
    "Wanindu Hasaranga",
    "Shakib Al Hasan",
    "Roston Chase",
    "Dhananjaya De Silva",
    "Imad Wasim",
    "Marco Jansen",
    "Rachin Ravindra",
    "Axar Patel",
    "Rovman Powell",
    "Glenn Maxwell",
    "Daryl Mitchell",
    "Will Young",
    "Sherfane Rutherford",
    "Azmatullah Omarzai",
    "Ben Stokes",
    "Mohammad Nabi",
    "Rashid Khan",
    "Mitchell Santner",
    "Ravichandran Ashwin",
    "Jason Holder",
    "Shivam Sube",
    "Nitish Kumar Reddy",
    "Chris Jordan",
    "Abhishek Sharma",
    "Gerald Coetzee",
    "Mark Chapman",
    "Tim David",
    "Deepak Hooda",
    "Mahipal Lomror",
    "Venketesh Iyer",
    "Will Jacks",
    "Karn Sharma",
    "Riyan Parag",
    "Nitesh Rana",
  ],
  Wicketkeepers: [
    "Josh Inglis",
    "Sanju Samson",
    "Jitesh Sharma",
    "Md Rizwan",
    "Shai Hope",
    "Jonny Bairstow",
    "Dhruv Jurel",
    "Phil Salt",
    "Harry Brook",
    "Nicholas Pooran",
    "Devon Conway",
    "Jos Buttler",
    "Rishabh Pant",
    "KL Rahul",
    "Quinton De Kock",
    "Alex Carey",
    "KS Bharat",
    "Abhishek Porel",
    "Kusal Mendis",
    "Rahmanullah Gurbaz",
    "Glenn Phillips",
    "Finn Allen",
    "Tristan Stubbs",
    "Henrich Klassen",
    "Ishan Kishan",
    "Anuj Rawat",
    "Shimron Hetmyer",
  ],
};

const PlayersList = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedPlayers, setCheckedPlayers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [playerForModal, setPlayerForModal] = useState(null);
  const [teams, setTeams] = useState([
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E",
    "Team F",
    "Team G",
    "Team H",
  ]);

  const [selectedTeam, setSelectedTeam] = useState("");
  const [soldPrice, setSoldPrice] = useState("");
  const [teamAmounts, setTeamAmounts] = useState(() => {
    // Initialize team amounts from localStorage or default to 10,000,000
    const storedAmounts = JSON.parse(localStorage.getItem("teamAmounts")) || {};
    return teams.reduce((acc, team) => {
      acc[team] = storedAmounts[team] || 1200000000;
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
      `${playerForModal} sold to ${selectedTeam} for ₹${soldPrice.toLocaleString()}`
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

  const pickRandomPlayer = (category) => {
    const playerList = players[category];
    const randomPlayer =
      playerList[Math.floor(Math.random() * playerList.length)];
    setSelectedPlayer(randomPlayer);
    setSearchTerm(randomPlayer);
  };

  const getCheckedCounts = () => {
    const totalCheckboxes = Object.keys(checkedPlayers).length;
    const checkedCount = Object.values(checkedPlayers).filter(Boolean).length;
    const uncheckedCount = 185 - checkedCount;

    return { checkedCount, uncheckedCount };
  };

  const { checkedCount, uncheckedCount } = getCheckedCounts();
  return (
    <>
      <div className="bg-black p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-">
          <button
            onClick={() => pickRandomPlayer("Batsman")}
            className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
          >
            Pick Batsman
          </button>
          <button
            onClick={() => pickRandomPlayer("Bowler")}
            className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
          >
            Pick Bowler
          </button>
          <button
            onClick={() => pickRandomPlayer("AllRounder")}
            className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
          >
            Pick All-Rounder
          </button>
          <button
            onClick={() => pickRandomPlayer("Wicketkeepers")}
            className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
          >
            Pick WK
          </button>
        </div>
        {selectedPlayer && (
          <div className="text-2xl font-semibold text-white mt-4">
            Player:{" "}
            <span className="text-white font-ububtu">{selectedPlayer}</span>
          </div>
        )}
      </div>
      <div className=" py-1 px-4 flex bg-gray-100 shadow rounded border border-gray-300">
        <p className="mr-2">Sold: {checkedCount}</p>
        <p>Players Left: {uncheckedCount}</p>
      </div>
      <div className="min-h-screen bg-gray-100 py-4 px-4">
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Search player..."
          />
          <Link
            to="/SquadPage"
            className="bg-gray-300 p-2 border border-black rounded ml-4"
          >
            Squads
          </Link>
          <Link to="/" className="float-right">
            Home
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Players List</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        </div>
      


        {showModal && playerForModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">
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
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="team"
                          value={team}
                          checked={selectedTeam === team}
                          onChange={(e) => setSelectedTeam(e.target.value)}
                          className="mr-2"
                        />
                        {team} - Remaining Amount: ₹
                        {teamAmounts[team]?.toLocaleString() || "10,000,000"}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Sold Price:</label>
                  <input
                    type="number"
                    min="0"
                    max={teamAmounts[selectedTeam] || 10000000}
                    value={soldPrice}
                    onChange={(e) => setSoldPrice(Number(e.target.value))}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-red-500 text-white px-4 py-2 rounded"
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
          <button
            onClick={clearTeams}
            className="bg-red-600 text-white p-2 rounded"
          >
            Clear Squads (Teams)
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayersList;
