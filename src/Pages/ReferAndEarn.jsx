import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import {
  Share2,
  Gift,
  DollarSign,
  Star,
  Trophy,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Users,
  Upload,
  X,
  Plus
} from 'lucide-react';

import Refer1 from "../assets/Images/refer1.jpg";
import Refer2 from "../assets/Images/Refer2.png";
import Refer3 from "../assets/Images/Refer3.png";
import Refer4 from "../assets/Images/Refer4.png";
import Refer7 from "../assets/Images/Refer7.png";
import Refer8 from "../assets/Images/Refer8.png";

const FAQSection = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(3); // Question 04 is open by default

  const faqs = [
    {
      id: 1,
      question: "How do I get my referral link?",
      answer: "Once you create an account, you'll receive a unique referral link in your dashboard. You can share this link with friends, family, or on social media to start earning rewards."
    },
    {
      id: 2,
      question: "When do I receive my rewards?",
      answer: "You'll receive your rewards instantly once your referred friend completes the qualifying action (such as enrolling in a course). Rewards are credited to your account immediately."
    },
    {
      id: 3,
      question: "Is there a limit to how many people I can refer?",
      answer: "No, there's no limit! You can refer as many people as you want. The more you refer, the more rewards you earn. Check our rewards table to see all the exciting benefits."
    },
    {
      id: 4,
      question: "What rewards can I earn?",
      answer: "You can earn a variety of rewards including smartwatches, Bluetooth accessories, Amazon vouchers, and more. The rewards increase as you refer more people - see our rewards table for details."
    },
    {
      id: 5,
      question: "Do my friends get any benefits when they sign up?",
      answer: "Yes! Your friends also get exclusive welcome benefits when they sign up through your referral link, such as discounts on courses. It's a win-win for everyone!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-[#FF9500]">Frequently</span> asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-lg border ${
                  openIndex === index
                    ? 'border-yellow-200 shadow-md'
                    : 'border-gray-200'
                } p-4 sm:p-6 transition-all duration-300`}
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {String(faq.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 ml-12 sm:ml-14">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.slice(3).map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-lg border ${
                    openIndex === actualIndex
                      ? 'border-yellow-200 shadow-md'
                      : 'border-gray-200'
                  } p-4 sm:p-6 transition-all duration-300`}
                >
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() => toggleFAQ(actualIndex)}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm sm:text-base font-semibold text-gray-700">
                          {String(faq.id).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pt-1">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === actualIndex ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                  {openIndex === actualIndex && (
                    <div className="mt-4 ml-12 sm:ml-14">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-[#FF9500] to-[#FFB84D] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-xl hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            View More
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const ReferAndEarn = () => {
  const [openFaq, setOpenFaq] = useState(3); // Question 04 is open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Image Protection - Prevent downloading, right-click, and inspection
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (Ctrl+S, Ctrl+P, F12, etc.)
    const handleKeyDown = (e) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
    };

    // Disable image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Disable image selection
    const handleSelectStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    // Add CSS to prevent image selection and dragging
    const style = document.createElement('style');
    style.textContent = `
      img {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: auto !important;
        -webkit-touch-callout: none !important;
      }
      img::selection {
        background: transparent !important;
      }
      img::-moz-selection {
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.head.removeChild(style);
    };
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How do I create an account on the job board?",
      answer: "Creating an account is simple! Click on the 'Register Now' button in the header, fill in your details, and verify your email address. Once verified, you'll have full access to browse courses and refer friends."
    },
    {
      id: 2,
      question: "How do I apply for a job through the platform?",
      answer: "After creating your account, you can browse through our comprehensive course catalog. Select the course that interests you and click 'Enroll Now' to begin your learning journey."
    },
    {
      id: 3,
      question: "How can I track the status of my job applications?",
      answer: "You can track your referral status and rewards through your dashboard. Navigate to 'My Referrals' section where you'll see all your referrals, their enrollment status, and your earned rewards."
    },
    {
      id: 4,
      question: "How do I search for universities that match my academic profile and preferences?",
      answer: "Use the search bar on the homepage to enter keywords related to your desired program, preferred country, or university name. You can also use the advanced search filters to narrow down results by degree level, field of study, tuition range, and location to find the perfect university match for your academic goals."
    },
    {
      id: 5,
      question: "Is there a cost to use the job board, and what features are free?",
      answer: "Our referral program is completely free to join! There are no costs associated with referring friends. You earn rewards based on successful referrals, and your friends get exclusive discounts when they enroll through your referral link."
    }
  ];

  const rewards = [
    {
      referrals: "1st Referral",
      yourReward: "Receive an Amazon Gift Voucher or Exciting Gifts like a Watch, Headphones, or Phone.",
      friendBenefit: "Free Training Materials + 10% Exclusive Discount on their selected course."
    },
    {
      referrals: "5 Successful Referrals",
      yourReward: "Complete 1 to 5 referrals and earn ₹10,000 to ₹50,000 in cash rewards.",
      friendBenefit: "Upto 30% off their course (on top of the existing discount)."
    },
    {
      referrals: "10 Successful Referrals",
      yourReward: "Complete 10 referrals and earn ₹50,000 to ₹1,00,000 in cash rewards.",
      friendBenefit: "A Free one-on-one Career Coaching session with an expert."
    }
  ];

  const partners = ['Google', 'Microsoft', 'MetalLB', 'LinkedIn', 'Instagram', 'Apple Pay'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 pt-20 pb-16 sm:pb-20 md:pb-24"
        style={{
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          borderBottomLeftRadius: '100px',
          borderBottomRightRadius: '366px',
          opacity: 1
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white relative">
              <h1 
                className="mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '100px',
                  lineHeight: '127%',
                  letterSpacing: '-3px',
                  verticalAlign: 'middle',
                  width: '942px',
                  height: '254px',
                  position: 'relative',
                  
                  
                  opacity: 1
                }}
              >
                Unlock More 
                <br />
                Money & Gifts
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                with upskillway's Referral Program!
              </h2>
              <button className="bg-transparent text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg mb-6 sm:mb-8 border-2 border-white hover:bg-white hover:text-purple-700 transition-colors duration-300 flex items-center gap-2 w-fit">
                Invite Friends
              </button>
              <p className="text-sm sm:text-base text-white mb-6 sm:mb-8">
                Join over 20,000 users who've already benefited from our referral program.
              </p>
              {/* Rating Card */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB84D] text-[#FFB84D]" />
                    ))}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-white">4.9</span>
                </div>
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB84D]" />
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-lg">  
                <img 
                  src={Refer7} 
                  alt="Refer and Earn" 
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  draggable="false"
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className= "mt-10">
          <div>
            <img 
              src={Refer8} 
              alt="Refer and Earn" 
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable="false"
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Unlock Exclusive Rewards Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Unlock <span className="text-[#FF9500]">Exclusive</span> Rewards!
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 mb-4 leading-relaxed">
              You've earned it! At UpSkillWay, we believe in rewarding you generously for helping your friends find their path to a better career.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The more successful referrals you make, the bigger the reward tier you unlock!
            </p>
          </div>

          {/* Rewards Illustration */}
          <div className="w-full flex justify-center mb-12">
            <img 
              src={Refer2} 
              alt="Exclusive Rewards Illustration" 
              className="object-cover"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable="false"
              style={{
                width: '707px',
                height: '872px',
                opacity: 1,
                userSelect: 'none',
                WebkitUserSelect: 'none'
              }}
            />
          </div>

          {/* Rewards Table */}
          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto bg-white">
              <thead>
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">Referrals Achieved</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">Your Exclusive Reward</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">
                    <div className="flex items-center gap-2">
                      <span>For Your Friend (Added Benefit)</span>
                      <Star className="w-5 h-5 text-gray-400" strokeWidth={2} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rewards.map((reward, index) => (
                  <tr key={index} className="border-b border-dashed border-gray-300">
                    <td className="px-4 sm:px-6 py-4 sm:py-6 font-semibold text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <ArrowLeft className="w-3 h-3 text-gray-800" />
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-gray-300 h-0"></div>
                        <span className="ml-2">{reward.referrals}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 sm:py-6 text-gray-700">
                      {reward.yourReward}
                    </td>
                    <td className="px-4 sm:px-6 py-4 sm:py-6 text-gray-700">
                      <div className="flex items-start gap-2">
                        {index === 0 || index === 2 ? (
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="#FFB84D" />
                        ) : (
                          <Star className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        )}
                        <span>{reward.friendBenefit}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Refer Your Friends Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why <span className="text-[#FF9500]">Refer Your</span> Friends?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Refer your friends and earn exciting rewards! They get access to our top-rated courses, 
                and you get gifts like smartwatches, Bluetooth accessories, and Amazon vouchers. A win-win for both!
              </p>
              <button className="bg-[#FF9500] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition-colors duration-300 flex items-center gap-2">
                Refer a friend
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full flex justify-center lg:justify-end">
              <img 
                src={Refer1} 
                alt="Refer your friends illustration" 
                className="object-cover w-full max-w-[716px] h-auto"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable="false"
                style={{
                  height: '362px',
                  borderRadius: '24px',
                  opacity: 1,
                  userSelect: 'none',
                  WebkitUserSelect: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            <span className="text-[#FF9500]">Referral Program</span> FAQ
          </h2>
          <FAQSection/>
          
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            Our <span className="text-[#FF9500]">Partners</span>
          </h2>
          <div className="w-full relative overflow-hidden">
            <style>
              {`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll-left 20s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className=" flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-12 sm:gap-16 px-8 grayscale opacity-70">
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Google+
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  ■ Microsoft
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Ⓐ MetalLB
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Linked⬛in
                </div>
                <div className="text-2xl sm:text-3xl font-bold italic whitespace-nowrap">
                  Instagram
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  🍎 Pay
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-12 sm:gap-16 px-8 grayscale opacity-70">
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Google+
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  ■ Microsoft
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Ⓐ MetalLB
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  Linked⬛in
                </div>
                <div className="text-2xl sm:text-3xl font-bold italic whitespace-nowrap">
                  Instagram
                </div>
                <div className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
                  🍎 Pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ReferAndEarn;

