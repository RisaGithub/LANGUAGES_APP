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
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/texts" element={<Texts />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
