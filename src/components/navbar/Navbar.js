import { NavLink } from "react-router-dom";
import "./Navbar.css";

const menus = [
  ["home", "learn"],
  ["texts", "videos", "music"],
  ["settings", "profile"],
];

const icons = {};
for (const menu of menus.flat()) {
  icons[menu] = (await import(`./icons/${menu}.png`)).default;
}

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

function components(
  collection,
  { Component = "div", props = (element) => {}, content = (element) => <></> }
) {
  return Array.from(collection, (element) => (
    <Component {...props(element)} key={String(element)}>
      {content(element)}
    </Component>
  ));
}

function Navbar() {
  return (
    <nav className="-bg-rect">
      {components(menus, {
        content: (group) =>
          components(group, {
            Component: NavLink,
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
