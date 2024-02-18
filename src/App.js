import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home";
import Learn from "./components/learn/Learn";
import Texts from "./components/texts/Texts";
import Videos from "./components/videos/Videos";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Profile from "./components/profile/Profile";

function App() {
  const menuNames = "home learn texts videos music settings profile".split(" ");
  return (
    <div>
      <Navbar menuNames={menuNames}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/learn" element={<Learn></Learn>}></Route>
        <Route path="/texts" element={<Texts></Texts>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/music" element={<Music></Music>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
