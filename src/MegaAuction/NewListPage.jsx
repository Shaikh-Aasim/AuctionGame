import React from "react";

import bg_img from "../assets/bg_img3.jpeg";
// const playerData = [
//   {
//     setName: "SET 1 M1",
//     players: [
//       { name: "Virat Kohli", basePrice: "2cr" },
//       { name: "Rajat Patidar", basePrice: "2cr" },
//       { name: "Suryakumar Yadav", basePrice: "2cr" },
//       { name: "Rohit Sharma", basePrice: "2cr" },
//       { name: "Henrich Klassen ✈️", basePrice: "2cr" },
//       { name: "Travis Head ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 2 M2",
//     players: [
//       { name: "Ruturaj Gaikwad", basePrice: "2cr" },
//       { name: "MS Dhoni", basePrice: "2cr" },
//       { name: "Tristan Stubbs ✈️", basePrice: "2cr" },
//       { name: "Abhishek Porel", basePrice: "2cr" },
//       { name: "Rinku Singh", basePrice: "2cr" },
//       { name: "Sanju Samson", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 3 M3",
//     players: [
//       { name: "Dhruv Jurel", basePrice: "2cr" },
//       { name: "Shimron Hetmyer ✈️", basePrice: "2cr" },
//       { name: "Shubman Gill", basePrice: "2cr" },
//       { name: "Nicholas Pooran ✈️", basePrice: "2cr" },
//       { name: "Prabhsimran Singh", basePrice: "2cr" },
//       { name: "Hardik Pandya", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 4 M4",
//     players: [
//       { name: "Tilak Varma", basePrice: "2cr" },
//       { name: "Pat Cummins ✈️", basePrice: "2cr" },
//       { name: "Abhishek Sharma", basePrice: "2cr" },
//       { name: "N K Reddy", basePrice: "2cr" },
//       { name: "Ravindra Jadeja", basePrice: "2cr" },
//       { name: "Shivam Dube", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 5 M5",
//     players: [
//       { name: "Axar Patel", basePrice: "2cr" },
//       { name: "Varun Ch.", basePrice: "2cr" },
//       { name: "Andre Russell ✈️", basePrice: "2cr" },
//       { name: "Ramandeep Singh", basePrice: "2cr" },
//       { name: "Yashasvi Jaiswal", basePrice: "2cr" },
//       { name: "Riyan Parag", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 6 M6",
//     players: [
//       { name: "Sai Sudharshan", basePrice: "2cr" },
//       { name: "Rahul Tewatia", basePrice: "2cr" },
//       { name: "Shahrukh Khan", basePrice: "2cr" },
//       { name: "Ayush Badoni", basePrice: "2cr" },
//       { name: "Shashank Singh", basePrice: "2cr" },
//       { name: "Yash Dayal", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 7 M7",
//     players: [
//       { name: "Jasprit Bumrah", basePrice: "2cr" },
//       { name: "M Pathirana ✈️", basePrice: "2cr" },
//       { name: "Kuldeep yadav", basePrice: "2cr" },
//       { name: "Sunil Narine ✈️", basePrice: "2cr" },
//       { name: "Harshit Rana", basePrice: "2cr" },
//       { name: "Sandeep Sharma", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 8 M8",
//     players: [
//       { name: "Rashid khan ✈️", basePrice: "2cr" },
//       { name: "ravi Bishnoi", basePrice: "2cr" },
//       { name: "Mayank Yadav", basePrice: "2cr" },
//       { name: "Mohsin khan", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 9 M9",
//     players: [
//       { name: "jos Buttler ✈️", basePrice: "2cr" },
//       { name: "shreyas Iyer", basePrice: "2cr" },
//       { name: "rishabh Pant", basePrice: "2cr" },
//       { name: "kagiso Rabada ✈️", basePrice: "2cr" },
//       { name: "Arshdeep Singh", basePrice: "2cr" },
//       { name: "mitchell Starc ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 10 M10",
//     players: [
//       { name: "yuzvendra Chahal", basePrice: "2cr" },
//       { name: "liam Livingstone ✈️", basePrice: "2cr" },
//       { name: "david Miller ✈️", basePrice: "1.5cr" },
//       { name: "kl Rahul", basePrice: "2cr" },
//       { name: "Mohammad Shami", basePrice: "2cr" },
//       { name: "Mohammad Siraj", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 11 BA1",
//     players: [
//       { name: "harry Brook ✈️", basePrice: "2cr" },
//       { name: "devon Conway ✈️", basePrice: "2cr" },
//       { name: "jake f-mcgurk ✈️", basePrice: "2cr" },
//       { name: "aiden Markram ✈️", basePrice: "2cr" },
//       { name: "devdutt Padikkal", basePrice: "2cr" },
//       { name: "rahul Tripathi", basePrice: "0.75cr" },
//       { name: "david Warner ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 12 AL1",
//     players: [
//       { name: "r Ashwin", basePrice: "2cr" },
//       { name: "Venkatesh Iyer", basePrice: "2cr" },
//       { name: "mitchell Marsh ✈️", basePrice: "2cr" },
//       { name: "glenn Maxwell ✈️", basePrice: "2cr" },
//       { name: "Harshal patel", basePrice: "2cr" },
//       { name: "Rachin Ravindra ✈️", basePrice: "1.5cr" },
//       { name: "marcus Stoinis ✈️", basePrice: "2cr" },
//     ],
//   },

