import Ebook from "../components/Ebook/Ebook";
import Mobile from "../assets/Images/Ebook.png";
import Tree from "../assets/Images/Ebook2.png";
import Book from "../assets/Images/Ebook3.png";
import halfCircle from "../assets/Images/halfCircle.png";
import Girl from "../assets/Images/Ebook4.png";
import Cup from "../assets/Images/Ebook5.png";
import EbookS from "../assets/Images/ebooks.png";
import EbookS1 from "../assets/Images/ebooks1.png";

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
      <section className="relative overflow-hidden pt-16 sm:pt-18 md:pt-20 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800 rounded-br-[100px] rounded-bl-[100px]">
        <div className="absolute inset-0 bg-[#5B3ED9] rounded-br-[100px] rounded-bl-[100px]"></div>
        {/* curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-white rounded-br-[100px] rounded-bl-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 sm:mt-18 md:mt-20">
          <h1 className="w-full sm:w-[600px] md:w-[700px] lg:w-[786px] h-auto sm:h-[180px] md:h-[200px] lg:h-[224px] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 mx-auto lg:ml-40">
            Explore Our <span className="text-[#FDB11F]">eBooks</span>
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                About Our <span className="text-[#FDB11F]">eBooks</span>
              </h2>
              <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[310px] h-[6px] sm:h-[8px] md:h-[10px] lg:h-[11px] rounded-[2px] bg-[#FFD700] mb-6 sm:mb-8"></div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52]" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Diverse Collection
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52] ml-4 sm:ml-6 md:ml-8 lg:ml-12" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Accessible Anywhere
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52]" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Designed for Everyone
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <span className="mt-2 inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#A280FF52] ml-8 sm:ml-10 md:ml-12 lg:ml-15" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
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
                  className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1154px] h-auto relative z-10 mx-auto opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[540px]">
              {/* Top-right portrait (rounded quarter) */}
              <div className="absolute right-0 top-0 w-[200px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-gray-200 rounded-[100px_0px_100px_100px] sm:rounded-[150px_0px_150px_150px] md:rounded-[180px_0px_180px_180px] lg:rounded-[200px_0px_200px_200px]">
                <img
                  src={Girl}
                  alt="girl with books"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-left portrait (rounded 3/4 circle) */}
              <div className="absolute left-0 bottom-0 w-[200px] sm:w-[280px] md:w-[320px] lg:w-[380px] h-[200px] sm:h-[280px] md:w-[320px] lg:h-[380px] overflow-hidden bg-gray-200 rounded-[120px_120px_120px_0px] sm:rounded-[160px_160px_160px_0px] md:rounded-[180px_180px_180px_0px] lg:rounded-[220px_220px_220px_0px]">
                <img
                  src={Cup}
                  alt="thinking student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge: BEST Author */}
              <div className="absolute left-[-5px] sm:left-[-8px] md:left-[-10px] top-[60px] sm:top-[80px] md:top-[100px] lg:top-[110px] bg-white/90 backdrop-blur rounded-[20px] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] border border-gray-200 shadow-sm px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-4 flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-purple-100 text-purple-600 text-xs sm:text-sm">
                  •
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">
                    BEST
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 -mt-1">
                    Author
                  </div>
                </div>
              </div>

              {/* Badge: VIDEO Lessons */}
              <div className="absolute right-[-5px] sm:right-[-8px] md:right-[-10px] bottom-[20px] sm:bottom-[30px] md:bottom-[35px] lg:bottom-[40px] bg-white/90 backdrop-blur rounded-[20px] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] border border-gray-200 shadow-sm px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-4 flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-purple-100 text-purple-600 text-xs sm:text-sm">
                  ▶
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">
                    VIDEO
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 -mt-1">
                    Lessons
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm text-purple-600 font-semibold mb-2">
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
