import React, { useState, useEffect } from "react";
// import {playerData} from "../MegaAuction/Players"
import bg_img from "../assets/bg_img.jpeg";
import { Link, useNavigate } from "react-router-dom";

// Helper function to handle localStorage
const getStoredteamNames = () => {
  const teamNames = localStorage.getItem("teamNames");
  return teamNames ? JSON.parse(teamNames) : [];
};

function TeamManage() {
  const [teamNames, setteamNames] = useState(getStoredteamNames());
  const [newTeamName, setNewTeamName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Update localStorage when teamNames change
  //   localStorage.setItem("teamNames", JSON.stringify(teamNames));
  // }, [teamNames]);

  // const addTeam = () => {
  //   if (newTeamName && teamNames.length < 10) {
  //     setteamNames([...teamNames, newTeamName]);
  //     setNewTeamName("");
  //   }
  // };

  // const editTeam = (index) => {
  //   setEditingIndex(index);
  //   setNewTeamName(teamNames[index]);
  // };

  // const updateTeam = () => {
  //   if (newTeamName) {
  //     const updatedteamNames = [...teamNames];
  //     updatedteamNames[editingIndex] = newTeamName;
  //     setteamNames(updatedteamNames);
  //     setNewTeamName("");
  //     setEditingIndex(null);
  //   }
  // };

  // const deleteTeam = (index) => {
  //   const isConfirmed = window.confirm(
  //     "Are you sure you want to delete this team?"
  //   );
  //   if (isConfirmed) {
  //     const updatedteamNames = teamNames.filter((_, idx) => idx !== index);
  //     setteamNames(updatedteamNames);
  //   }
  // };

  useEffect(() => {
    // Update localStorage when team names change
    localStorage.setItem("teamNames", JSON.stringify(teamNames));
  }, [teamNames]);
  
  const addTeam = () => {
    if (newTeamName && teamNames.length < 10) {
      setteamNames([...teamNames, newTeamName]);
      setNewTeamName("");
    }
  };
  
  const editTeam = (index) => {
    setEditingIndex(index);
    setNewTeamName(teamNames[index]);
  };
  
  const updateTeam = () => {
    if (newTeamName) {
      const updatedteamNames = [...teamNames];
      updatedteamNames[editingIndex] = newTeamName;
      setteamNames(updatedteamNames);
      setNewTeamName("");
      setEditingIndex(null);
    }
  };
  
  const deleteTeam = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this team?"
    );
    if (isConfirmed) {
      const updatedteamNames = teamNames.filter((_, idx) => idx !== index);
      setteamNames(updatedteamNames);
    }
  };
  

  const startAuction = () => {
    // Logic to start the auction (can be expanded)
    navigate("/MainAuction")
    alert("Auction started!");
  };

  return (
    <>
      <div
        className={`p-6 min-h-screen`}
        style={{
          backgroundImage: `url(${bg_img})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-right mb-2">

        <Link to="/" className="text-white bg-black p-2">
            Home
          </Link>
        </p>
        <div className="container" id="team_manage">
          <h1 className="text-center text-3xl font-bold text-white mb-5">
            Team Management
          </h1>

          {/* Input for adding/editing team name */}
          <div className="team-form text-center mb-4">
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Enter team name"
              className="p-2 rounded"
            />
            {editingIndex !== null ? (
              <button
                onClick={updateTeam}
                className="p-2 ml-2 bg-blue-500 text-white rounded"
              >
                Update Team
              </button>
            ) : (
              <button
                onClick={addTeam}
                className="p-2 ml-2 bg-green-500 text-white rounded"
              >
                Add Team
              </button>
            )}
          </div>

          {/* Display team cards */}
          <div className="team-cards grid grid-cols-2 gap-4 mb-4">
            {teamNames.map((team, index) => (
              <div
                className="team-card bg-gray-800 p-4 rounded text-white"
                key={index}
              >
                <h3 className="mb-2">{team}</h3>
                <div className="flex justify-between">
                  <button
                    onClick={() => editTeam(index)}
                    className="bg-yellow-500 text-white p-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTeam(index)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Start Auction Button */}
          <div className="text-center">
            <button
              onClick={startAuction}
              className="bg-purple-600 text-white p-2 rounded"
              disabled={teamNames.length < 8 || teamNames.length > 10}
            >
              Start Auction
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamManage;
