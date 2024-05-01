import { NavLink } from "react-router-dom";
import './Navbar.css'
import homeIcon from './icons/home.png'
import learnIcon from './icons/learn.png'
import textsIcon from './icons/texts.png'
import videosIcon from './icons/videos.png'
import musicIcon from './icons/music.png'
import profileIcon from './icons/profile.png'
import settingsIcon from './icons/settings.png'


const icons = {
  'home': homeIcon,
  'learn': learnIcon,
  'texts': textsIcon,
  'videos': videosIcon,
  'music': musicIcon,
  'profile': profileIcon,
  'settings': settingsIcon,
}

function Btn({ name }) {
  return (
    <NavLink className={({ isActive }) => (isActive ? '-active' : '')} to={'/' + name}>
      <img src={icons[name]} alt={name}></img>
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <nav className="-bg-rect">
      <div>
        <Btn name='home' />
        <Btn name='learn' />
      </div>

      <div>
        <Btn name='texts' />
        <Btn name='videos' />
        <Btn name='music' />
      </div>

      <div>
        <Btn name='profile' />
        <Btn name='settings' />
      </div>
    </nav>
  );
}
