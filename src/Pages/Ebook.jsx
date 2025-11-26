import Ebook from "../components/Ebook/Ebook";
import Mobile from "../assets/Images/Ebook.png";
import Tree from "../assets/Images/Ebook2.png";
import Book from "../assets/Images/Ebook3.png";
import halfCircle from "../assets/Images/halfCircle.png";

import Cup from "../assets/Images/Ebook4.png";
import EbookS from "../assets/Images/ebooks.png";
import EbookS1 from "../assets/Images/EbookS1.png";

export default function UpskillWayEbooks() {
  // const features = [
  //   {
  //     title: "Diverse Collection",

  //     icon: <BookOpen className="w-6 h-6" />
  //   },
  //   {
  //     title: "Accessible Anywhere",

  //     icon: <Globe className="w-6 h-6 " />
  //   },
  //   {
  //     title: "Designed for Everyone",

  //     icon: <Users className="w-6 h-6" />
  //   },
  //   {
  //     title: "Smart & Eco-Friendly",

  //     icon: <Zap className="w-6 h-6" />
  //   }
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[950px] relative overflow-hidden pt-16 sm:pt-18 md:pt-20 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-b  ">
        <div className="absolute inset-0 bg-[#5B3ED9]  rounded-bl-[100px] rounded-br-[100px]"></div>
        {/* curved bottom edge */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 sm:mt-18 md:mt-20 ">
          <h1 className="w-full sm:w-[600px] md:w-[700px] lg:w-[786px] h-auto sm:h-[180px] md:h-[200px] lg:h-[224px] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 mx-auto lg:ml-60  ">
            Explore Our <span className="text-[#FDB11F]">E-Books</span>
            <br />
            Collection
          </h1>
          <p className="w-full sm:w-[500px] md:w-[600px] lg:w-[662px] h-auto sm:h-[40px] md:h-[46px] text-base sm:text-lg md:text-xl text-purple-100 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto lg:-mt-20">
            "Explore eBooks that inspire learning, spark new ideas, and support
            growth at every stage of your journey."
          </p>

          {/* Hero Illustration */}
          <div className="relative mx-auto w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-visible">
            {/* Floating books (top) */}
            <img
              src={Book}
              alt="floating books"
              className="-mt-30 ml-50  w-[1115px] h-[786px] absolute left-1/2 -translate-x-1/2 top-[-80px] sm:top-[-100px] md:top-[-130px] lg:top-[-170px]  sm:w-[400px] md:w-[600px] lg:w-[1000px] select-none pointer-events-none mb-8 sm:mb-12 md:mb-16 lg:mb-20 z-20"
            />

            {/* Star image near floating books */}
            <img
              src={EbookS}
              alt="star sparkle"
              className="-mr-55 absolute right-[15%] sm:right-[20%] md:right-[25%] lg:right-[30%] top-[-40px] sm:top-[-50px] md:top-[-60px] lg:top-[-80px] w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] select-none pointer-events-none z-30"
            />

            {/* Sun image near floating books */}
            <img
              src={EbookS1}
              alt="sun"
              className="absolute left-[8%] sm:left-[10%] md:left-[15%] lg:left-[20%] top-[-25px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px] w-[35px] sm:w-[45px] md:w-[55px] lg:w-[70px] select-none pointer-events-none z-30"
            />

            {/* Three background half-circles behind the tree */}
            <img
              src={halfCircle}
              alt="background half circle layer 1"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-24px] lg:bottom-[-28px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[980px] opacity-95 select-none pointer-events-none z-0"
            />
            <img
              src={halfCircle}
              alt="background half circle layer 2"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-24px] lg:bottom-[-28px] w-[250px] sm:w-[350px] md:w-[500px] lg:w-[820px] opacity-80 select-none pointer-events-none z-0"
              style={{ filter: "brightness(1.05)" }}
            />
            <img
              src={halfCircle}
              alt="background half circle layer 3"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] sm:bottom-[-20px] md:bottom-[-24px] lg:bottom-[-28px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[660px] opacity-70 select-none pointer-events-none z-0"
              style={{ filter: "brightness(1.1)" }}
            />

            {/* Tree image (foreground) */}
            <img
              src={Tree}
              alt="ebook tree"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-[200px] sm:w-[280px] md:w-[350px] lg:w-[700px] h-[200px] sm:h-[300px] md:h-[380px] lg:h-[480px] select-none pointer-events-none z-10 -mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white -mt-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ">
            <div>
              <h2 className="w-[523px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 mt-5">
                About Our <span className="text-[#FDB11F]">eBooks</span>
              </h2>
              <div className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[420px] h-[6px] sm:h-[8px] md:h-[10px] lg:h-[11px] rounded-[2px] bg-[#FFD700] -mt-8 sm:mb-8 "></div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52]" />
                  <div>
                    <h3 className=" text-[30px] sm:text-lg font-semibold text-gray-900 mb-10">
                      Diverse Collection
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52] ml-4 sm:ml-6 md:ml-8 lg:ml-12" />
                  <div>
                    <h3 className="text-[30px] sm:text-lg font-semibold text-gray-900 mb-10">
                      Accessible Anywhere
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52]" />
                  <div>
                    <h3 className="text-[30px] sm:text-lg font-semibold text-gray-900 mb-10">
                      Designed for Everyone
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52] ml-8 sm:ml-10 md:ml-12 lg:ml-15" />
                  <div>
                    <h3 className="text-[30px]  sm:text-lg font-semibold text-gray-900 mb-10">
                      Smart & Eco-Friendly
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div>
                <img
                  src={Mobile}
                  alt="mobile with book"
                  className="w-[1153px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1154px] h-[650px] relative z-10 mx-auto opacity-100 -ml-60 mt-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white -mt-70">
        <div className=" w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] ">
              {/* Top-right portrait (rounded quarter) */}
          

              {/* Bottom-left portrait (rounded 3/4 circle) */}

                <img
                  src={Cup}
                  alt="thinking student"
                  className="w-[498px] h-[496px] object-cover mt-30 ml-30"
                />
              

              {/* Badge: BEST Author */}
            

              {/* Badge: VIDEO Lessons */}
              
            </div>

            <div>
              <div className="text-xs sm:text-sm text-purple-600 font-semibold mb-2 " >
                Fresh Reads
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Discover Our Latest eBooks – Learn, Grow & Succeed
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Explore our curated collection of eBooks designed to help you
                enhance your skills, discover new concepts, and explore fresh
                ideas. From technology and business to personal growth and
                academics, our digital library has something for every learner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Wide Categories
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Instant Access
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Global Collection
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Eco-Friendly Learning
                  </span>
                </div>
              </div>

              <button 
                onClick={() => {
                  const element = document.getElementById('discover-ebooks');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#5D38DE] to-[#FDB11F] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-lg transition-all duration-300"
              >
                Browse eBooks
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Collection Section */}
      <Ebook />

      {/* Demo Request Section */}
    </div>
  );
}
