import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RandomPlayerPicker from "./RandomPlayerPicker";

// const players = {
//   Batsman: [
//     "Rohit Sharma",
//     "Virat Kohli",
//     "Suryakumar Yadav",
//     "Yashasvi Jaiswal",
//     "Rajat Patidar",
//     "Tilak Varma",
//     "Shreyas Iyer",
//     "Ruturaj Gaikwad",
//     "Faf du Plessis",
//     "Shubman Gill",
//     "Travis Head",
//     "Pathum Nissanka",
//     "Karun Nair",
//     "Aiden Markram",
//     "Joe Root",
//     "Rinku Singh",
//     "Dawid Warner",
//     "Babar Azam",
//     "Reeza Hendricks",
//     "Ibrahim Zadran",
//     "Sarfaraz Khan",
//     "Charith Asalanka",
//     "Fakhar Zaman",
//     "Steve Smith",
//     "David Miller",
//     "Temba Bavuma",
//     "Marnus Labuchagne",
//     "Kane Williamson",
//     "Saim Ayub",
//     "Abdullah Shafique",
//     "Usman Khawaja",
//     "Devdutt Padikkal",
//     "Jacob Bethell",
//     "Jake Frasor McGurk",
//     "Sameer Rizwi",
//     "Ashutosh Sharma",
//     "Abdul Samad",
//   ],
//   Bowler: [
//     "Khaleel Ahmed",
//     "Jasprit Bumrah",
//     "Nathon Lyon",
//     "Adil Rashid",
//     "Umran Malik",
//     "Dilshan Madhushanka",
//     "Lokie Ferguson",
//     "Avesh Khan",
//     "Jofra Archer",
//     "Mitchell Starc",
//     "Matt Henry",
//     "Mustafizur Rahman",
//     "William U Rouke",
//     "Abbas Afridi",
//     "M Pathirana",
//     "Akash Deep",
//     "Md Siraj",
//     "Mohit Sharma",
//     "Adam Zampa",
//     "Mohammad Shami",
//     "Nathan Ellis",
//     "Alzari Joseph",
//     "Reece Topley",
//     "Sandeep Sharma",
//     "Jaydev Unadket",
//     "Yuzvendra Chahal",
//     "Taskin Ahmed",
//     "Shaheen Afridi",
//     "Trent Boult",
//     "Tim Southee",
//     "Anrich Nortje",
//     "Kagiso Rabada",
//     "T Natrajan",
//     "Fazal Haq Farooqi",
//     "Ish Sodhi",
//     "Naseem Shah",
//     "Akeal Hosein",
//     "Maheesh Theekshana",
//     "Ravi Bishnoi",
//     "Arshdeep Singh",
//     "Josh Hazlewood",
//     "Naveen Ul Haq",
//     "Mahedi Hasan",
//     "Keshav Maharaj",
//     "Haris Rauf",
//     "Varun Chakravarthy",
//     "Tabraiz Shamsi",
//     "Mujeeb Ur Rahman",
//     "Kuldeep Yadav",
//     "Romario Shepherd",
//     "Nuwan Tushara",
//     "Michael Bracewell",
//     "Pat Cummins",
//     "Ashton Agar",
//     "Lungi Nigdi",
//     "Chris Woakes",
//     "Mohd Nawaz",
//     "Shardul Thakur",
//     "Bhuvneshwar Kumar",
//     "Yash Dayal",
//     "Kyle Jamison",
//     "Azaz Patel",
//     "Swapnil Singh",
//     "Mukesh Kumar",
//     "Prasidh Krishna",
//     "Ishant Sharma",
//     "Harshit Rana",
//     "Mayank yadav",
//     "Deepak Chahar",
//     "Rahul Chahar",
//     "Harshal Patel",
//     "Jamie Anderson",
//   ],
//   AllRounder: [
//     "Ravindra Jadeja",
//     "Hardik Pandya",
//     "Sunil Narine",
//     "Moeen Ali",
//     "Vijay Shankar",
//     "Cameron Green",
//     "Liam Livingstone",
//     "Sam Curran",
//     "Rahul Tewatia",
//     "Krishnappa Gowtham",
//     "Krunal Pandya",
//     "Marcus Stoinis",
//     "Washington Sundar",
//     "Andre Russell",
//     "Mitchell Marsh",
//     "Wanindu Hasaranga",
//     "Shakib Al Hasan",
//     "Roston Chase",
//     "Dhananjaya De Silva",
//     "Imad Wasim",
//     "Marco Jansen",
//     "Rachin Ravindra",
//     "Axar Patel",
//     "Rovman Powell",
//     "Glenn Maxwell",
//     "Daryl Mitchell",
//     "Will Young",
//     "Sherfane Rutherford",
//     "Azmatullah Omarzai",
//     "Ben Stokes",
//     "Mohammad Nabi",
//     "Rashid Khan",
//     "Mitchell Santner",
//     "Ravichandran Ashwin",
//     "Jason Holder",
//     "Shivam Sube",
//     "Nitish Kumar Reddy",
//     "Chris Jordan",
//     "Abhishek Sharma",
//     "Gerald Coetzee",
//     "Mark Chapman",
//     "Tim David",
//     "Deepak Hooda",
//     "Mahipal Lomror",
//     "Venketesh Iyer",
//     "Will Jacks",
//     "Karn Sharma",
//     "Riyan Parag",
//     "Nitesh Rana",
//   ],
//   Wicketkeepers: [
//     "Josh Inglis",
//     "Sanju Samson",
//     "Jitesh Sharma",
//     "Md Rizwan",
//     "Shai Hope",
//     "Jonny Bairstow",
//     "Dhruv Jurel",
//     "Phil Salt",
//     "Harry Brook",
//     "Nicholas Pooran",
//     "Devon Conway",
//     "Jos Buttler",
//     "Rishabh Pant",
//     "KL Rahul",
//     "Quinton De Kock",
//     "Alex Carey",
//     "KS Bharat",
//     "Abhishek Porel",
//     "Kusal Mendis",
//     "Rahmanullah Gurbaz",
//     "Glenn Phillips",
//     "Finn Allen",
//     "Tristan Stubbs",
//     "Henrich Klassen",
//     "Ishan Kishan",
//     "Anuj Rawat",
//     "Shimron Hetmyer",
//   ],
// };
const players = {
  Batsman: [
    { name: "Rohit Sharma", price: "2cr" },
    { name: "Virat Kohli", price: "2cr" },
    { name: "Suryakumar Yadav", price: "1.5cr" },
    { name: "Yashasvi Jaiswal", price: "1cr" },
    { name: "Rajat Patidar", price: "50L" },
    { name: "Tilak Varma", price: "1cr" },
    { name: "Shreyas Iyer", price: "1.5cr" },
    { name: "Ruturaj Gaikwad", price: "1cr" },
    { name: "Faf du Plessis", price: "2cr" },
    { name: "Shubman Gill", price: "1.5cr" },
    { name: "Travis Head", price: "1cr" },
    { name: "Pathum Nissanka", price: "50L" },
    { name: "Karun Nair", price: "50L" },
    { name: "Aiden Markram", price: "1.5cr" },
    { name: "Joe Root", price: "2cr" },
    { name: "Rinku Singh", price: "50L" },
    { name: "Dawid Warner", price: "2cr" },
    { name: "Babar Azam", price: "2cr" },
    { name: "Reeza Hendricks", price: "1cr" },
    { name: "Ibrahim Zadran", price: "50L" },
    { name: "Sarfaraz Khan", price: "50L" },
    { name: "Charith Asalanka", price: "1cr" },
    { name: "Fakhar Zaman", price: "1.5cr" },
    { name: "Steve Smith", price: "2cr" },
    { name: "David Miller", price: "1.5cr" },
    { name: "Temba Bavuma", price: "1cr" },
    { name: "Marnus Labuchagne", price: "1.5cr" },
    { name: "Kane Williamson", price: "2cr" },
    { name: "Saim Ayub", price: "50L" },
    { name: "Abdullah Shafique", price: "50L" },
    { name: "Usman Khawaja", price: "1.5cr" },
    { name: "Devdutt Padikkal", price: "1cr" },
    { name: "Jacob Bethell", price: "50L" },
    { name: "Jake Frasor McGurk", price: "50L" },
    { name: "Sameer Rizwi", price: "50L" },
    { name: "Ashutosh Sharma", price: "50L" },
    { name: "Abdul Samad", price: "50L" },
  ],
  Bowler: [
    { name: "Khaleel Ahmed", price: "1cr" },
    { name: "Jasprit Bumrah", price: "2cr" },
    { name: "Nathon Lyon", price: "1.5cr" },
    { name: "Adil Rashid", price: "1.5cr" },
    { name: "Umran Malik", price: "1cr" },
    { name: "Dilshan Madhushanka", price: "1cr" },
    { name: "Lokie Ferguson", price: "1.5cr" },
    { name: "Avesh Khan", price: "1cr" },
    { name: "Jofra Archer", price: "2cr" },
    { name: "Mitchell Starc", price: "2cr" },
    { name: "Matt Henry", price: "1.5cr" },
    { name: "Mustafizur Rahman", price: "1cr" },
    { name: "William U Rouke", price: "50L" },
    { name: "Abbas Afridi", price: "50L" },
    { name: "M Pathirana", price: "50L" },
    { name: "Akash Deep", price: "50L" },
    { name: "Md Siraj", price: "1.5cr" },
    { name: "Mohit Sharma", price: "50L" },
    { name: "Adam Zampa", price: "1.5cr" },
    { name: "Mohammad Shami", price: "2cr" },
    { name: "Nathan Ellis", price: "50L" },
    { name: "Alzari Joseph", price: "1cr" },
    { name: "Reece Topley", price: "1.5cr" },
    { name: "Sandeep Sharma", price: "50L" },
    { name: "Jaydev Unadket", price: "1cr" },
    { name: "Yuzvendra Chahal", price: "1.5cr" },
    { name: "Taskin Ahmed", price: "50L" },
    { name: "Shaheen Afridi", price: "2cr" },
    { name: "Trent Boult", price: "2cr" },
    { name: "Tim Southee", price: "1.5cr" },
    { name: "Anrich Nortje", price: "1.5cr" },
    { name: "Kagiso Rabada", price: "2cr" },
    { name: "T Natrajan", price: "1cr" },
    { name: "Fazal Haq Farooqi", price: "50L" },
    { name: "Ish Sodhi", price: "1cr" },
    { name: "Naseem Shah", price: "1.5cr" },
    { name: "Akeal Hosein", price: "50L" },
    { name: "Maheesh Theekshana", price: "1.5cr" },
    { name: "Ravi Bishnoi", price: "1.5cr" },
    { name: "Arshdeep Singh", price: "1cr" },
    { name: "Josh Hazlewood", price: "1.5cr" },
    { name: "Naveen Ul Haq", price: "50L" },
    { name: "Mahedi Hasan", price: "50L" },
    { name: "Keshav Maharaj", price: "50L" },
    { name: "Haris Rauf", price: "1.5cr" },
    { name: "Varun Chakravarthy", price: "1cr" },
    { name: "Tabraiz Shamsi", price: "50L" },
    { name: "Mujeeb Ur Rahman", price: "1.5cr" },
    { name: "Kuldeep Yadav", price: "2cr" },
    { name: "Romario Shepherd", price: "50L" },
    { name: "Nuwan Tushara", price: "50L" },
    { name: "Michael Bracewell", price: "50L" },
    { name: "Pat Cummins", price: "2cr" },
    { name: "Ashton Agar", price: "50L" },
    { name: "Lungi Nigdi", price: "50L" },
    { name: "Chris Woakes", price: "1.5cr" },
    { name: "Mohd Nawaz", price: "1cr" },
    { name: "Shardul Thakur", price: "1.5cr" },
    { name: "Bhuvneshwar Kumar", price: "1.5cr" },
    { name: "Yash Dayal", price: "50L" },
    { name: "Kyle Jamison", price: "50L" },
    { name: "Azaz Patel", price: "50L" },
    { name: "Swapnil Singh", price: "50L" },
    { name: "Mukesh Kumar", price: "1cr" },
    { name: "Prasidh Krishna", price: "1.5cr" },
    { name: "Ishant Sharma", price: "1cr" },
    { name: "Harshit Rana", price: "50L" },
    { name: "Mayank yadav", price: "50L" },
    { name: "Deepak Chahar", price: "1cr" },
    { name: "Rahul Chahar", price: "50L" },
    { name: "Harshal Patel", price: "50L" },
    { name: "Jamie Anderson", price: "1.5cr" },
  ],
  AllRounder: [
    { name: "Ravindra Jadeja", price: "2cr" },
    { name: "Hardik Pandya", price: "2cr" },
    { name: "Sunil Narine", price: "1.5cr" },
    { name: "Moeen Ali", price: "1.5cr" },
    { name: "Vijay Shankar", price: "1cr" },
    { name: "Cameron Green", price: "2cr" },
    { name: "Liam Livingstone", price: "1.5cr" },
    { name: "Sam Curran", price: "1.5cr" },
    { name: "Rahul Tewatia", price: "1cr" },
    { name: "Krishnappa Gowtham", price: "1cr" },
    { name: "Krunal Pandya", price: "1.5cr" },
    { name: "Marcus Stoinis", price: "1.5cr" },
    { name: "Washington Sundar", price: "1cr" },
    { name: "Andre Russell", price: "2cr" },
    { name: "Mitchell Marsh", price: "2cr" },
    { name: "Wanindu Hasaranga", price: "1.5cr" },
    { name: "Shakib Al Hasan", price: "2cr" },
    { name: "Roston Chase", price: "1cr" },
    { name: "Dhananjaya De Silva", price: "1cr" },
    { name: "Imad Wasim", price: "1cr" },
    { name: "Marco Jansen", price: "1.5cr" },
    { name: "Rachin Ravindra", price: "50L" },
    { name: "Axar Patel", price: "1.5cr" },
    { name: "Rovman Powell", price: "1cr" },
    { name: "Glenn Maxwell", price: "2cr" },
    { name: "Daryl Mitchell", price: "1cr" },
    { name: "Will Young", price: "50L" },
    { name: "Sherfane Rutherford", price: "50L" },
    { name: "Azmatullah Omarzai", price: "50L" },
    { name: "Ben Stokes", price: "2cr" },
    { name: "Mohammad Nabi", price: "1cr" },
    { name: "Rashid Khan", price: "2cr" },
    { name: "Mitchell Santner", price: "1.5cr" },
    { name: "Ravichandran Ashwin", price: "1.5cr" },
    { name: "Jason Holder", price: "1.5cr" },
    { name: "Shivam Sube", price: "50L" },
    { name: "Nitish Kumar Reddy", price: "50L" },
    { name: "Chris Jordan", price: "1.5cr" },
    { name: "Abhishek Sharma", price: "50L" },
    { name: "Gerald Coetzee", price: "50L" },
    { name: "Mark Chapman", price: "50L" },
    { name: "Tim David", price: "50L" },
    { name: "Deepak Hooda", price: "1cr" },
    { name: "Mahipal Lomror", price: "50L" },
    { name: "Venketesh Iyer", price: "50L" },
    { name: "Will Jacks", price: "50L" },
    { name: "Karn Sharma", price: "50L" },
    { name: "Riyan Parag", price: "50L" },
    { name: "Nitesh Rana", price: "1cr" },
  ],
  Wicketkeepers: [
    { name: "Josh Inglis", price: "1.5cr" },
    { name: "Sanju Samson", price: "2cr" },
    { name: "Jitesh Sharma", price: "1.5cr" },
    { name: "Md Rizwan", price: "1.5cr" },
    { name: "Shai Hope", price: "1cr" },
    { name: "Jonny Bairstow", price: "2cr" },
    { name: "Dhruv Jurel", price: "50L" },
    { name: "Phil Salt", price: "50L" },
    { name: "Harry Brook", price: "1cr" },
    { name: "Nicholas Pooran", price: "2cr" },
    { name: "Devon Conway", price: "2cr" },
    { name: "Jos Buttler", price: "2cr" },
    { name: "Rishabh Pant", price: "2cr" },
    { name: "KL Rahul", price: "2cr" },
    { name: "Quinton De Kock", price: "2cr" },
    { name: "Alex Carey", price: "1.5cr" },
    { name: "KS Bharat", price: "1cr" },
    { name: "Abhishek Porel", price: "50L" },
    { name: "Kusal Mendis", price: "1.5cr" },
    { name: "Rahmanullah Gurbaz", price: "1cr" },
    { name: "Glenn Phillips", price: "1.5cr" },
    { name: "Finn Allen", price: "50L" },
    { name: "Tristan Stubbs", price: "50L" },
    { name: "Henrich Klassen", price: "50L" },
    { name: "Ishan Kishan", price: "1.5cr" },
    { name: "Anuj Rawat", price: "50L" },
    { name: "Shimron Hetmyer", price: "50L" },
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
      acc[team] = storedAmounts[team] || 120;
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
    const uncheckedCount = 185 - checkedCount;

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
            to="/SquadPage"
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
              className="bg-[#222] shadow-md rounded-lg p-6 border border-gray-200"
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
                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded"
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
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="team"
                          value={team}
                          checked={selectedTeam === team}
                          onChange={(e) => setSelectedTeam(e.target.value)}
                          className="mr-2"
                        />
                        {team} -
                        <span class="bg-gray-100 text-gray-800  font-medium ml-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
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
                    step="0.01"
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
