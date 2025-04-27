import { getConfigData } from "../data/configReader";

export default function Experience() {
  const configData = getConfigData();

  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Experience
        </h1>
      </div>

      <div className="px-7 mb-5">
        {configData.experience.map((exp, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:scale-105 transition-all md:items-center md:justify-between gap-y-4 mb-5"
          >
            <div className="flex items-center gap-x-4">
              {exp["org-logo"] ? (
                <img
                  src={exp["org-logo"]}
                  alt={exp["org-name"]}
                  className="w-16 h-16 object-contain rounded-full border border-gray-500"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-md text-gray-600">
                  No Logo
                </div>
              )}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{exp["org-name"]}</h2>
                <p className="text-md font-medium text-gray-600">{exp["type"]} - {exp["position"]}</p>
                <p className="text-xs text-gray-500">{exp["duration"]} : {exp["year"]}</p>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 md:max-w-2xl">
              <p className="text-gray-500 text-justify mt-2">{exp["desc"]}</p>
              
              {exp["certificate-link"] && (
                <a
                  href={exp["certificate-link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium  hover:text-gray-200"
                >
                  <button className="bg-black p-3 w-full rounded-full hover:bg-gray-700">View Certificate</button>
                  
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
