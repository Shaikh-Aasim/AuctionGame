import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home"
import SquadPage from "./components/SquadPage";
import PlayerList from "./components/PlayersList"
import RandomPlayerPicker from "./components/RandomPlayerPicker";
import ListPage from "./components/ListPage";


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
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
