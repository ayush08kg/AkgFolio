import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="px-7 py-7 flex flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            It's me {configData.name}
          </h1>
          <p className="text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
            {configData.aboutDesc}
          </p>
          <img
            className="border rounded-xl p-3 cursor-pointer shadow-md hover:scale-105 transition-all"
            src="src/assets/akg-bg.png"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center text-gray-600 ">
        Skills
      </h1>
      <div className="skills-container flex gap-4 flex-wrap justify-center py-8">
        {configData.skills[0] &&
          Object.entries(configData.skills[0]).map(([skill, imgSrc], index) => (
            <div
              key={index}
              className="skill-item relative group w-16 h-16 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden shadow-md transition-all duration-300 hover:scale-110"
            >
              <img
                src={imgSrc}
                alt={skill}
                className="w-full h-full cursor-pointer object-cover"
              />
              <span className="absolute cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md p-1">
                {skill}
              </span>
            </div>
          ))}
      </div>
    </>
  );
}
