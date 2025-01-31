import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home"
import SquadPage from "./components/SquadPage";
import PlayerList from "./components/PlayersList"
import RandomPlayerPicker from "./components/RandomPlayerPicker";
import ListPage from "./components/ListPage";
import NewAuctionPage from "./components/NewAuctionPage";
import NewSquad from "./components/NewSquad";
import NewListPage from "./MegaAuction/NewListPage";
import TeamManage from "./MegaAuction/TeamManage";
import MainAuction from "./MegaAuction/MainAuction";
import UnsoldPlayer from "./MegaAuction/UnsoldPlayers";


function App() {

  return (
    <>
    <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route exact path="/PlayerList" element={<PlayerList />}></Route>
            <Route exact path="/PlayGame" element={<RandomPlayerPicker />}></Route>
            <Route exact path="/SquadPage" element={<SquadPage />}></Route>
            <Route exact path="/ListPage" element={<ListPage />}></Route>
            <Route exact path="/NewAuctionPage" element={<NewAuctionPage />}></Route>
            <Route exact path="/NewSquad" element={<NewSquad/>}></Route>
            <Route exact path="/NewListPage" element={<NewListPage/>}></Route>
            <Route exact path="/TeamManage" element={<TeamManage/>}></Route>
            <Route exact path="/MainAuction" element={<MainAuction/>}></Route>
            <Route exact path="/UnsoldPlayer" element={<UnsoldPlayer/>}></Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