//   {
//     setName: "SET 13 WK1",
//     players: [
//       { name: "jonny Bairstow ✈️", basePrice: "2cr" },
//       { name: "quinton Decock ✈️", basePrice: "2cr" },
//       { name: "R Gurbaz ✈️", basePrice: "2cr" },
//       { name: "Ishan kishan", basePrice: "2cr" },
//       { name: "phil Salt ✈️", basePrice: "2cr" },
//       { name: "Jitesh Sharma", basePrice: "1cr" },
//     ],
//   },
//   {
//     setName: "SET 14 FA1",
//     players: [
//       { name: "Khaleel ahmed", basePrice: "2cr" },
//       { name: "trent Boult ✈️", basePrice: "2cr" },
//       { name: "josh Hazlewood ✈️", basePrice: "2cr" },
//       { name: "Avesh khan", basePrice: "2cr" },
//       { name: "Prasidh krishna", basePrice: "2cr" },
//       { name: "T Natrajan", basePrice: "2cr" },
//       { name: "anrich Nortje ✈️", basePrice: "2cr" },
//       { name: "jofra Archer ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 15 SP1",
//     players: [
//       { name: "Noor ahmed ✈️", basePrice: "2cr" },
//       { name: "Rahul Chahar", basePrice: "1cr" },
//       { name: "W Hasaranga ✈️", basePrice: "2cr" },
//       { name: "Waqar ✈️", basePrice: "0.75cr" },
//       { name: "M Theekshana ✈️", basePrice: "2cr" },
//       { name: "adam Zampa ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 16 UBA1",
//     players: [
//       { name: "Yash Dhull", basePrice: "0.3cr" },
//       { name: "Abhinav Manohar", basePrice: "0.3cr" },
//       { name: "Karun Nair", basePrice: "0.3cr" },
//       { name: "Raghuvanshi", basePrice: "0.3cr" },
//       { name: "Anmolpreet", basePrice: "0.3cr" },
//       { name: "Atharva Taide", basePrice: "0.3cr" },
//       { name: "Nehal Wadhera", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 17 UAL1",
//     players: [
//       { name: "H Brar", basePrice: "0.3cr" },
//       { name: "Naman dhir", basePrice: "0.3cr" },
//       { name: "mahipal Lomror", basePrice: "0.5cr" },
//       { name: "Sameer Rizwi", basePrice: "0.3cr" },
//       { name: "Abdul Samad", basePrice: "0.3cr" },
//       { name: "Vijay Shankar", basePrice: "0.3cr" },
//       { name: "Ashutosh sharma", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 18 UWK1",
//     players: [
//       { name: "Kumar Kushagra", basePrice: "0.3cr" },
//       { name: "Robin Minz", basePrice: "0.3cr" },
//       { name: "anuj Rawat", basePrice: "0.3cr" },
//       { name: "Vishnu Vinod", basePrice: "0.3cr" },
//       { name: "Upendra Singh Yadav", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 19 UFA1",
//     players: [
//       { name: "V Arora", basePrice: "0.3cr" },
//       { name: "Rashik Dar", basePrice: "0.3cr" },
//       { name: "Akash Madhwal", basePrice: "0.3cr" },
//       { name: "Mohit Sharma", basePrice: "0.5cr" },
//       { name: "Simarjeet Singh", basePrice: "0.3cr" },
//       { name: "Yash Thakur", basePrice: "0.3cr" },
//       { name: "Kartik Tyagi", basePrice: "0.4cr" },
//       { name: "Vyshak Vijaykumar", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 20 USP1",
//     players: [
//       { name: "Piyush Chawla", basePrice: "0.5cr" },
//       { name: "Shreyas Gopal", basePrice: "0.3cr" },
//       { name: "Mayank Markande", basePrice: "0.3cr" },
//       { name: "Suyash Sharma", basePrice: "0.3cr" },
//       { name: "Karn Sharma", basePrice: "0.5cr" },
//       { name: "Kumar Kartikeya", basePrice: "0.3cr" },
//       { name: "Manav Suthar", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 21 BA2",
//     players: [
//       { name: "Mayank Agarwal", basePrice: "1cr" },
//       { name: "Faf du plessis ✈️", basePrice: "2cr" },
//       { name: "glenn Phillips ✈️", basePrice: "2cr" },
//       { name: "rovman Powell ✈️", basePrice: "1.5cr" },
//       { name: "ajinkya Rahane", basePrice: "1.5cr" },
//       { name: "prithwi Shaw", basePrice: "0.75cr" },
//       { name: "kane Williamson ✈️", basePrice: "2cr" },
//     ],
//   },

