// src/HomePage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleCodeSubmit = () => {
    // if (inputCode === "2620") {
    //   navigate("/PlayerList");
    // } else if (inputCode === "9999") {
    //   navigate("/ListPage");
    // }  else
     if (inputCode === "1234") {
      navigate("/NewAuctionPage");
    } else if (inputCode === "MegaAuctionList") {
      navigate("/NewListPage");
    } else if (inputCode === "aasim26112005shaikh") {
      navigate("/TeamManage");
    } 
    else {
      alert("Invalid code! Please try again.");
    }
    setShowPopup(false); // Close the popup
  };
  return (
    <div className="min-h-screen w-full bg-[url('https://i.pinimg.com/originals/a6/f3/94/a6f3949e88dd6377ce3f25982838df4b.jpg')] bg-cover py-10 items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-ububtu mb-6">Mega Auction 2k25</h1>
       
        <h1 className='font-Orbitron text-4xl font-bold mb-6 text-[#FFD700]'>240 Players</h1>
        <p>code :- MegaAuctionList</p>
        {/* <Link to='PlayerList' class="bg-[#FFD700] text-black font-bold py-3 px-6 border-b-4 my-6 border-black rounded">
            Start Playing
        </Link> */}
         <div>
      <button
        onClick={handleButtonClick}
        className="bg-[#FFD700] text-black font-bold py-3 px-6 border-b-4 mt-6 border-black rounded"
      >
        Start Playing
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Enter Code to Continue</h2>
            <input
              type="password"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="border p-2 w-full mb-4 text-black"
              placeholder="Enter code"
            />
            <div className="flex justify-between">
              <button
                onClick={handleCodeSubmit}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
     

        <p className='text-xl mt-4'>Developed By - <span className="font-custom">AASIM</span></p>

      </div>
    </div>
  );
};

export default HomePage;