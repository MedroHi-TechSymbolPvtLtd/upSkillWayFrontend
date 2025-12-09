import React from "react";

// ✅ Images
import project1 from "../../assets/Images/project1.png";
import project2 from "../../assets/Images/project2.png";
import project3 from "../../assets/Images/project3.png";

export default function BuildProjects({ course }) {
  // Use API data or fallback to default
  const projects = course?.projects || [
    {
      title: "AI-powered code Generator",
      description: "Build an AI-powered code generation tool",
      imageUrl: project1
    },
    {
      title: "Hotel booking application",
      description: "Create a complete hotel booking system",
      imageUrl: project2
    },
    {
      title: "AI-powered object detection application",
      description: "Develop an AI object detection system",
      imageUrl: project3
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-20">
      
      {/* ================= HEADING ================= */}
      <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] mb-14 lg:-mt-10">
        Build <span className="text-orange-400">projects</span> from scratch
      </h2>

      {/* ================= MAIN GRID CONTAINER ================= */}
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">

        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="items-start">
              <div className={`w-15 h-15 rounded-full flex items-center justify-center text-lg font-medium border ${
                index === 1 ? 'bg-[#FCB11F] text-white' : 'bg-white text-gray-600 border-gray-300'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className={`text-[30px] leading-snug pt-1 ${
                index === 1 ? 'text-black font-medium' : 'text-gray-600'
              }`}>
                {project.title}
              </p>
              {project.description && (
                <p className="text-sm text-gray-500 mt-2">{project.description}</p>
              )}
            </div>

            <img
              src={project.imageUrl || project1}
              alt={project.title}
              className="w-full md:w-[420px] md:h-[200px] rounded-2xl shadow-md justify-self-end object-cover"
              onError={(e) => { e.target.src = project1; }}
            />
          </React.Fragment>
        ))}

      </div>
    </section>
  );
}