//   {
//     setName: "SET 22 AL2",
//     players: [
//       { name: "sam Curran ✈️", basePrice: "2cr" },
//       { name: "marco Jansen ✈️", basePrice: "1.25cr" },
//       { name: "Daryl Mitchell ✈️", basePrice: "2cr" },
//       { name: "Krunal Pandya", basePrice: "2cr" },
//       { name: "Nitesh Rana", basePrice: "1.5cr" },
//       { name: "w Sundar", basePrice: "2cr" },
//       { name: "Shardul Thakur", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 23 WK2",
//     players: [
//       { name: "alex Carey ✈️", basePrice: "1cr" },
//       { name: "KS Bharat", basePrice: "0.75cr" },
//       { name: "D Ferreira✈️", basePrice: "0.75cr" },
//       { name: "Shai Hope ✈️", basePrice: "1.25cr" },
//       { name: "josh Inglis ✈️", basePrice: "2cr" },
//       { name: "Ryan Rickelton ✈️", basePrice: "1cr" },
//     ],
//   },
//   {
//     setName: "SET 24 FA2",
//     players: [
//       { name: "Deepak Chahar", basePrice: "2cr" },
//       { name: "gerald Coeetze ✈️", basePrice: "1.25cr" },
//       { name: "Akash Deep", basePrice: "1cr" },
//       { name: "Tushar Deshpande", basePrice: "1cr" },
//       { name: "lokie Ferguson ✈️", basePrice: "2cr" },
//       { name: "Bhuvneshwar kumar", basePrice: "2cr" },
//       { name: "Mukesh Kumar", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 25 SP2",
//     players: [
//       { name: "Akeal Hosein ✈️", basePrice: "1.5cr" },
//       { name: "Keshav Maharaj ✈️", basePrice: "0.75cr" },
//       { name: "Mujeeb Ur Rahman ✈️", basePrice: "2cr" },
//       { name: "Adil Rashid ✈️", basePrice: "2cr" },
//       { name: "Tabraiz Shamsi ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 26 UBA2",
//     players: [
//       { name: "Ricky Bhui", basePrice: "0.3cr" },
//       { name: "Swastik Chhikara", basePrice: "0.3cr" },
//       { name: "Shubham Dubey", basePrice: "0.3cr" },
//       { name: "Shaik Rasheed", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 27 UAL2",
//     players: [
//       { name: "Mayank Dagar", basePrice: "0.3cr" },
//       { name: "Anshul Kamboj", basePrice: "0.3cr" },
//       { name: "Md. Arshad Khan", basePrice: "0.3cr" },
//       { name: "S Prabhudessai", basePrice: "0.3cr" },
//       { name: "Anukul Roy", basePrice: "0.3cr" },
//       { name: "Swapnil Singh", basePrice: "0.3cr" },
//     ],
//   },
//   {
//     setName: "SET 28 BA3",
//     players: [
//       { name: "Finn Allen ✈️", basePrice: "2cr" },
//       { name: "D Brevis ✈️", basePrice: "0.75cr" },
//       { name: "Ben Duckett ✈️", basePrice: "2cr" },
//       { name: "Manish Pandey", basePrice: "0.75cr" },
//       { name: "Rilee Rossow ✈️", basePrice: "2cr" },
//       { name: "Sherfane Rutherford ✈️", basePrice: "1.5cr" },
//     ],
//   },
//   {
//     setName: "SET 29 AL3",
//     players: [
//       { name: "Shahbaz Ahmed", basePrice: "1cr" },
//       { name: "Moeen Ali ✈️", basePrice: "2cr" },
//       { name: "Tim David ✈️", basePrice: "2cr" },
//       { name: "Deepak Hooda", basePrice: "0.75cr" },
//       { name: "Will Jacks ✈️", basePrice: "2cr" },
//       { name: "A Omarzai ✈️", basePrice: "1.5cr" },
//       { name: "Sai Kishore", basePrice: "0.75cr" },
//       { name: "R Shepherd ✈️", basePrice: "1.5cr" },
//     ],
//   },
//   {
//     setName: "SET 30 FA3",
//     players: [
//       { name: "Nandre Burger ✈️", basePrice: "1.25cr" },
//       { name: "Spencer Johnson ✈️", basePrice: "2cr" },
//       { name: "Umran Malik", basePrice: "0.75cr" },
//       { name: "M Rahman ✈️", basePrice: "2cr" },
//       { name: "Ishant Sharma", basePrice: "0.75cr" },
//       { name: "Nuwan Tushara ✈️", basePrice: "0.75cr" },
//       { name: "Naveen Ul Haq ✈️", basePrice: "2cr" },
//       { name: "Jaydev Unadkat", basePrice: "1cr" },
//       { name: "Umesh Yadav", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 31 BA4",
//     players: [
//       { name: "Mark Chapman ✈️", basePrice: "1.5cr" },
//       { name: "Brandon King ✈️", basePrice: "0.75cr" },
//       { name: "Evin Lewis ✈️", basePrice: "2cr" },
//       { name: "P Nissanka ✈️", basePrice: "0.75cr" },
//       { name: "Steve Smith ✈️", basePrice: "2cr" },
//     ],
//   },
//   {
//     setName: "SET 32 AL4",
//     players: [
//       { name: "Gus Atkinson ✈️", basePrice: "2cr" },
//       { name: "Tom Curran ✈️", basePrice: "2cr" },
//       { name: "K Gowtham", basePrice: "1cr" },
//       { name: "Mohammad Nabi ✈️", basePrice: "1.5cr" },
//       { name: "Mitchell Santner ✈️", basePrice: "2cr" },
//       { name: "Jayant Yadav", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 33 FA4",
//     players: [
//       { name: "Fazal Haq Farooqi ✈️", basePrice: "2cr" },
//       { name: "Matt Henry ✈️", basePrice: "2cr" },
//       { name: "Alzari Joseph ✈️", basePrice: "2cr" },
//       { name: "Kuldeep Sen", basePrice: "0.75cr" },
//       { name: "Reece Topley ✈️", basePrice: "0.75cr" },
//       { name: "Lizaad Williams ✈️", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 34 BA5",
//     players: [
//       { name: "R Van Der Dussen ✈️", basePrice: "2cr" },
//       { name: "Will Young ✈️", basePrice: "1.25cr" },
//       { name: "Najibullah Zadran ✈️", basePrice: "0.75cr" },
//       { name: "Ibrahim Zadran ✈️", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 35 AL5",
//     players: [
//       { name: "Sean Abott ✈️", basePrice: "2cr" },
//       { name: "Jacob Bethell ✈️", basePrice: "1.25cr" },
//       { name: "Sarfaraz Khan", basePrice: "0.75cr" },
//       { name: "Kyle Mayers ✈️", basePrice: "1.5cr" },
//       { name: "Mathew Short ✈️", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 36 FA5",
//     players: [
//       { name: "Jason Behrendorff ✈️", basePrice: "1.5cr" },
//       { name: "D Chameera ✈️", basePrice: "0.75cr" },
//       { name: "Nathan Ellis ✈️", basePrice: "1.25cr" },
//       { name: "Shamar Joseph ✈️", basePrice: "0.75cr" },
//       { name: "Josh Little ✈️", basePrice: "0.75cr" },
//       { name: "Shivam Mavi", basePrice: "0.75cr" },
//       { name: "Navdeep Saini", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 37 AL6",
//     players: [
//       { name: "Charith Asalanka ✈️", basePrice: "0.75cr" },
//       { name: "Michell Bracewell ✈️", basePrice: "1.5cr" },
//       { name: "J Overton ✈️", basePrice: "1.5cr" },
//       { name: "D Wellalage ✈️", basePrice: "0.75cr" },
//     ],
//   },
//   {
//     setName: "SET 38 FA6",
//     players: [
//       { name: "D Madhushanka ✈️", basePrice: "0.75cr" },
//       { name: "Adam Milne ✈️", basePrice: "2cr" },
//       { name: "Lungi Nigdi ✈️", basePrice: "1cr" },
//       { name: "William U Rouke ✈️", basePrice: "1.5cr" },
//     ],
//   },
//   {
//     setName: "SET 39",
//     players: [
//       { name: "Jason Holdar ✈️", basePrice: "1cr" },
//       { name: "Shakib Al Hasan ✈️", basePrice: "1cr" },
//       { name: "Mahedi Hasan ✈️", basePrice: "1cr" },
//       { name: "Tim Southee ✈️", basePrice: "1.5cr" },
//     ],
//   },
//   {
//     setName: "SET 40",
//     players: [
//       { name: "Ashton Agar ✈️", basePrice: "1.25cr" },
//       { name: "Chris Jordan ✈️", basePrice: "1.25cr" },
//       { name: "Kyle Jamison ✈️", basePrice: "1.5cr" },
//       { name: "James Neesham ✈️", basePrice: "1.25cr" },
//     ],
//   },
// ];

