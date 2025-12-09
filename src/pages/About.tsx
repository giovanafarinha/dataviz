import drawteamwork from "../assets/undraw_teamwork.svg";
export default function About() {
  return (
    <>
      <div className=" sepia-70 bg-indigo-300 px-25 py-15 rounded-xl mt-15 m-15 flex flex-col shadow-xl">
        <h1 className="font-semibold text-5xl">À propos </h1>{" "}
        <img className=" flex ml-95 w-90 mb-5 mt-5" src={drawteamwork} />{" "}
        <div className="">
          <h1 className="font-semibold text-3xl ">Notre histoire</h1>
          <p className="mb-15">
            {" "}
            Notre projet est né d’un défi académique : créer une application
            capable de récupérer, manipuler et présenter des données provenant
            d’une API externe. Avec React.js et TypeScript comme technologies
            principales, nous avons construit une plateforme moderne et robuste,
            tout en mettant l’accent sur la qualité du code et la
            maintenabilité. Ce parcours nous a permis d’explorer de nouveaux
            outils, de perfectionner nos compétences en développement front-end
            et de transformer des données brutes en visualisations claires et
            accessibles. Chaque étape du processus a renforcé notre volonté de
            créer une application intuitive, fiable et agréable à utiliser.
          </p>{" "}
        </div>
        <div className="">
          <h1 className="font-semibold text-3xl "> Notre mission</h1>
          <p>
            {" "}
            Notre mission est de rendre les données compréhensibles et
            accessibles à tous. À travers des graphiques interactifs, nous
            souhaitons offrir une manière simple et efficace d’analyser
            l’information, en mettant l’accent sur la fluidité, la lisibilité et
            l’expérience utilisateur. Nous cherchons à démontrer la puissance
            des technologies modernes comme React et TypeScript, pour créer des
            interfaces qui facilitent la compréhension, encouragent
            l’exploration et transforment l’information en insights utiles.
            Cette mission guide chacune de nos décisions, du design de
            l’interface à la logique de manipulation des données.
          </p>
        </div>
      </div>
    </>
  );
}
