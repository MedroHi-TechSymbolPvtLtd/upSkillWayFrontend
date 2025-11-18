import { useState, useEffect } from "react";
import { Star, ChevronRight } from "lucide-react";

const CertifiedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/api/v1/cms/certified-courses"
      );
      const data = await response.json();

      if (data.success) {
        setCourses(data.data);
        setPagination(data.pagination);
      } else {
        setError("Failed to fetch courses");
      }
    } catch (err) {
      setError("Error fetching courses: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fallback data for demonstration when API returns empty array
  const fallbackCourses = [
    {
      id: 1,
      title: "The Complete Graphic Design for Beginners",
      category: "Design",
      categoryColor: "red",
      level: "Beginner",
      type: "Crash Course",
      price: "₹999.00",
      originalPrice: "₹1999.00",
      instructor: "Wilson",
      rating: 4.5,
      reviews: "4.5 Reviews",
      image: "https://placehold.co/300x200/mint/white",
      badge: "AI",
    },
    {
      id: 2,
      title: "Learning JavaScript With Imagination",
      category: "Development",
      categoryColor: "purple",
      level: "Pro Expert",
      type: null,
      price: "₹0",
      originalPrice: null,
      instructor: "Warren",
      rating: 4.8,
      reviews: "4.8 Reviews",
      image: "https://placehold.co/300x200/purple/white",
      badge: "JS",
    },
    {
      id: 3,
      title: "Financial Analyst Training & Investing Course",
      category: "Business",
      categoryColor: "blue",
      level: "Financial",
      type: "Crash Course",
      price: "₹499.00",
      originalPrice: "₹999.00",
      instructor: "Robert Fox",
      rating: 4.2,
      reviews: "4.2 Reviews",
      image: "https://placehold.co/300x200/blue/white",
      badge: "$",
    },
    {
      id: 4,
      title: "Advanced React Development",
      category: "Development",
      categoryColor: "green",
      level: "Advanced",
      type: "Full Course",
      price: "₹1499.00",
      originalPrice: "₹2999.00",
      instructor: "Sarah Johnson",
      rating: 4.7,
      reviews: "4.7 Reviews",
      image: "https://placehold.co/300x200/green/white",
      badge: "React",
    },
  ];

  const displayCourses = courses.length > 0 ? courses : fallbackCourses;

  const getCategoryColors = (categoryColor) => {
    const colors = {
      red: { bg: "bg-red-100", text: "text-red-600", badge: "bg-red-500" },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        badge: "bg-purple-500",
      },
      blue: { bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-500" },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        badge: "bg-green-500",
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        badge: "bg-orange-500",
      },
    };
    return colors[categoryColor] || colors.red;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-current text-amber-500"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-16 bg-white mt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white mt-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
            <button
              onClick={fetchCourses}
              className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white mt-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-full ">
            Certificate
            <span className="mr-2 w-3 h-3 bg-red-500 rounded-full ml-2"></span>
            Programs
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-[55px] font-medium    text-[#000000] mb-4">
            Every <span className="text-amber-500">Big Journey</span> Starts
            with a Small Step <span className=" text-amber-500"></span>
          </h2>
          <p className="w-[989px]  h-[36px] text-[#7F7E97] text-[32px]  ml-30">
            Not sure which program to choose? Take our Free Masterclass
          </p>
        </div>

        {/* Three Action Cards */}
        <div className="flex justify-center items-center gap-6 my-12 ">
          {/* Card 1 - Explore different fields */}
          <div className="bg-white rounded-2xl  hover:shadow-lg transition-all duration-300 px-8 py-6 flex items-center gap-4 min-w-[280px] shadow-[0_0_150px_rgba(0,0,0,0.1)]">
            <div className="flex-shrink-0">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L4 10L16 16L28 10L16 4Z"
                  fill="#1F2937"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 16L16 22L28 16"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 22L16 28L28 22"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-lg">
              Explore different fields
            </span>
          </div>

          {/* Card 2 - Test your skills & interests */}
          <div className="bg-white rounded-2xl shadow-[0_0_150px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 px-8 py-6 flex items-center gap-4 min-w-[280px]">
            <div className="flex-shrink-0">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="#1F2937"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M16 8V16L20 20"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="16" cy="16" r="2" fill="#1F2937" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-lg">
              Test your skills & interests
            </span>
          </div>

          {/* Card 3 - Get a certificate of participation */}
          <div className="bg-white rounded-2xl shadow-[0_0_150px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 px-8 py-6 flex items-center gap-4 min-w-[280px]">
            <div className="flex-shrink-0">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="6"
                  width="24"
                  height="18"
                  rx="2"
                  stroke="#1F2937"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M4 12H28" stroke="#1F2937" strokeWidth="2" />
                <path
                  d="M10 18H14"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="22" cy="18" r="2" fill="#1F2937" />
              </svg>
            </div>
            <span className="text-gray-900 font-medium text-lg">
              Get a certificate of participation
            </span>
          </div>
        </div>

        {/* Course Cards Section */}
        <section className="w-full py-10 bg-white">
          <div className="w-full ">
            {displayCourses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No certified courses available at the moment.
                </p>
                <button
                  onClick={fetchCourses}
                  className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
                >
                  Refresh
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayCourses.map((course) => {
                  const colors = getCategoryColors(course.categoryColor);

                  return (
                    <div
                      key={course.id}
                      className="w-[330px] h-[455px] flex flex-col bg-white border border-gray-100 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition"
                    >
                      <div className="relative w-[278px] h-[190px] mx-auto mt-5">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                        />
                      </div>

                      

                      <div className="p-5 flex flex-col gap-4 flex-1">
                        
                        <div className="flex items-center justify-between text-xs  bg- text-gray-500">

                          
                            {course.category && (
                              <span className="px-3 py-1 bg-[#FDB11F] text-black rounded-full">
                                {course.category}
                              </span>
                            )}
                            <div className="flex items-center gap-2">
                            <span className="text-black line-through text-[10px] text-xl">
                              {course.originalPrice}
                              </span>
                              <span className="text-[#FF302F] text-xl">
                                {course.price}
                              </span>
                            </div>
                          
                        </div>
                        

                        <h3 className="font-semibold text-lg text-gray-900 leading-snug line-clamp-2">
                          {course.title}
                        </h3>

                        <div className="flex items-center justify-between text-xs  bg- text-gray-500">

                          
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                            {course.instructor ? course.instructor.charAt(0) : "I"}
                          </div>
                          <span>{course.instructor}</span>
                        </div>

                          <div className="flex items-center gap-1 text-amber-500">
                            {renderStars(course.rating)}
                          </div>
                          <span className="text-gray-500">{course.reviews}</span>
                        </div>

                        

                        <button className="mt-auto w-[103px] py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition mx-auto">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-12 text-center">
              <a
                href="#"
                className=" bg-[#FDB11F] w-[265px]  h-[50px] rounded-4xl  inline-flex items-center text-gray-900 font-semibold hover:text-amber-500 transition-colors"
              >
               <span className="ml-3">View All Certificate Programs</span> 
                <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>

          
          </div>
        </section>
      </div>
    </section>
  );
};

export default CertifiedCourses;
