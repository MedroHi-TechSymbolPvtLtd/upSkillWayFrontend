import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import GetInTouch from "../../assets/Images/HELP.png";
import { api, endpoints } from '../../utils/api';

const Form = () => {
  const [helpStep, setHelpStep] = useState(1);
  const [isHelpFormSubmitting, setIsHelpFormSubmitting] = useState(false);
  const [helpFormStatus, setHelpFormStatus] = useState({ type: '', message: '' });
  const [helpForm, setHelpForm] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    courseType: '',
    domain: ''
  });

  const handleHelpFormSubmit = async () => {
    if (!helpForm.name || !helpForm.email || !helpForm.phone) {
      setHelpFormStatus({ type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(helpForm.email)) {
      setHelpFormStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsHelpFormSubmitting(true);
    setHelpFormStatus({ type: '', message: '' });

    try {
      // Send data to API
      const data = await api.post(endpoints.leads, {
        email: helpForm.email,
        name: helpForm.name,
        phone: helpForm.phone,
        background: helpForm.background,
        courseType: helpForm.courseType,
        domain: helpForm.domain
      });

      if (data.success) {
        setHelpFormStatus({ type: 'success', message: 'Form submitted successfully! We will contact you soon.' });
        
        // Reset form after successful submission
        setTimeout(() => {
          setHelpForm({ name: '', email: '', phone: '', background: '', courseType: '', domain: '' });
          setHelpStep(1);
          setHelpFormStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setHelpFormStatus({ type: 'error', message: data.message || 'Failed to submit form. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setHelpFormStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
    } finally {
      setIsHelpFormSubmitting(false);
    }
  };

  return (
    <section className="">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Multi-Step Form */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center ">
                <div className="mb-8">
                  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Need help?
                  </h2>
                  <p className="text-xl text-gray-700 font-medium">
                    Connect with us & know what's best for you
                  </p>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${helpStep >= 1 ? 'bg-[#F4A6A6] text-gray-400' : 'bg-[FFFFFF] text-gray-500'}`}>
                      1
                    </div>
                    <span className={`text-sm font-medium ${helpStep >= 1 ? 'text-[#F4A6A6]' : 'text-gray-400'}`}>About You</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${helpStep >= 2 ? 'bg-[#F4A6A6] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      2
                    </div>
                    <span className={`text-sm font-medium ${helpStep >= 2 ? 'text-[#F4A6A6]' : 'text-gray-400'}`}>Preferences</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${helpStep >= 3 ? 'bg-[#F4A6A6] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                    <span className={`text-sm font-medium ${helpStep >= 3 ? 'text-[#F4A6A6]' : 'text-gray-400'}`}>Details</span>
                  </div>
                </div>

                {/* Step 1: Background and Course Type */}
                {helpStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-lg font-medium mb-4">Tell us about your background?</label>
                      <select
                        value={helpForm.background}
                        onChange={(e) => setHelpForm({...helpForm, background: e.target.value})}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:border-[#F4A6A6] outline-none bg-white transition-colors"
                      >
                        <option value="">Select Background</option>
                        <option value="school-student">School Student</option>
                        <option value="college-student">College Student</option>
                        <option value="graduate">Graduate/Not Working</option>
                        <option value="working-professional">Working Professional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-lg font-medium mb-4">What type of course are you interested in?</label>
                      <select
                        value={helpForm.courseType}
                        onChange={(e) => setHelpForm({...helpForm, courseType: e.target.value})}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:border-[#F4A6A6] outline-none bg-white transition-colors"
                      >
                        <option value="">Select Course</option>
                        <option value="upskilling">Upskilling Course</option>
                        <option value="online-degree">Online Degree</option>
                      </select>
                    </div>

                    <button
                      onClick={() => setHelpStep(2)}
                      className="w-full py-4 bg-[#F4A6A6] text-white font-bold rounded-lg hover:bg-[#e89595] transition-colors mt-6"
                    >
                      Next
                    </button>
                  </div>
                )}

                {/* Step 2: Domain Selection */}
                {helpStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-lg font-medium mb-4">Which domain interests you the most?</label>
                      <select
                        value={helpForm.domain}
                        onChange={(e) => setHelpForm({...helpForm, domain: e.target.value})}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:border-[#F4A6A6] outline-none bg-white transition-colors"
                      >
                        <option value="">Select Domain</option>
                        <option value="data-science">Data Science & Analytics</option>
                        <option value="software-development">Software Development Courses</option>
                        <option value="digital-marketing">Digital Marketing With AI</option>
                        <option value="banking-finance">Banking & Finance</option>
                        <option value="programming">Programming Courses</option>
                        <option value="pw-careerlift">PW CareerLift</option>
                      </select>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setHelpStep(1)}
                        className="flex-1 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setHelpStep(3)}
                        className="flex-1 py-4 bg-[#F4A6A6] text-white font-bold rounded-lg hover:bg-[#e89595] transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Name and Phone */}
                {helpStep === 3 && (
                  <div className="space-y-6">
                    {helpFormStatus.message && (
                      <div
                        className={`p-4 rounded-lg text-sm ${
                          helpFormStatus.type === 'success'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {helpFormStatus.message}
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        value={helpForm.name}
                        onChange={(e) => setHelpForm({...helpForm, name: e.target.value})}
                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#F4A6A6] outline-none bg-transparent transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        value={helpForm.email}
                        onChange={(e) => setHelpForm({...helpForm, email: e.target.value})}
                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-[#F4A6A6] outline-none bg-transparent transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Mobile Number *</label>
                      <div className="flex gap-2">
                        <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-gray-300">
                          <span className="font-bold">IN</span>
                          <ChevronDown className="w-4 h-4" />
                          <span className="text-gray-600">+91</span>
                        </div>
                        <input
                          type="tel"
                          value={helpForm.phone}
                          onChange={(e) => setHelpForm({...helpForm, phone: e.target.value})}
                          className="flex-1 px-4 py-3 border-b-2 border-gray-300 focus:border-[#F4A6A6] outline-none bg-transparent transition-colors"
                          placeholder="Enter your mobile number"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setHelpStep(2)}
                        disabled={isHelpFormSubmitting}
                        className="flex-1 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleHelpFormSubmit}
                        disabled={isHelpFormSubmitting || !helpForm.name || !helpForm.email || !helpForm.phone}
                        className="flex-1 py-4 bg-[#F4A6A6] text-white font-bold rounded-lg hover:bg-[#e89595] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isHelpFormSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Image/Illustration */}
              <div className="">
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img 
                    src={GetInTouch} 
                    alt="Get in touch with us"
                    className="w-full h-full object-contain max-w-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Decorative circles */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Form;