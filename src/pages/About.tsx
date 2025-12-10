import drawteamwork from "../assets/undraw_teamwork.svg";
export default function About() {
  return (
    <>
      <div className=" sepia-70 bg-indigo-300 px-25 py-15 rounded-xl mt-15 m-15 flex flex-col shadow-xl">
        <h1 className="font-semibold text-5xl">About </h1>{" "}
        <img className=" flex ml-95 w-90 mb-5 mt-5" src={drawteamwork} alt="coworkers on cumputers"/>
        <div className="">
          <h1 className="font-semibold text-3xl ">Our background</h1>
          <p className="mb-15">
            Our project was born from an academic challenge: create an application
            capable of retrieving, manipulating and presenting data from
            of an external API. With React and TypeScript as main technologies
            we have built a modern and robust platform,
            while emphasizing the quality of the code and the
            maintainability. This journey allowed us to explore new
            tools, to perfect our skills in front-end development
            and to transform raw data into clear and
            accessible visualisations. Each step of the process has strengthened our willingness to
            create an intuitive, reliable and pleasant to use application.
          </p>
        </div>
        <div className="">
          <h1 className="font-semibold text-3xl "> Our mission</h1>
          <p>
            Our mission is to make the data understandable and
            accessible to all. Through interactive graphics, we
            wish to offer a simple and effective way of analyzing
            the information, with emphasis on fluidity, readability and
            the user experience. We seek to demonstrate the power of 
            modern technologies like React and TypeScript, to create
            interfaces that facilitate understanding, encourage
            the exploration and transform information into useful insights.
            This mission guides each of our decisions, from the design of
            the interface to the data manipulation logic.
          </p>
        </div>
      </div>
    </>
  );
}
