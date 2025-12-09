import React from "react";

export default function DataScientistRole({ course }) {
  // Use API career roles or fallback to default
  const roles = course?.careerRoles || Array(6).fill({
    title: "Data Scientist",
    description: "design and implement applications using ai and ml algorithms",
  });

  return (
    <section className="w-full bg-white py-20 px-4 md:px-20 lg:-mt-20">
      
      {/* ================= HEADING ================= */}
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] mb-14 lg:ml-20">
        What <span className="text-[#FDB11F]">role</span> does a Data Scientist play?
      </h2>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {roles.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-300 px-6 py-6 shadow-sm relative bg-white"
          >
            {/* Bottom accent line */}

            <h3 className="text-lg font-semibold text-[#3D3D3D] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description || item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
