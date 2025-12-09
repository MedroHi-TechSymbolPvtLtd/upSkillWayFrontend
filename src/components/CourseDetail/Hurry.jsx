import React from "react";
import { useNavigate } from "react-router-dom";
import HurryImg from "../../assets/Images/Hurry.png";

function Hurry() {
  const navigate = useNavigate();
  return (
    <>
      <style>
        {`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
            transform-origin: center;
          }
        `}
      </style>
      <section className="w-full  py-16 px-4 md:px-20 relative overflow-hidden lg:-mt-[30px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl   font-oregano font-normal text-[75px] leading-[74px] tracking-[0%]">
              <span className="text-[#FCB11F] text-[85px]">Hurry</span>{" "}
              <span className="text-gray-900">up!</span>
            </h2>
            
            <p className=" md:text-3xl font-oregano font-normal text-[65px] text-[rgba(0,0,0,0.6)] leading-[74px] tracking-[0%]">
              Grab your FREE Trial Class
            </p>
            
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#6C5CE7] hover:bg-[#5B4BC7] text-white px-8 py-2 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register now
            </button>
          </div>

          <div className="relative flex justify-center items-center">
   

        

        

         

            <div className="absolute top-1/2 right-20 w-4 h-4  rounded-sm transform rotate-45"></div>

            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 400 400" style={{ animationDuration: '20s' }}>
                <defs>
                  <path
                    id="circlePath"
                    d="M 200, 200 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                  />
                </defs>
                <text className="text-[20px] font-bold fill-[#FCB11F]" letterSpacing="6">
                  <textPath href="#circlePath" startOffset="0%">
                    ⭐ You write the vision and we will make it plain  vision creation ⭐
                  </textPath>
                </text>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={HurryImg}
                  alt="Student with books"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hurry;
