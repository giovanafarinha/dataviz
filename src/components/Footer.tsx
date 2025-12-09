import "../App.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className=" w-368 bg-black text-white flex flex-col border-1 mt-5 rounded-lg px-15 py-10">
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <div className="">
            <h2 className="font-semibold">Credits</h2>
            <p className="font-light">
              This project was coded with passion by <a className="underline" href="https://github.com/giovanafarinha">Giovana</a> & <a className="underline" href="https://github.com/Theufyr">Theufyr</a>, open-sourced on GitHub hosted on Vercel.
            </p>
            <nav className=" mt-5 -mb-45 justify-around flex">
              <NavLink className="cursor-pointer hover:text-red-700" to="/">
                Home
              </NavLink>
              <NavLink
                className="cursor-pointer hover:text-red-700"
                to="/analysis"
              >
                Analysis
              </NavLink>
              <NavLink
                className="cursor-pointer hover:text-red-700"
                to="/about"
              >
                About
              </NavLink>
            </nav>
          </div>
          <div className="ml-5  py-5">
            <h2 className="font-semibold">Useful ressources</h2>
            <ul>
              <li className="font-light">
                Documentation-
                <a className="underline" href=" https://tailwindcss.com/">
                  Tailwind
                </a>
              </li>
              <li>
                Documentation-
                <a className="underline" href=" https://recharts.github.io/">
                  Recharts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
