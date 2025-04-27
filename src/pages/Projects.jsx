import { getConfigData } from "../data/configReader";

export default function Home() {
  const configData = getConfigData();

  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Projects
        </h1>
      </div>

      <div className="px-7 mb-5">
        {configData.projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:scale-105 transition-all md:items-center md:justify-between gap-y-4 mb-5"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-xl font-semibold">
                  {project["project-name"]}
                </h2>
                <p className="text-gray-500 text-justify">
                  {project["project-desc"]}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {project["git-repo"] && (
                    <a
                      href={project["git-repo"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      <button className="flex items-center justify-center gap-2 bg-black py-2 px-4 rounded-full hover:bg-gray-900 transition-all text-white text-sm font-semibold shadow-md hover:shadow-lg border-2 border-transparent hover:border-blue-500 duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 18l6-6m0 0l-6-6m6 6H2"
                          />
                        </svg>
                        View Code
                      </button>
                    </a>
                  )}

                  {project["demo"] && (
                    <a
                      href={project["demo"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      <button className="flex items-center justify-center gap-2 bg-black py-2 px-4 rounded-full hover:bg-gray-900 transition-all text-white text-sm font-semibold shadow-md hover:shadow-lg border-2 border-transparent hover:border-blue-500 duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        Live Demo
                      </button>
                    </a>
                  )}
                </div>
              </div>
              <div className="w-20 h-20 pl-5">
                {project["img-src"] ? (
                  <img
                    src={project["img-src"]}
                    alt="Project Logo"
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-20 h-20 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full">
                    No Logo
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
