import React from "react";

const Master = ({ course }) => {
  // Get mastered tools from course prop
  const masteredTools = course?.masteredTools || [];

  // Fallback tools if none provided
  const defaultTools = [
    {
      name: "Python",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "JavaScript",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Node.js",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "MongoDB",
      logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    }
  ];

  const tools = masteredTools.length > 0 ? masteredTools : defaultTools;

  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16 lg:-ml-[905px] lg:-mt-30">
           <span className="text-[#FBB11F]">Master </span>These Tools
        </h2>
        
        <div className="w-full relative overflow-hidden">
          <style>
            {`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          
          <div className="flex animate-scroll">
            {/* Render tools multiple times for infinite scroll effect */}
            {[...Array(4)].map((_, setIndex) => (
              <div 
                key={`set-${setIndex}`} 
                className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 px-4 sm:px-6 md:px-8"
              >
                {tools.map((tool, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] lg:min-w-[200px] hover:scale-110 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center  rounded-2xl  group-hover:  p-4">
                      <img
                        src={tool.logoUrl}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          // Show fallback text
                          const parent = e.target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-2xl font-bold text-gray-400">${tool.name.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 whitespace-nowrap text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Display as grid on smaller screens */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:hidden">
          {tools.slice(0, 10).map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={tool.logoUrl}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Master;
