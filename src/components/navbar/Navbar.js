import { Link } from "react-router-dom";

function Navbar({ currentMenuName, menuNames }) {
  return (
    <nav>
      {menuNames.map((menuName) => (
        <Link
          key={menuName}
          className={
            menuName + (currentMenuName === menuName ? " current" : "")
          }
          to={"/" + menuName}
        >
          {menuName}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
