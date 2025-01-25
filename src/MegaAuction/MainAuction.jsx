import React, { useState } from "react";
import bg_img from "../assets/auctiontop.jpg";
import { Link } from "react-router-dom";
import playerData from "/src/MegaAuction/Players";


function MainAuction() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



    const [setIndex, setSetIndex] = useState(0); // For cycling between sets
    const [playerIndex, setPlayerIndex] = useState(0); // For cycling within a set
  
    // Navigate to the next player
    const nextPlayer = () => {
      setPlayerIndex((prevIndex) => (prevIndex + 1) % playerData[setIndex].players.length);
    };
  
    // Navigate to the previous player
    const prevPlayer = () => {
      setPlayerIndex(
        (prevIndex) => (prevIndex - 1 + playerData[setIndex].players.length) % playerData[setIndex].players.length
      );
    };
  
    // Navigate to the next set
    const nextSet = () => {
      setSetIndex((prevIndex) => (prevIndex + 1) % playerData.length);
      setPlayerIndex(0); // Reset player index to 0 when moving to the next set
    };
  
    // Navigate to the previous set
    const prevSet = () => {
      setSetIndex(
        (prevIndex) => (prevIndex - 1 + playerData.length) % playerData.length
      );
      setPlayerIndex(0); // Reset player index to 0 when moving to the previous set
    };
  
    const { setName, players } = playerData[setIndex];
    const { name, basePrice, src } = players[playerIndex];

  return (
    <div
      className={`p-6 min-h-screen`}
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
            <button
              onClick={toggleMenu}
              className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
            >
              Squads
            </button>
            <button
              onClick={toggleMenu}
              className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
            >
              Players
            </button>
            <button
              onClick={toggleMenu}
              className="text-center text-lg text-black block w-full p-2 mb-4 bg-blue-500 rounded"
            >
              Settings
            </button>
          </div>
        </div>
      )}

      {/* <div class="w-full mt-20 max-w-sm  border rounded-lg shadow-sm  border-gray-800 bg-white/20 backdrop-blur-none">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"
            alt="product image"
          />
        </a>
        <div class="px-3 pb-6">
          <a href="#">
            <h5 class="text-4xl mb-4 font-bold  text-gray-900 dark:text-white font-ububtu tracking-wide text-center">
              VIRAT KOHLI{" "}
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <button
              href="#"
              class="text-white bg-[#222] block m-auto px-20 font-ububtu rounded-lg text-lg py-2.5 text-center "
            >
              BID
            </button>
          </div>
        </div>
      </div> */}

<div className="flex flex-col items-center">
      {/* Display the current player card */}
      <div className="w-full mt-20 max-w-sm border rounded-lg shadow-sm border-gray-800 bg-white/20 backdrop-blur-none">
      {/* Display the current set name */}
      <div className="mt-4 text-center ">
        <h3 className="text-2xl  font-ububtu font-extrabold bg-black py-1 text-white">{setName}</h3>
      </div>
        <a href="#">
          <img className=" h-60 w-60 block mx-auto rounded-full my-4 bg-white/30" src={src} alt="product image" />
        </a>
        <div className="px-3 pb-6">
          <a href="#">
            <h5 className="text-3xl mb-4 uppercase font-bold text-gray-900 dark:text-white font-ububtu tracking-wide text-center">
              {name}
            </h5>
          </a>
          <p className="text-center mb-4 text-xl text-black bg-white/80 w-fit block mx-auto px-5 rounded-md font-bold py-2">{basePrice}</p>

          <div className="flex items-center justify-between">
            <button
              href="#"
              className="text-white bg-[#222] block m-auto px-16 font-ububtu rounded-lg text-lg py-2.5 text-center"
            >
              BID
            </button>
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
    </div>
  );
}

export default MainAuction;
