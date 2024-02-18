import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import { capitalize, menus, components, get_imported } from "./general.js";

const menuComponents = await get_imported(menus, (menu) =>
  import(`./components/${menu}/${capitalize(menu)}.js`)
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        {components(menus, (menu) => [
          Route,
          { path: "/" + menu, element: menuComponents[menu]() },
        ])}
      </Routes>
    </>
  );
}

export default App;
