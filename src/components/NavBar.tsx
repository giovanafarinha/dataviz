import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
      <nav className=" mt-0 bg-neutral-300 w-screen flex justify-around items-center px-30 -py-15 font-semibold">
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
