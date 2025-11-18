import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const CollegeTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock testimonials for fallback
  const mockTestimonials = [
    {
      id: 1,
      authorName: "Priya Sharma",
      role: "B.Tech CSE, Mount Caramel College",
      text: "Upskillway's programs transformed our confidence and placement readiness. The hands-on projects and mentoring helped me land my first job at a top MNC.",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
    {
      id: 2,
      authorName: "Rahul Verma",
      role: "B.Tech IT, St. Joseph's College",
      text: "The industry-aligned curriculum and expert trainers made all the difference. I got placed in my dream company within 2 months of completing the program.",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
    {
      id: 3,
      authorName: "Sneha Patel",
      role: "MCA, Christ University",
      text: "The placement support was exceptional. The team guided me through every step, from resume building to interview preparation. Highly recommended!",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
    {
      id: 4,
      authorName: "Aditya Kumar",
      role: "B.Tech ECE, VIT",
      text: "Real-world projects and mentorship from industry experts gave me the confidence to crack multiple interviews. Thank you Upskillway!",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
    {
      id: 5,
      authorName: "Anjali Reddy",
      role: "B.Tech CSE, BITS Pilani",
      text: "The co-branded certificates and guaranteed interview opportunities were game-changers. I'm now working at a Fortune 500 company!",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
    {
      id: 6,
      authorName: "Karthik Iyer",
      role: "B.Tech IT, NIT Trichy",
      text: "Post-placement support for 6 months helped me settle into my new role smoothly. The continuous mentorship is invaluable.",
      avatarUrl: null,
      videoUrl: null,
      status: "approved",
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3000/api/v1/cms/testimonials?type=college&status=approved&limit=12"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        if (data.success && data.data && data.data.length > 0) {
          setTestimonials(data.data);
        } else {
          setTestimonials(mockTestimonials);
        }
      } catch (error) {
        console.warn("Using mock testimonials:", error.message);
        setTestimonials(mockTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const getPlaceholderImage = (name) => {
    const initial = name ? name.charAt(0).toUpperCase() : "?";
    return `https://placehold.co/80x80/e0e0e0/9e9e9e?text=${initial}`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1
    );
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Student Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Hear What Our <span className="text-orange-500">Students</span> Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our college training programs have transformed students' careers and helped them land their dream jobs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100"
              >
                {/* Profile Picture */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatarUrl || getPlaceholderImage(testimonial.authorName)}
                    alt={testimonial.authorName}
                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-100"
                    onError={(e) => {
                      e.target.src = getPlaceholderImage(testimonial.authorName);
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                  {testimonial.authorName}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-600 text-center mb-6">
                  {testimonial.role}
                </p>

                {/* Testimonial Text */}
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed italic text-center">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Watch Video Button */}
                {testimonial.videoUrl && (
                  <div className="text-center">
                    <button
                      onClick={() => window.open(testimonial.videoUrl, "_blank")}
                      className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center justify-center mx-auto transition-all gap-1.5 hover:gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Watch Video
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 3 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-sm text-gray-600">
                {currentIndex + 1} - {Math.min(currentIndex + 3, testimonials.length)} of {testimonials.length}
              </div>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= testimonials.length - 3}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollegeTestimonials;
