import { useState, useEffect } from 'react';
import { BookOpen, Star } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";




// Mock data to simulate API response (remove this when you have real API)

const mockCourses = [
    {
      id: 1,
      title: "Data Science with Specialization",
      description: "Master data science fundamentals with hands-on projects",
      price: 299,
      rating: 4.8,
      reviews: 6,
      duration: "8 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-01-15T00:00:00Z",
      tags: ["Popular"],
      videoDemoUrl: "#"
    },
    {
      id: 2,
      title: "Multi Cloud Architecture",
      description: "Learn cloud architecture across multiple platforms",
      price: 399,
      rating: 4.8,
      reviews: 6,
      duration: "6 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-01-20T00:00:00Z",
      tags: ["Developer"],
      videoDemoUrl: "#"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete web development from frontend to backend",
      price: 349,
      rating: 4.8,
      reviews: 6,
      duration: "10 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-02-01T00:00:00Z",
      tags: ["Developer"],
      videoDemoUrl: "#"
    },
    {
      id: 4,
      title: "UI/UX Design Mastery",
      description: "Design beautiful and functional user interfaces",
      price: 249,
      rating: 4.8,
      reviews: 6,
      duration: "5 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-01-25T00:00:00Z",
      tags: ["Designer"],
      videoDemoUrl: "#"
    },
    {
      id: 5,
      title: "Digital Marketing Pro",
      description: "Master digital marketing strategies and tools",
      price: 199,
      rating: 4.8,
      reviews: 6,
      duration: "4 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-02-10T00:00:00Z",
      tags: ["Marketing"],
      videoDemoUrl: "#"
    },
    {
      id: 6,
      title: "Project Management",
      description: "Lead projects successfully with proven methodologies",
      price: 279,
      rating: 4.8,
      reviews: 6,
      duration: "6 Months",
      thumbnailUrl: null,
      status: "Active",
      createdAt: "2024-01-30T00:00:00Z",
      tags: ["Project Manager"],
      videoDemoUrl: "#"
    }
];

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from API first
        const response = await fetch("http://localhost:3000/api/v1/cms/courses");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success && data.data && Array.isArray(data.data)) {
          // Process API data and add missing fields with defaults
          const processedCourses = data.data.map(course => ({
            ...course,
            rating: course.rating || 4.8,
            reviews: course.reviews || 6,
            duration: course.duration || "8 Months"
          }));
          setCourses(processedCourses);
        } else {
          throw new Error("Invalid API response format");
        }
        
      } catch (err) {
        console.error("API fetch failed:", err);
        // Fallback to mock data if API fails
        console.log("Using mock data as fallback");
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  const handleRetry = () => {
    setError(null);
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setCourses(mockCourses);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Error fetching courses: " + err.message);
        setLoading(false);
      }
    };
    fetchCourses();
  };

  // Create course illustration component
  const CourseIllustration = ({ title, color = "blue" }) => {
    const colorMap = {
      blue: "#3B82F6",
      green: "#10B981",
      purple: "#8B5CF6",
      orange: "#F97316",
      pink: "#EC4899",
      indigo: "#6366F1"
    };

    const bgColorMap = {
      blue: "#EFF6FF",
      green: "#ECFDF5",
      purple: "#F5F3FF",
      orange: "#FFF7ED",
      pink: "#FDF2F8",
      indigo: "#EEF2FF"
    };


   
const navigate = useNavigate();
    return (
      <div 
        className="h-[125px] p-8 rounded-t-2xl flex flex-col items-start justify-between  relative overflow-hidden"
        style={{ backgroundColor: bgColorMap[color] }}
      >
        {/* Top Section - Text */}
        <div className="text-left z-10">
          <div className="text-gray-500 text-sm font-medium mb-1">
            Courses
          </div>
          <div className="text-gray-500 text-sm font-medium mb-2">
            to Learn
          </div>
          <div className="text-gray-900 text-2xl font-bold leading-tight">
            {title.split(' ').slice(0, 2).join(' ')}
          </div>
        </div>

        {/* Bottom Right - Laptop Illustration */}
        <div className="absolute bottom-4 right-4 z-10">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
            {/* Laptop screen */}
            <rect x="15" y="10" width="90" height="60" rx="4" fill={colorMap[color]} opacity="0.2"/>
            <rect x="20" y="15" width="80" height="50" rx="2" fill="white"/>
            
            {/* Screen content */}
            <rect x="30" y="25" width="30" height="4" rx="2" fill={colorMap[color]} opacity="0.3"/>
            <rect x="30" y="33" width="40" height="4" rx="2" fill={colorMap[color]} opacity="0.3"/>
            <rect x="30" y="41" width="35" height="4" rx="2" fill={colorMap[color]} opacity="0.3"/>
            
            {/* Chart/Graph illustration */}
            <circle cx="80" cy="35" r="8" fill={colorMap[color]} opacity="0.4"/>
            <rect x="75" y="45" width="3" height="10" rx="1.5" fill={colorMap[color]} opacity="0.4"/>
            <rect x="80" y="40" width="3" height="15" rx="1.5" fill={colorMap[color]} opacity="0.4"/>
            <rect x="85" y="43" width="3" height="12" rx="1.5" fill={colorMap[color]} opacity="0.4"/>
            
            {/* Laptop base */}
            <path d="M10 70 L5 75 L115 75 L110 70 Z" fill={colorMap[color]} opacity="0.3"/>
            <rect x="15" y="68" width="90" height="2" fill={colorMap[color]} opacity="0.4"/>
          </svg>
        </div>

        {/* Top Right - Star decoration */}
        <div className="absolute top-4 right-4 z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill={colorMap[color]} opacity="0.3">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>
    );
  };
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Explore Our <span className="text-amber-500">Programs</span>
            </h2>
         
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find the best Program for your Growth and boosts your
              Confidence 10x!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Course Cards */}
          <div className="w-full">
            {loading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse"
                  >
                    <div className="w-[398px] h-48 bg-gray-300"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded mb-4"></div>
                      <div className="flex justify-between">
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                        <div className="h-4 bg-gray-300 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              // Error state
              <div className="text-center py-16">
                <div className="text-red-500 mb-6">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <p className="text-xl font-semibold">Failed to load courses</p>
                  <p className="text-sm text-gray-600 mt-2">{error}</p>
                </div>
                <button
                  onClick={handleRetry}
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
                >
                  Try Again
                </button>
              </div>
            ) : courses.length === 0 ? (
              // No courses state
              <div className="text-center py-16">
                <div className="text-gray-500">
                  <BookOpen className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">No courses available</p>
                  <p className="text-sm mt-2">Check back later for new courses!</p>
                </div>
              </div>
            ) : (
              // Display courses
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => {
                  const colors = ['blue', 'green', 'purple', 'orange', 'pink', 'indigo'];
                  const courseColor = colors[index % colors.length];
                  
                  return (
                    <div
                      key={course.id}
                      className="w-[398px] h-[338px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      {/* Course Illustration */}
                      <CourseIllustration title={course.title} color={courseColor} />
                      
                      <div className="p-6">
                        {/* Rating */}
                        <div className="flex items-center justify-center mb-3">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="text-sm font-semibold text-gray-700 ml-1">
                            {course.rating} ({course.reviews})
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-center text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {course.title}
                        </h3>
                        
                        {/* Duration */}
                        <p className="text-center text-sm text-gray-500 mb-6">
                          Duration: {course.duration}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center justify-center gap-4">
                          <button 
                            className="w-[134px] h-[26px]  text-[12px] border-1 rounded-xl  text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors"
                            onClick={() => {
                              // Handle download brochure
                              console.log('Download brochure for:', course.title);
                            }}
                          >
                            Download Brochure
                          </button>
                          <button
                            className="w-[134px] h-[26px]  text-[12px] border-1 rounded-xl  text-sm text-[black] hover:text-black-800 font-bold transition-colors"
                            onClick={() => {
                              if (course.videoDemoUrl && course.videoDemoUrl !== '#') {
                                window.open(course.videoDemoUrl, "_blank");
                              } else {
                                console.log('View program for:', course.title);
                              }
                            }}
                          >
                            View Program
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* View All Button */}
            
            <div className="text-center mt-8 mb-5 ml-[500px] pb-10">
              <button className="bg-white border-2 border-[#FFE6A1] text-[25px]  text-black px-8 py-3 rounded-4xl font-semibold hover:bg-yellow-500 transition-colors flex items-center ">
                <button onClick={() => navigate("/courses")} >View All </button>
                <svg className="w-[40px] h-[40px] -mr-4 ml-8 border-2 rounded-3xl bg-[#FCB11F] text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;