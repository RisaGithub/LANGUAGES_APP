import Navbar from "./components/navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
const menuNames = "home learn texts videos music settings profile".split(" ");
const menuNamesToComponents = {};
for (const name of menuNames) {
  menuNamesToComponents[name] = import(
    `./components/${name}/${name[0].toUpperCase() + name.slice(1)}.js`
  );
}

function App({ currentMenuName }) {
  const Home = menuNamesToComponents["home"];
  return (
    <div>
      <Navbar
        currentMenuName={currentMenuName}
        menuNames={Object.keys(menuNamesToComponents)}
      ></Navbar>
      <Routes>
        {/* {Array.from(menuNamesToComponents, (menuName) => {
          const Component = menuNamesToComponents[menuName];
          return (
            <Route
              path={"/" + menuName}
              element={<Component></Component>}
            ></Route>
          );
        }).concat([<Route path="/" element={<Home></Home>}></Route>])} */}
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export { App, menuNamesToComponents };