import playerData from "/src/MegaAuction/Players";
const NewListPage = () => {
  return (
    <div
      className={`p-6`}
      style={{
        backgroundImage: `url(${bg_img}`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-2xl text-center font-extrabold mb-4 text-white font-ububtu tracking-wide">
        Mega Auction 2025 <br /> By Aasim
        <hr className="my-3" />
      </h1>

      <div
        className="pl-4 my-5  text-white  bg-[url('https://www.shutterstock.com/image-illustration/black-headshot-background-portrait-abstract-600nw-2254196619.jpg')] bg-no-repeat bg-cover p-2 
"
      >
        {" "}
        <h1 className="text-2xl text-center font-extrabold text-white font-ububtu tracking-wide">
          RULES
        </h1>
        <ol className="list-decimal font-ububtu p-3 text-justify text-base/7">
          <li>
            There are a total of <b>240 players</b> available in the auction,
            including:
            <ul className="list-disc">
              <li>126 Indian players </li>
              <li>114 overseas players</li>
              <li>55 Batsman</li>
              <li>28 Wicket Keepers</li>
              <li>66 All Rounders</li>
              <li>91 Bowlers</li>
            </ul>
            The players are divided into <b>40 sets</b>, with 44 uncapped
            players included.
          </li>
          <li>
            Team Participation: A minimum of 8 teams and a maximum of 10 teams
            are required to play the game.
          </li>
          <li>
            Initial Budget: Each team is allocated a total budget of{" "}
            <b>150 crore (cr) </b>before the auction begins.
          </li>
          <li>
            Minimum Players: Each team must purchase at least 20 players during
            the auction.
          </li>
          <li>
            Player Composition:
            <ul className="list-disc">
              <li>At least 7 batsmen.</li>
              <li>At least 2 wicketkeepers.</li>
              <li>At least 7 bowlers.</li>
              <li>At least 4 all-rounders.</li>
            </ul>
          </li>
          <li>
            Overseas Player Limit: Each team can include a maximum of{" "}
            <b>10 overseas players</b> in their squad.
          </li>
          <li>
            Maximum Squad Size: Each team can have a maximum of{" "}
            <b>25 players</b> in their squad.
          </li>
          <li>
            Rule Compliance: Teams failing to meet any of the above criteria
            will be <b className="uppercase text-yellow-400">disqualified</b>{" "}
            from the game.
          </li>
        </ol>
      </div>

      <div>
        <hr /><br />
      <h1 className="text-2xl text-center font-extrabold mb-4 text-white font-ububtu tracking-wide">
          PLAYERS
        </h1>
        {playerData.map((set, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl text-black bg-gradient-to-r from-[#fff70e] via-[#f8f605] to-[#d5d414]  font-Anton tracking-wide text-center border-b-4 border-[#7f8301] rounded-full mb-2 p-1">
              {set.setName}
            </h2>
            <ol
              className="pl-4 text-white  bg-[url('https://www.shutterstock.com/image-illustration/black-headshot-background-portrait-abstract-600nw-2254196619.jpg')] bg-no-repeat bg-cover p-2 
            // shadow-md  shadow-white"
            >
              {set.players.map((player, idx) => (
                <li key={idx} className="relative text-lg py-1">
                  {/* {idx + 1}.{" "} */}
                  <img src={player.src} className="h-10 w-10 inline-block mr-1 rounded-full" alt="" />
                  <span className="font-bold font-ububtu tracking-wide text-xl ">
                    {player.name.toUpperCase()}{" "}
                    
                    <span className="text-right  float-right ">
                      {player.basePrice}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewListPage;

/*
Players List

set 1 M1
1. Virat
2. Patidar
3. Surya
4. Rohit
5. Klassen
6. Head
set 2 M2
1. Gaikwad
2. MS Dhoni
3. Stubbs
4. Porel
5. Rinku
6. Sanju
set 3 M3
1. Jurel
2. Hetmyer
3. Gill
4. Pooran
5. Prabhsimran Singh
6. Hardik
set 4 M4
1. Tilak
2. Cummins
3. Abhishek
4. Reddy
5. Jadeja
6. Dube
set 5 M5
1. Axar
2. Varun Ch.
3. Russell
4. Ramandeep
5. Jaiswal
6. Riyan P.
set 6 M6
1. Sudharshan
2. Tewatia
3. Shahrukh
4. Badoni
5. Shashank
6. Yash Dayal
set 7 M7
1. Bumrah
2. Pathirana
3. Kuldeep
4. Narine
5. Harshit
6. Sandeep
set 8 M8
1. Rashid 
2. Bishnoi
3. Mayank Y.
4. Mohsin
set 9 M9
1. Buttler
2. Iyer
3. Pant
4. Rabada
5. Arshdeep
6. Starc
set 10 M10 all 2cr
1. Chahal
2. Livingstone
3. Miller 1.5
4. Rahul
5. Shami
6. Siraj
set 11 BA1
1. Brook 2
2. Conway 2
3. Fraser 2
4. Markram 2
5. Padikkal 2
6. Tripathi 0.75
7. Warner 2
set 12 AL1
1. Ashwin
2. V Iyer
3. Marsh
4. Maxwell
5. Harshal
6. Rachin 1.5
7. Stoinis
set 13 WK1
1. Bairstow
2. decock
3. Gurbaz
4. Ishan
5. Salt
6. Jitesh 1cr
set 14 FA1
1. Khaleel
2. Boult
3. Hazlewood
4. Avesh
5. Prasidh
6. T Natrajan
7. Nortje
8. Archer
 set 15 SP1
1. Noor
2. Rahul C. 1cr
3. Hasaranga
4. Waqar (afg)  0.75
5. Theekshana
6. Zampa
set 16 UBA1 0.3cr all
1. Yash Dhull
2. Abhinav Manohar
3. Karun nair
4. Raghuvanshi
5. Anmolpreet 
6. Atharva Taide
7. Nehal Wadhera
set 17 UAL1 0.3cr
1. H brar
2. Naman 
3. Lomror 0.5cr
4. S Rizwi
5. A Samad
6. V Shankar
7. Ashutosh
set 18 UWK1 0.3cr
1. Kumar Kushagra
2. Robin Minz
3. Rawat
4. Vishnu Vinod
5. Upendra Singh Yadav
set 19 UFA1 0.3cr
1. V Arora
2. Rashik Dar
3. A Madhwal
4. M Sharma 0.5cr
5. Simarjeet Singh
6. Yash Thakur
7. Kartik Tyagi 0.4cr
8. Vyshak Vijaykumar
set 20 USP1 0.3cr
1. Piyush Chawla 0.5cr
2. Shreays Gopal
3. Mayank Markande
4. Suyash Sharma
5. Karn Sharma 0.5
6. Kumar Kartikeya
7. Manav Suthar
set 21 BA2
1. Mayank Agarwal 1
2. Faf 2
3. Phillips 2
4. Powell 1.5
5. Rahane 1.5
6. Shaw 0.75
7. Williamson 2
set 22 AL2
1. Curran 2
2. Jansen 1.25
3. Daryl Mitchell 2
4. Krunal 2
5. N Rana 1.5
6. Sundar 2
7. Shardul 2
set 23 WK2
1. Carey 1
2. Bharat 0.75
3. Donovan Ferreira 0.75
4. Hope 1.25
5. Inglis 2
6. Ryan Rickelton 1
set 24 FA2
1. D Chahar 2
2. Coeetze 1.25
3. A Deep 1
4. T Deshpande 1
5. Ferguson 2
6. Bhuvneshwar 2
7. Mukesh Kumar 2
set 25 SP2
1. Akeal Hosein 1.5
2. K Maharaj 0.75
3. Mujeeb Ur Rahman 2
4. Adil Rashid 2
5. Tabraiz Shamsi 2
set 26 UBA2 0.3cr
1. Ricky Bhui
2. Swastik Chhikara
3. Shubham Dubey
4. Shaik Rasheed
set 27 UAL2 0.3cr
1. Mayank Dagar
2. Anshul Kamboj
3. Md. Arshad Khan
4. S Prabhudessai
5. Anukul Roy
6. Swapnil Singh
set 28 BA3
1. Finn Allen 2
2. D Brevis 0.75
3. Ben Duckett 2
4. Manish Pandey 0.75
5. Rilee Rossow 2
6. Sherfane Rutherford 1.5
set 29 AL3
1. Shahbaz Ahmed 1
2. Moeen Ali 2
3. Tim David 2
4. Deepak Hooda 0.75
5. Will Jacks 2
6. Omarzai 1.5
7. Sai Kishore 0.75
8. R Shepherd 1.5
set 30 FA3
1. Nandre Burger 1.25
2. Spencer Johnson 2
3. Umran Malik 0.75
4. Mustafizur Rahman 2
5. Ishant Sharma 0.75
6. Nuwan Tushara 0.75
7. Naveen Ul Haq 2
8. Jaydev Unadkat 1
9. Umesh Yadav 2
set 31 BA4
1. Mark Chapman 1.5
2. Brandon King 0.75
3. Evin Lewes 2
4. P Nissanka 0.75
5. Steve Smith 2
set 32 AL4
1. Gus Atkinson 2
2. Tom Curran 2
3. K Gowtham 1
4. Md Nabi 1.5
5. Mitchell Santner 2
6. Jayant Yadav 0.75
set 33 FA4
1. Fazal Haq Farooqi 2
2. Matt Henry 2
3. Alzari Joseph 2
4. Kuldeep Sen 0.75
5. Reece Topley 0.75
6. Lizaad Williams 0.75
set 34 BA5
1. R Van Der Dussen 2
2. Will Young 1.25
3. N Zadran 0.75
4. I Zadran 0.75
set 35 AL5
1. Sean Abott 2
2. Jacob Bethell 1.25
3. Sarfaraz Khan 0.75
4. Kyle Mayers 1.5
5. Mathew Short 0.75
set 36 FA5
1. J Behrendorff 1.5
2. D Chameera 0.75
3. Nathan Ellis 1.25
4. Shamar Joseph 0.75
5. Josh Little 0.75
6. Shivam Mavi 0.75
7. Navdeep Saini 0.75
set 37 AL6
1. C Asalanka 0.75
2. M Bracewell 1.5
3. J Overton 1.5
4. D Wellalage 0.75
set 38 FA6
1. D Madhushanka 0.75
2. Adam Milne 2
3. L Nigdi 1
4. William U Rouke 1.5
set 39
1. Jason Holdar 1
2. Shakib Al Hasan 1
3. Mahedi Hasan 1
4. Tim Southee 1.5
set 40
5. Ashton Agar 1.25
6. Chris Jordan 1.25
7. Kyle Jamison 1.5
8. J Neesham 1.25
*/
