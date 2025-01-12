import React, { useState } from 'react';

const players = {
  Batsman: [
    'Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav', 'Yashasvi Jaiswal',
    'Rajat Patidar', 'Tilak Varma', 'Shreyas Iyer', 'Ruturaj Gaikwad', 'Faf du Plessis',
    'Shubman Gill', 'Travis Head', 'Pathum Nissanka', 'Karun Nair', 'Aiden Markram',
    'Joe Root', 'Rinku Singh', 'Dawid Warner', 'Babar Azam', 'Reeza Hendricks', 'Ibrahim Zadran',
    'Sarfaraz Khan', 'Charith Asalanka', 'Fakhar Zaman', 'Steve Smith', 'David Miller', 'Temba Bavuma',
    "Marnus Labuchagne", 'Kane Williamson', 'Saim Ayub', 'Abdullah Shafique', 'Usman Khawaja', 
    'Devdutt Padikkal', 'Jacob Bethell', 'Jake Frasor McGurk','Sameer Rizwi', 'Ashutosh Sharma', 
    'Abdul Samad',
  ],
  Bowler: [
    'Khaleel Ahmed', 'Jasprit Bumrah', 'Nathon Lyon', 'Adil Rashid', 'Umran Malik',
    'Dilshan Madhushanka', 'Lokie Ferguson', 'Avesh Khan', 'Jofra Archer', 'Mitchell Starc',
    'Matt Henry', 'Mustafizur Rahman', 'William U Rouke', 'Abbas Afridi', 'M Pathirana',
    'Akash Deep', 'Md Siraj', 'Mohit Sharma', 'Adam Zampa', 'Mohammad Shami',
    'Nathan Ellis', 'Alzari Joseph', 'Reece Topley', 'Sandeep Sharma', 'Jaydev Unadket',
    'Yuzvendra Chahal', 'Taskin Ahmed', 'Shaheen Afridi', 'Trent Boult', 'Tim Southee',
    'Anrich Nortje', 'Kagiso Rabada', 'T Natrajan', 'Fazal Haq Farooqi', 'Ish Sodhi',
    'Naseem Shah', 'Akeal Hosein', 'Maheesh Theekshana', 'Ravi Bishnoi','Arshdeep Singh',
    'Josh Hazlewood', 'Naveen Ul Haq', 'Mahedi Hasan', 'Keshav Maharaj', 'Haris Rauf', 'Varun Chakravarthy',
    'Tabraiz Shamsi', 'Mujeeb Ur Rahman', 'Kuldeep Yadav', 'Romario Shepherd', 'Nuwan Tushara', 
    'Michael Bracewell','Pat Cummins', 'Ashton Agar', 'Lungi Nigdi', 'Chris Woakes', 'Mohd Nawaz', 
    'Shardul Thakur', 'Bhuvneshwar Kumar', 'Yash Dayal', 'Kyle Jamison', 'Azaz Patel', 'Swapnil Singh',
    'Mukesh Kumar', 'Prasidh Krishna', 'Ishant Sharma','Harshit Rana', 'Mayank yadav', 'Deepak Chahar',
    'Rahul Chahar', 'Harshal Patel', 'Jamie Anderson', 
  ],
  AllRounder: [
    'Ravindra Jadeja', 'Hardik Pandya', 'Sunil Narine', 'Moeen Ali', 'Vijay Shankar',
    'Cameron Green', 'Liam Livingstone', 'Sam Curran', 'Rahul Tewatia', 'Krishnappa Gowtham',
    'Krunal Pandya', 'Marcus Stoinis', 'Washington Sundar', 'Andre Russell', 'Mitchell Marsh',
    'Wanindu Hasaranga', 'Shakib Al Hasan', 'Roston Chase', 'Dhananjaya De Silva',
    'Imad Wasim', 'Marco Jansen', 'Rachin Ravindra', 'Axar Patel', 'Rovman Powell', 'Glenn Maxwell',
    'Daryl Mitchell', 'Will Young', 'Sherfane Rutherford', 'Azmatullah Omarzai', 'Ben Stokes',
    'Mohammad Nabi', 'Rashid Khan', 'Mitchell Santner', 'Ravichandran Ashwin', 'Jason Holder', 
    'Shivam Sube', 'Nitish Kumar Reddy', 'Chris Jordan', 'Abhishek Sharma', 'Gerald Coetzee', 
    'Mark Chapman', 'Tim David', 'Deepak Hooda', 'Mahipal Lomror', 'Venketesh Iyer', 'Will Jacks', 
    'Karn Sharma', 'Riyan Parag', 'Nitesh Rana', 
  ],
  Wicketkeepers: [
    'Josh Inglis', 'Sanju Samson', 'Jitesh Sharma', 'Md Rizwan', 'Shai Hope', 
    'Jonny Bairstow', 'Dhruv Jurel', 'Phil Salt', 'Harry Brook', 'Nicholas Pooran', 
    'Devon Conway', 'Jos Buttler', 'Rishabh Pant', 'KL Rahul', 'Quinton De Kock',
    'Alex Carey', 'KS Bharat', 'Abhishek Porel', 'Kusal Mendis', 'Rahmanullah Gurbaz', 
    'Glenn Phillips', 'Finn Allen', 'Tristan Stubbs', 'Henrich Klassen', 'KL Rahul', 'Ishan Kishan',
    'Anuj Rawat', 'Shimron Hetmyer'
  ],
};

const RandomPlayerPicker = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const pickRandomPlayer = (category) => {
    const playerList = players[category];
    const randomPlayer = playerList[Math.floor(Math.random() * playerList.length)];
    setSelectedPlayer(randomPlayer);
  };

  return (
    <div >
      <div className="grid grid-cols-4 md:grid-cols-4 gap-1 mb-">
        <button
          onClick={() => pickRandomPlayer('Batsman')}
          className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
        >
          Pick Batsman
        </button>
        <button
          onClick={() => pickRandomPlayer('Bowler')}
          className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
        >
          Pick Bowler
        </button>
        <button
          onClick={() => pickRandomPlayer('AllRounder')}
          className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
        >
          Pick All-Rounder
        </button>
        <button
          onClick={() => pickRandomPlayer('Wicketkeepers')}
          className="bg-[#FFD700] text-black py-3 px-3 rounded shadow "
        >
          Pick WK
        </button>
      </div>
      {selectedPlayer && (
        <div className="text-2xl font-semibold text-black mt-4">
        Player: <span className="text-black font-ububtu">{selectedPlayer}</span>
        </div>
      )}
    </div>
  );
};

export default RandomPlayerPicker;
