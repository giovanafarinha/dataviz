import "../App.css";

export default function Footer() {
  return (
    <>
      <section className=" bg-neutral-300 flex flex-col border-1 border-yellow-600 m-25 rounded-lg px-5 py-5">
        <div className="grid grid-cols-2 gap-6 justify-items-center">
          <div className="">
            {" "}
            01
            <h2 className="font-semibold">
              {" "}
              Credits
              <p className="font-light">
                this project was coded with passion by Theufyr and Giovana,
                open-sourced on GitHub hosted on Vercel.{" "}
              </p>
            </h2>
          </div>
          <div className="rounded-lg px-5 py-5">
            01
            <h2 className="font-semibold">
              {" "}
              Ressources utiles
              <p className="font-light">
                <ul>
                  <li>
                    Documentation-{" "}
                    <a className="underline" href=" https://tailwindcss.com/">
                      {" "}
                      Tailwind{" "}
                    </a>
                  </li>
                  <li>
                    Documentation-{" "}
                    <a
                      className="underline"
                      href=" https://recharts.github.io/"
                    >
                      {" "}
                      Recharts{" "}
                    </a>
                  </li>
                </ul>{" "}
              </p>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
