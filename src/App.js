import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import { menus, capitalize, components, get_imported } from "./general.js";

const menuComponents = {};
for (const menu of menus.flat()) {
  menuComponents[menu] = (
    await import(`./components/${menu}/${capitalize(menu)}.js`)
  ).default;
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        {components(menus.flat(), Route, {
          props: (menu) => ({
            path: "/" + menu,
            element: menuComponents[menu],
          }),
        })}
      </Routes>
    </>
  );
}

export default App;
