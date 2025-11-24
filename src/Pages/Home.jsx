import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Lottie from 'lottie-react';
import walk from '../assets/Images/animation (3).json';
import Cards from "../components/home/Cards";
import RedFluid from "../components/home/RedFluid";
import InfinityAnimation from "../components/Animation/Infinity";
import Course from "../components/home/Course";
import Refer from "../components/home/Refer";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/Hero";
import Schedule from "../components/home/Schedule";
import Credibility from "../components/home/Credibility";
import Enterprises from "../components/home/Enterprises";
import Certified from "../components/home/Certificate";
import Stats from "../components/home/Stats";
import Process from "../assets/Images/process.mp4";


export default function TrustSection() {
 

 

 


  // Add Google Font link dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Oregano:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);






  return (
    <div
      className="min-h-screen relative overflow-hidden bg-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Navigation */}
      

      {/* Hero Section */}
      <Hero/>
  
      
      <Cards/>
      <Stats/>

     

  

     

      <Course/>


      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </section>

      {/* The Process We Follow Section */}
      <section className="-mt-45 py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full">
          {/* Title container */}
          <div className="text-center max-w-5xl mx-auto px-4 sm:ml-[100px] md:ml-[200px] lg:ml-[255px] ">
            <h2
              className="text-gray-900 mb-4"
              style={{
                fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3.875rem)",
                lineHeight: "clamp(2.5rem, 6vw, 4.625rem)",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              The <span className="text-[#FBB11F] font-['Oregano'] text-[96px] text-center">Process</span> We Follow
            </h2>
          </div>
          <div>
            <video 
            src={Process} alt="video" style={{width: '100%', height: '100%', objectFit: 'cover'}}
            autoPlay
                    loop
                    muted
                    playsInline
                  />
          </div>
        </div>
      </section>

 
      {/* The Process We Follow Section */}
      <Credibility/>

      {/* Testimonials Section */}

      <Certified />

      {/* Vired For Business Enterprise Section */}
    

    

        {/* Discover Certification Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white text-black -mt-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium mb-6 -mt-1 ">
                certifications
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight -mt-5">
                discover
                <br />
                <span className="text-amber-500">certification</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 -mt-5 w-[761px] h-[69px]">
                Turn your interest into expertise with our industry-recognized certification courses. 
                Whether you're a beginner or a working professional, these programs are designed to help 
                you build job-ready skills and get certified by trusted institutions.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What you'll gain:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-2 ml-10">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        
                      </svg>
                    </div>
                    <span className="text-gray-700" >Globally recognized certificates from Upskillway & partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center flex-shrink-0 ml-10">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        
                      </svg>
                    </div>
                    <span className="text-gray-700 -mt-2">Hands-on training with real-world projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center flex-shrink-0  ml-10">
                      <svg className="w-03 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      </svg>
                    </div>
                    <span className="text-gray-700 -mt-2">Expert mentorship to guide your learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-black flex items-center justify-center flex-shrink-0  ml-10">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        
                      </svg>
                    </div>
                    <span className="text-gray-700 -mt-2">Career-focused skills that employers value</span>
                  </li>
                </ul>
              </div>

              <button className=" border-1 p-1 rounded-3xl flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all group">
                <span className=" ml-4">Explore certificate programs</span>
                <div className="ml-20 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button> 
            </div>
            <div className="relative ml-0 sm:ml-10 md:ml-20 lg:ml-70">
              <Lottie 
        animationData={walk}
        loop={true}
        autoplay={true}
        className="w-[364px] h-[557px]"
      />
            </div>
          </div>
        </div>
      </section>
   
      <Testimonials className="-mt-100"/>

      {/* Certificate Programs Section */}
      

      <Enterprises/>
    

      {/* FAQ Section */}
  
      <FAQ />

      {/* Why Learners Trust Upskillway Section */}
     

      {/* Refer & Earn Section */}
      
      <Refer/>
      

      {/* Schedule Demo Section */}
    
      <Schedule/>

      {/* Yellow Line Separator - Bottom */}
      <div className="w-full flex justify-center  ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-0.5 bg-yellow-400 w-full -"></div>
        </div>
      </div>

      

      
    </div>
  );
}
