import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { menus, capitalize, components, get_imported } from "../../general";

const icons = {};
for (const menu of menus.flat()) {
  icons[menu] = (await import(`./icons/${menu}.png`)).default;
}

function Navbar() {
  return (
    <nav className="-bg-rect">
      {components(menus, "div", {
        content: (group) =>
          components(group, NavLink, {
            props: (menu) => ({
              to: "/" + menu,
              className: ({ isActive }) => (isActive ? "" : "not-active"),
            }),
            content: (menu) => (
              <img src={icons[menu]} alt={capitalize(menu)}></img>
            ),
          }),
      })}
    </nav>
  );
}

export default Navbar;
