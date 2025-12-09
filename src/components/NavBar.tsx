import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <>
      {/* Navigation */}
      {/* router not working beacause i added the proprety of position
     for px => padding-left: -18rem;
padding-right: -18rem; 
 for py => padding-top and padding-bottom
*/}
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
    </>
  );
}
