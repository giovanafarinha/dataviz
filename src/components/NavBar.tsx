import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
      <nav className=" mt-0 sepia-70 bg-indigo-200 w-screen flex justify-around items-center px-60 -py-15 text-black text-xl font-light">
        <NavLink className="cursor-pointer hover:text-red-700" to="/">
          Home
        </NavLink>
        <NavLink className="cursor-pointer hover:text-red-700" to="/analysis">
          Analysis
        </NavLink>
        <NavLink className="cursor-pointer hover:text-red-700" to="/about">
          About
        </NavLink>
      </nav>
  );
}
