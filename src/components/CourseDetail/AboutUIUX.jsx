import React from "react";
import aboutImg from "../../assets/Images/schedule.png"; // ⬅️ put your UI/UX image here

export default function AboutUIUX({ course }) {
  return (
    <section className="w-full  bg-white py-16 md:py-32 px-4 md:px-20 lg:-mt-[50px]">
         {/* Heading */}
          <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] mb-6 leading-tight ">
            About <span className="text-orange-400">{course?.title || 'UI UX Design'}</span> Course
          </h2>
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
         

          {/* Description */}
          <p className="text-black max-w-xl mb-10">
            {course?.description || 'Accelerate your journey in UI/UX Design by learning design theory, tools, and prototyping. Gain hands-on experience that can help you deliver engaging digital experiences and thrive in this creative field.'}
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">

            {/* Item 1 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Live Interactive Sessions
                </p>
                <p className="text-sm text-gray-500">
                  Learn directly from industry mentors in live classes.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Project Portfolio
                </p>
                <p className="text-sm text-gray-500">
                  Start creating a job-ready portfolio with real-world projects.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Career Assistance
                </p>
                <p className="text-sm text-gray-500">
                  Prepare for interviews with guidance and opportunities.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Dedicated Peer Network
                </p>
                <p className="text-sm text-gray-500">
                  Connect with like-minded learners to exchange ideas.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Learn Creative Skills
                </p>
                <p className="text-sm text-gray-500">
                  Master user research, prototyping, and design tools.
                </p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="flex gap-3">
              <span className="text-green-500 mt-1">✅</span>
              <div>
                <p className="font-semibold text-[#3D3D3D]">
                  Certification
                </p>
                <p className="text-sm text-gray-500">
                  Earn a certificate to showcase your capabilities.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="lg:w-[526px] lg:h-[372px]  lg:ml-30 flex justify-center md:justify-end">
          <img
            src={course?.aboutSectionImageUrl || aboutImg}
            alt={course?.title || 'UI UX Design'}
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
            onError={(e) => { e.target.src = aboutImg; }}
          />
        </div>

      </div>
    </section>
  );
}
