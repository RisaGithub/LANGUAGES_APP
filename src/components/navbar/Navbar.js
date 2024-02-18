import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {
  menus,
  menuGroups,
  capitalize,
  components,
  get_imported,
} from "../../general";

const icons = await get_imported(menus, (menu) =>
  import(`./icons/${menu}.png`)
);

function Navbar() {
  const get_menu_items = (menu) => [
    NavLink,
    {
      to: "/" + menu,
      className: ({ isActive }) => (isActive ? "" : "not-active"),
    },
    <img src={icons[menu]} alt={capitalize(menu)}></img>,
  ];

  return (
    <nav className="-bg-rect">
      {components(menuGroups, (group) => [
        "div",
        {},
        components(group, get_menu_items),
      ])}
    </nav>
  );
}

export default Navbar;
