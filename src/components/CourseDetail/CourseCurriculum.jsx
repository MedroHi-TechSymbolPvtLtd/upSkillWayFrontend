import React, { useState } from "react";
import { ChevronRight, Lock } from "lucide-react";

export default function CourseCurriculum({ course }) {
  const [activeModule, setActiveModule] = useState(0);

  // Use API curriculum data or fallback to default
  const curriculum = course?.curriculum || [
    {
      moduleTitle: "Software Development Fundamentals",
      topics: [
        "Introduction to the Software Development Industry",
        "Understanding Computer Programming Languages",
        "Algorithms in our daily lives and Pseudocode",
        "The Software Development Lifecycle (SDLC)"
      ]
    },
    {
      moduleTitle: "Command-Line Operations",
      topics: [
        "Introduction to Command Line",
        "Basic Commands",
        "File Operations",
        "Advanced CLI Usage"
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-20 lg:-mt-30">
      {/* ================= TITLE ================= */}
      <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] mb-8">
        Course <span className="text-[#FDB11F]">Curriculum</span>
      </h2>

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* ========== LEFT MODULE PANEL ========== */}
        <div className="bg-white">
          {curriculum.map((module, index) => (
            <div
              key={index}
              onClick={() => setActiveModule(index)}
              className={`relative pl-8 pr-6 py-6 border-b cursor-pointer transition ${
                activeModule === index ? "bg-white" : "bg-white"
              }`}
            >
              {/* Active vertical line */}
              {activeModule === index && (
                <span className="absolute left-0 top-0 h-full w-[2px] bg-black" />
              )}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Module {index + 1}
                  </p>
                  <p
                    className={`text-sm ${
                      activeModule === index
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {module.moduleTitle}
                  </p>
                </div>

                <ChevronRight className="text-gray-400 text-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* ========== RIGHT LECTURE PANEL ========== */}
        <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg overflow-hidden">
          {curriculum[activeModule]?.topics?.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-6 py-5 border-b last:border-b-0"
            >
              <p className="text-sm text-gray-700">
                Lecture {index + 1}: {topic}
              </p>

              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Lock className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DOWNLOAD BUTTON ================= */}
      <div className="flex justify-center mt-16">
        <button className="bg-[#FCB11F] hover:bg-orange-500 transition text-white px-10 py-3 rounded-tl-4xl rounded-tr-sm rounded-bl-sm rounded-br-4xl font-medium shadow-lg">
          Download Curriculum
        </button>
      </div>
    </section>
  );
}
