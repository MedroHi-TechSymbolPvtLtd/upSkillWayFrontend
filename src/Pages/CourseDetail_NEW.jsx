import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Hero from '../components/CourseDetail/Hero';
import AboutUIUX from '../components/CourseDetail/AboutUIUX';
import ExclusiveCourses from '../components/CourseDetail/ExclusiveCourses';
import CourseCurriculum from "../components/CourseDetail/CourseCurriculum";
import TrainingOptions from "../components/CourseDetail/TrainingOptions";
import BuildProjects from "../components/CourseDetail/BuildProjects";
import Mentors from "../components/CourseDetail/Mentors";
import DataScientistRole from "../components/CourseDetail/DataScientistRole";
import GetCertified from "../components/CourseDetail/GetCertified";
import Testimonial from "../components/Courses/Testimonial";
import Faq from "../components/Courses/FAQ";
import Form from "../components/CourseDetail/Form";
import Related from "../components/CourseDetail/Related";
import sitting from "../assets/Images/sitting.png";
import { api, endpoints } from '../utils/api';
import Master from "../components/CourseDetail/Master";
import Hurry from "../components/CourseDetail/Hurry";

const CourseDetail = () => {
  const { slug } = useParams();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Consultation form state
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    mobile: '',
    otp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  // Fetch course data from API
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all courses from API
        const response = await api.get(endpoints.cms.courses);
        
        if (response.success && response.data) {
          // Find the course by slug or use first course if no slug
          const foundCourse = slug 
            ? response.data.find(c => c.slug === slug || c.id === slug)
            : response.data[0];
          
          if (foundCourse) {
            setCourse(foundCourse);
          } else {
            setError('Course not found');
          }
        } else {
          setError('Failed to load course data');
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError(err.message || 'Failed to load course');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded w-full max-w-4xl mx-auto"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Failed to Load Course</h1>
          <p className="text-gray-600 mb-8">{error || 'Course not found'}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-[#FF9500] to-[#FFB84D] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero course={course} />
      <AboutUIUX course={course} />
       <ExclusiveCourses course={course} />
      <Master course={course} />
      <Hurry />



     
      <CourseCurriculum course={course} />
      <TrainingOptions course={course} />
      <BuildProjects course={course} />
      <Mentors course={course} />
      <DataScientistRole course={course} />
      <GetCertified course={course} />
      
      {/* Testimonial - Hidden on mobile */}
      <div className="hidden md:block">
        <Testimonial course={course} />
      </div>
      
      <section className="hidden md:block py-8 sm:py-10 md:py-14 lg:py-20 px-4 bg-white relative lg:-mt-20">
  <div className="max-w-[1519px] mx-auto relative">
    {/* Purple Card */}
    <div className="relative w-full max-w-[1519px] min-h-[280px] sm:min-h-[320px] md:min-h-[366px] bg-[#5D38DE] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden">
      <div className="absolute w-[323px] h-[101.62px] left-[879px] top-[297px] bg-[#6843E7] rounded hidden xl:block"></div>
      <div className="absolute w-[323px] h-[101.62px] left-[-107.87px] top-[-120.46px] bg-[#6843E7] rounded rotate-[120deg] hidden xl:block"></div>
      <div className="absolute w-[323px] h-[101.62px] left-[980px] top-[-64.49px] bg-[#6843E7] rounded rotate-[-150deg] hidden xl:block"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[80px] py-6 sm:py-8 md:py-12 lg:py-[80px]">
        <div className="max-w-[699px]">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[36px] font-bold text-white mb-3 sm:mb-3.5 md:mb-4">
            Talk to our Counsellor 
          </h2>
          
          <p className="font-['Inter'] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal text-[rgba(255,255,255,0.9)] mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-[427px]">
            Get Expert Advice our Councellor will reach within 24 Hour
          </p>
          
          <button 
            onClick={() => setIsConsultationModalOpen(true)}
            className="w-full sm:w-[280px] md:w-[308px] h-[48px] sm:h-[52px] md:h-[54px] bg-white rounded-[80px] flex items-center justify-center font-['Inter'] text-sm sm:text-base md:text-lg leading-[22px] font-bold text-[#5D38DE] hover:bg-gray-100 transition-colors"
          >
            Get Connected Now
          </button>
        </div>
      </div>
    </div>

    {/* Sitting Image Half Out */}
    <div className="absolute right-0 top-1/2 transform translate-y-[-60%] w-[45%] sm:w-[40%] md:w-[35%] lg:w-[550px] z-20">
      <img 
        src={sitting}
        alt="Counseling session illustration"
        className="w-full object-cover object-center"
      />
    </div>
  </div>  
</section>

        <Faq course={course} />
      <Related course={course} />
    
      <Form />

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Form */}
              <div className="p-8 sm:p-12 lg:p-16">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsConsultationModalOpen(false);
                    setConsultationForm({ name: '', email: '', mobile: '', otp: '' });
                    setFormStatus({ type: '', message: '' });
                  }}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Get In Touch
                </h2>

                {formStatus.message && (
                  <div
                    className={`mb-4 p-4 rounded-lg text-sm ${
                      formStatus.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form className="space-y-6 mt-8">
                  {/* Name Input */}
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Enter your name
                    </label>
                    <input
                      type="text"
                      value={consultationForm.name}
                      onChange={(e) =>
                        setConsultationForm({ ...consultationForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#6C5CE7] outline-none bg-transparent transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Enter your email
                    </label>
                    <input
                      type="email"
                      value={consultationForm.email}
                      onChange={(e) =>
                        setConsultationForm({ ...consultationForm, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#6C5CE7] outline-none bg-transparent transition-colors"
                      placeholder="sumit@gmail.com"
                      required
                    />
                  </div>

                  {/* Mobile Number Input */}
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Enter your mobile number
                    </label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-gray-300">
                        <span className="font-bold">+91</span>
                      </div>
                      <input
                        type="tel"
                        value={consultationForm.mobile}
                        onChange={(e) =>
                          setConsultationForm({ ...consultationForm, mobile: e.target.value })
                        }
                        className="flex-1 px-4 py-3 border-b-2 border-gray-300 focus:border-[#6C5CE7] outline-none bg-transparent transition-colors"
                        placeholder="9413477263"
                        required
                      />
                    </div>
                  </div>

                  {/* OTP Input */}
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">
                      Enter your OTP
                    </label>
                    <input
                      type="text"
                      value={consultationForm.otp}
                      onChange={(e) =>
                        setConsultationForm({ ...consultationForm, otp: e.target.value })
                      }
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#6C5CE7] outline-none bg-transparent transition-colors"
                      placeholder="******"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={async () => {
                      if (!consultationForm.name || !consultationForm.email || !consultationForm.mobile) {
                        setFormStatus({ type: 'error', message: 'Please fill in all required fields' });
                        return;
                      }

                      // Email validation
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailRegex.test(consultationForm.email)) {
                        setFormStatus({ type: 'error', message: 'Please enter a valid email address' });
                        return;
                      }

                      setIsSubmitting(true);
                      setFormStatus({ type: '', message: '' });

                      try {
                        // Send data to API
                        const response = await api.post(endpoints.leads, {
                          email: consultationForm.email,
                          name: consultationForm.name,
                          mobile: consultationForm.mobile,
                          otp: consultationForm.otp
                        });
                        
                        if (response.success) {
                          setFormStatus({ type: 'success', message: 'Thank you! We will contact you soon.' });
                          
                          setTimeout(() => {
                            setIsConsultationModalOpen(false);
                            setConsultationForm({ name: '', email: '', mobile: '', otp: '' });
                            setFormStatus({ type: '', message: '' });
                          }, 2000);
                        } else {
                          setFormStatus({ type: 'error', message: response.message || 'Failed to submit. Please try again.' });
                        }
                      } catch (err) {
                        console.error('Error submitting form:', err);
                        setFormStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}
                    disabled={isSubmitting || !consultationForm.name || !consultationForm.email || !consultationForm.mobile}
                    className="w-full py-4 bg-[#6C5CE7] text-white font-bold rounded-full hover:bg-[#5B4BC7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Connected'}
                  </button>
                </form>
              </div>

              {/* Right Side - Image */}
              <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-8">
                <img
                  src={sitting}
                  alt="Get in touch"
                  className="w-full h-full object-contain max-w-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
