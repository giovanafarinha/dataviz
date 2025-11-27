import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-red-50 text-center text-xl underline">
        <NavLink to="/"> Home </NavLink> |{""}
        <NavLink to="/analysis">Analysis</NavLink> |{" "}
        <NavLink to="/about">About</NavLink>{" "}
      </nav>
    </>
  );
}
