import bgvideo from "../assets/BgVideo.webm";
import imageOne from "../assets/imageOne.png";
export default function Home() {
  return (
    <>
      <video className="h-full w-full rounded-lg" autoPlay muted loop>
        <source src={bgvideo} type="video/webm" />
      </video>
      <section className="flex flex-row bg-yellow-600 ">
        <h1 className="text-shadow-2xs text-8xl text-red-700 flex -mt-75 font-bbh">
          Dataviz Cinema
        </h1>
        <div className="flex justify-items-start rounded-lg mt-5">
          <img
            className="object-cover w-150 h-180 -py-10 mr-180"
            src={imageOne}
            alt="nature image"
          />
          {/*  <p className="text-xl text-black">
            
            Visualisez l’activité cinématographique à travers les lieux de
            tournage à Paris: tendances par année, types de tournage,
            arrondissements, réalisateurs et plus encore.
          </p> */}
        </div>
      </section>
      <section className="flex flex-row -mt-170 mb-50 ml-30">
        <div className="grid grid-rows-2 gap-6 justify-items-start py-5 px-5  ">
          <div className="border-1 border-indigo-600 rounded-lg px-5 py-5">
            01
            <h2 className="font-semibold">
              Tendances annuelles
              <p className="font-light">
                Nombre de tournages par année pour repérer les pics d’activité.
              </p>
            </h2>
          </div>
          <div className=" border-1 border-indigo-600 rounded-lg px-8 py-5">
            02
            <h2 className="font-semibold">
              Types de tournage
              <p className="font-light">
                Long métrage, Série TV, Téléfilm… suivez l’évolution par type.
              </p>
            </h2>
          </div>
          <div className=" border-1 border-indigo-600 rounded-lg px-13 py-5">
            03
            <h2 className="font-semibold">
              Graph des arrondissements
              <p className="font-light">
                Répartition des tournages par arrondissement parisien.
              </p>
            </h2>
          </div>
          <div className=" border-1 border-indigo-600 rounded-lg px-14 py-5">
            04
            <h2 className="font-semibold">
              Top réalisateurs
              <p className="font-light">
                Classement des réalisateurs les plus présents à Paris.
              </p>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
