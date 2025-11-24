import {
  Crown,
  Award,
  MessageCircle,
  Zap,
  FileText,
  Lightbulb,
  Hash,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import image from "../assets/Images/Abstract Design.png";


const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* About Upskillway Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-7">
          <div
            className="text-left mb-12 sm:mb-16"
            style={{
              position: "relative",
              opacity: 1,
            }}
          >
            <h1
              className="font-bold text-gray-900 mb-6 sm:mb-8"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              About{" "}
              <span
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "55px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  color: "#FF9500",
                }}
              >
                UpSkillWay
              </span>
            </h1>
            <div className="space-y-4 mt-[-30px] sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                At Upskillway, we are passionate about helping individuals
                master in-demand digital skills and build future-ready careers.
                We provide industry-recognized online courses in Artificial
                Intelligence, Data Analytics, Cloud Computing, Generative AI,
                and DevOps, designed to equip learners with the technical
                expertise and problem-solving mindset needed to excel in today’s
                evolving world of technology and innovation. Our mission is to
                bridge the gap between education and employability through
                practical, project-based learning experiences guided by industry
                experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-07">
          <div
            className="text-left mb-12 sm:mb-16"
            style={{
              position: "relative",
            }}
          >
            <h2
              className="font-bold text-gray-900 mb-6 sm:mb-8"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "150%",
                letterSpacing: "0%",
                marginTop: "-180px"
              }}
            >
              Achievements
            </h2>
            <p className="text-base w-max sm:text-lg md:text-xl text-gray-600  leading-relaxed">
              Our commitment to excellence has led us to achieve significant
              milestones along our journey. Here are some of our notable
              achievements.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            style={{ gap: "30px" }}
          >
            {/* Card 1: Trusted by Thousands */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Crown className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Trusted by Thousands
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We have proudly trained and mentored thousands of learners worldwide, empowering them to achieve career growth and confidence in their chosen fields.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Award-Winning Courses */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Award className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Award-Winning Courses
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                 Our curated courses have earned recognition for their quality, depth, and real-world application, setting a benchmark in online learning excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Positive Student Feedback */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Positive Student Feedback
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                  Students appreciate our hands-on approach and interactive learning style that focuses on practical application rather than theory.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Industry Partnerships */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Industry Partnerships
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                   We collaborate with leading companies and professionals to ensure our learners gain access to the latest tools, technologies, and trends shaping the digital ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-7">
          <div
            className="text-left mb-12 sm:mb-16"
            style={{
              position: "relative",
            }}
          >
            <h2
              className="font-bold text-gray-900 mb-6 sm:mb-8"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 700,
                fontSize: "55px",
                lineHeight: "150%",
                letterSpacing: "0%",
                marginTop:"-120px"
              }}
            >
              Our Goals
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl leading-relaxed">
              At Upskillway, our goal is to empower learners from all backgrounds to thrive in the world of digital innovation. We believe education should be accessible, practical, and transformative — helping individuals unlock their true potential.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            style={{ gap: "30px" }}
          >
            {/* Card 1: Provide Practical Skills */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <FileText className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Provide Practical Skills
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                  We deliver skills aligned with industry demands through hands-on projects, case studies, and interactive assignments.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Foster Creative Problem-Solving */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Foster Creative Problem-Solving
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We encourage innovation and out-of-the-box thinking to help learners confidently tackle real-world challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Promote Collaboration and Community */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <Hash className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Promote Collaboration and Community
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                  Our vibrant learning community enables peer collaboration, shared insights, and continuous growth through networking and mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Stay Ahead of the Curve */}
            <div
              style={{
                width: "580px",
                height: "280px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "50px",
                boxShadow: "0px 2px 50px 0px #0000001A",
                opacity: 1,
              }}
            >
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Stay Ahead of the Curve
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                   With constant advancements in technology, we continuously update our courses to ensure learners stay current with the latest knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-7">
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div
              className="flex-1 mb-8 lg:mb-0"
              style={{
                position: "relative",
              }}
            >
              <h2
                className="font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "55px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                  marginTop:"-90px"
                }}
              >
                <span style={{ color: "#FF9500" }}>Together</span>, let's shape
                the future of{" "}
                <span style={{ display: "block" }}>digital innovation</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
                Join us in redefining learning for the digital era. Start your
                journey with Upskillway and unlock your potential through
                hands-on learning, expert mentorship, and real-world experience.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <button className="bg-[#FF9500] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-[8px] font-semibold text-base sm:text-lg md:text-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Join now
                  </button>
                </Link>
              </div>
            </div>

            {/* Abstract Design Image */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-30 lg:opacity-100 z-0 hidden lg:block">
              <img
                src={image}
                alt="Abstract Design"
                className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl"
                style={{
                  filter: "brightness(0.95)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
