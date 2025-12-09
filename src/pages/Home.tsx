import bgvideo from "../assets/BgVideo.webm";
import imageTwo from "../assets/imageTwo.jpg";
import imageThree from "../assets/imageThree.jpg";
import imageFour from "../assets/imageFour.jpg";
import imageFive from "../assets/imageFive.jpg";

import imageSix from "../assets/imageSix.jpg";
export default function Home() {
  return (
    <>
      {" "}
      {/* injected the background video here  */}
      <video className="h-40lw-40 l w-full rounded-lg" autoPlay muted loop>
        <source src={bgvideo} type="video/webm" />
      </video>
      <section className="flex flex-row">
        {" "}
        {/* section of heading-container */}
        <h1 className="text-shadow-2xs text-8xl sepia-70 text-indigo-200 flex -mt-75 font-bbh">
          Dataviz Cinema
          {/* <p className="text-xl text-black">
            Visualisez l’activité cinématographique à travers les lieux de
            tournage à Paris: tendances par année, types de tournage,
            arrondissements, réalisateurs et plus encore. </p>
 */}
        </h1>
        <section className=" sepia-70 flex flex-col -ml-240 m-0 px-15">
          {/* section of boxes-container */}
          <div className="flex gap-6 justify-items-start py-5 px-5 ">
            <div className=" bg-indigo-200 text-black border-1 border-indigo-600 rounded-lg px-5 py-5 shadow-xl">
              01
              <h2 className="font-semibold">Tendances annuelles </h2>
              <p className="font-light">
                Nombre de tournages par année pour repérer les pics d’activité.
              </p>
            </div>
            <div className="bg-indigo-200 text-black border-1 border-gray-600 rounded-lg px-5 py-5 shadow-lg">
              02
              <h2 className="font-semibold">Types de tournage</h2>
              <p className="font-light">
                Long métrage, Série TV, Téléfilm… suivez l’évolution par type.
              </p>
            </div>
            <div className=" bg-indigo-200 text-black border-1 border-indigo-600 rounded-lg px-13 py-5 shadow-xl">
              03
              <h2 className="font-semibold">Graph des arrondissements </h2>
              <p className="font-light">
                Répartition des tournages par arrondissement parisien.
              </p>
            </div>
            <div className="bg-indigo-200 text-black border-1 border-indigo-600 rounded-lg px-14 py-5">
              04
              <h2 className="font-semibold">Top réalisateurs</h2>
              <p className="font-light">
                Classement des réalisateurs les plus présents à Paris.
              </p>
            </div>
          </div>
        </section>{" "}
      </section>
      {/*  carousel container */}
      <div className="flex gap-6 scroll-animation">
        <div className="m-5 w-360 h-70 border-black flex border-15 border-red overflow-x-auto gap-34 carousel">
          {/*  group container */}

          <div className="spin-15 flex gap-3 sepia-70">
            <div aria-hidden className="flex items-center justify-center gap-3">
              {/*  inside the card for each container */}
              <div className=" flex gap-6 6 w-90 wpx-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageSix} alt="man" />
              </div>
              <div className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageTwo} alt="man" />
              </div>
              <div className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageThree} alt="man" />
              </div>
              <div className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageFour} alt="man" />
              </div>
              <div className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageFive} alt="man" />
              </div>
              <div className=" flex gap-6 h-60 w-90 px-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageThree} alt="man" />
              </div>
              <div className=" flex gap-6 6 w-90 wpx-5 py-5 rounded-lg text-center bg-black place-content-around items-center text-center">
                <img src={imageSix} alt="man" />
              </div>
              <div className="flex gap-6 scroll-animation">
                <div
                  className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black
 place-content-around items-center text-center"
                >
                  <img src={imageTwo} alt="man" />
                </div>
                <div
                  className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black
 place-content-around items-center text-center"
                >
                  <img src={imageThree} alt="man" />
                </div>
                <div
                  className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black
 place-content-around items-center text-center"
                >
                  <img src={imageFour} alt="man" />
                </div>
                <div
                  className=" flex gap-6 6 w-90 px-5 py-5 rounded-lg text-center bg-black
 place-content-around items-center text-center"
                >
                  <img src={imageFive} alt="man" />
                </div>
                <div
                  className=" flex gap-6 h-60 w-90 px-5 py-5 rounded-lg text-center bg-black
 place-content-around items-center text-center"
                >
                  <img src={imageThree} alt="man" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
