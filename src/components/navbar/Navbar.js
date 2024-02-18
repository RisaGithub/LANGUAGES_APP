import { Link } from "react-router-dom";

function Navbar({ menuNames }) {
  return (
    <nav>
      {menuNames.map((menuName) => (
        <Link key={menuName} className={menuName} to={"/" + menuName}>
          {menuName}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
