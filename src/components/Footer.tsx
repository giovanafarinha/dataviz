import "../App.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className=" w-365 bg-black text-white flex flex-col border-1 m-0 mt-50 p-45 rounded-lg px-25 py-25">
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <div className="">
            {" "}
            01
            <h2 className="font-semibold">
              {" "}
              Credits
              <p className="font-light">
                this project was coded with passion by{" "}
                <a className="underline" href="https://github.com/Theufyr">
                  Theufyr{" "}
                </a>{" "}
                and{" "}
                <a
                  className="underline"
                  href="https://github.com/giovanafarinha"
                >
                  {" "}
                  Giovana{" "}
                </a>{" "}
                , open-sourced on GitHub hosted on Vercel.{" "}
              </p>
              <nav className=" justify-around px-5 py-5 mt-10 flex">
                <NavLink className="cursor-pointer hover:text-red-700" to="/">
                  {" "}
                  Home{" "}
                </NavLink>{" "}
                <NavLink
                  className="cursor-pointer hover:text-red-700"
                  to="/analysis"
                >
                  Analysis
                </NavLink>{" "}
                <NavLink
                  className="cursor-pointer hover:text-red-700"
                  to="/about"
                >
                  About
                </NavLink>{" "}
              </nav>
            </h2>
          </div>
          <div className="ml-5 px-5 py-5">
            02
            <h2 className="font-semibold"> Ressources utiles</h2>
            <ul>
              <li className="font-light">
                Documentation-{" "}
                <a className="underline" href=" https://tailwindcss.com/">
                  {" "}
                  Tailwind{" "}
                </a>
              </li>
              <li>
                Documentation-{" "}
                <a className="underline" href=" https://recharts.github.io/">
                  {" "}
                  Recharts{" "}
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
