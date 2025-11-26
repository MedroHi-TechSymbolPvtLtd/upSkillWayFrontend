import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

import {
  Star,
  Trophy,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

import Refer1 from "../assets/Images/refer1.jpg";
import Refer2 from "../assets/Images/Refer2.png";
import Refer7 from "../assets/Images/Refer7.png";
import Refer8 from "../assets/Images/Refer8.png";

const FAQSection = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(3); // Question 04 is open by default
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from partners API
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/v1/refer/partners");
        const data = await response.json();

        if (data.success && data.data) {
          // Extract FAQs from all partners
          const allFaqs = data.data
            .filter(partner => partner.faqs && Array.isArray(partner.faqs))
            .flatMap(partner => partner.faqs.map((faq, index) => ({
              id: index + 1,
              question: faq.question,
              answer: faq.answer
            })));
          
          // Remove duplicates based on question
          const uniqueFaqs = allFaqs.filter((faq, index, self) =>
            index === self.findIndex((f) => f.question === faq.question)
          );
          
          setFaqs(uniqueFaqs.length > 0 ? uniqueFaqs : [
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
            }
          ]);
        }
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        // Fallback FAQs
        setFaqs([
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
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <section className="py-20 bg-white -mt-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-[#FF9500]">Frequently</span> Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 animate-pulse"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-64"></div>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            ))
          ) : faqs.length === 0 ? (
            // No FAQs state
            <div className="col-span-2 text-center py-8">
              <div className="text-gray-500">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="text-lg font-semibold">No FAQs available</p>
                <p className="text-sm">
                  Check back later for frequently asked questions!
                </p>
              </div>
            </div>
          ) : (
            // Display FAQs from API
            faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </h3>
                  <button
                    className={`p-2 rounded-full transition-colors ${
                      openIndex === faq.id
                        ? "text-red-500 hover:bg-red-50"
                        : "text-blue-500 hover:bg-blue-50"
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === faq.id ? null : faq.id)
                    }
                  >
                    <span className="text-xl font-bold">
                      {openIndex === faq.id ? "×" : "+"}
                    </span>
                  </button>
                </div>
                {openIndex === faq.id && (
                  <div className="mt-4 pl-11 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* View More Button */}
      <div className="text-center p-16">
        <button 
          onClick={() => navigate('/contact')}
          className="text-white text-[20px] bg-[#FCB11F] w-[220px] h-[56px] p-4 rounded-tl-[40px] rounded-tr-[5px] rounded-br-[40px] rounded-bl-[5px]"
        >
          View More
          <svg className="w-[40px] h-[40px] -mt-10 ml-35 bg-[#FCB11F] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg> 
        </button>
      </div>
    </section>
  );
}

const ReferAndEarn = () => {
  const [partners, setPartners] = useState([]);
  const [partnersLoading, setPartnersLoading] = useState(true);

  // Fetch partners from API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setPartnersLoading(true);
        const response = await fetch("http://localhost:3000/api/v1/refer/partners");
        const data = await response.json();

        if (data.success && data.data) {
          // Extract partners with logos
          const partnersWithLogos = data.data
            .filter(partner => partner.logoUrl && partner.name)
            .map(partner => ({
              name: partner.name,
              logoUrl: partner.logoUrl
            }));
          
          setPartners(partnersWithLogos.length > 0 ? partnersWithLogos : []);
        }
      } catch (err) {
        console.error("Error fetching partners:", err);
        setPartners([]);
      } finally {
        setPartnersLoading(false);
      }
    };

    fetchPartners();
  }, []);

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
        <div className=" ml-15 relative z-10">
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
              <h2 className="w-[707px] h-[122px] text-[55px]  text-regular font-['Plus_Jakarta_Sans']  ">
                with upskillway's Referral Program!
              </h2>
              <button className=" w-[303px] h-[74px] bg-transparent text-white  sm:px-12 py-3 sm:py-4 rounded-[99px] font-semibold text-base sm:text-lg mb-6 sm:mb-8 border-2 border-white hover:bg-white hover:text-purple-700 transition-colors duration-300 flex items-center gap-2 mt-12">
                <span className='w-[183px] h-[42px] font-bold text-[25px] '>Invite Friends</span>
              </button>
              <p className="text-sm sm:text-base text-white mb-6 sm:mb-8">
                Join over 20,000 users who've already benefited from our referral program.
              </p>
              {/* Rating Card */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-4xl px-4 sm:px-6 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFB84D] text-[#FFB84D]" />
                    ))}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-white">4.9</span>
                </div>
               
              </div>
               <Trophy className="w-6 h-6  -mt-10 ml-50 sm:w-8 sm:h-8 fill-[#FFB84D] text-[black]" />
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center ">
              <div className="relative w-[628px] h-[415px] -mr-5 mt-10">  
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
      <section className="py-12 sm:py-16 md:py-20  -mt-50">
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
          <div className="w-full flex justify-center  -mt-20">
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
          <div className="overflow-x-auto -mt-30 flex justify-center">
            <div 
              className="bg-white border border-[#E6E9EA] mt-5"
              style={{
                width: '1240px',
                borderRadius: '40px',
                padding: '42px',
                gap: '10px'
              }}
            >
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">Referrals Achieved</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">Your Exclusive Reward</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold text-gray-900 border-b-2 border-dashed border-gray-300">
                      <div className="flex items-center gap-2">
                        <span>For Your Friend (Added Benefit)</span>
                        <div className="w-[60px] h-[60px] bg-[#FDB11F] rounded-[40px] flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" fill="#FFFFFF" strokeWidth={2} />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rewards.map((reward, index) => (
                    <tr key={index} className="border-b border-dashed border-gray-300">
                      <td className="px-4 sm:px-6 py-4 sm:py-6 font-semibold text-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 radius-[40px] rounded-full flex items-center justify-center flex-shrink-0">
                            <ArrowLeft className="w-3 h-3 text-gray-800" />
                          </div>
                          
                          <span className="ml-2">{reward.referrals}</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-6 text-gray-700">
                        {reward.yourReward}
                      </td>
                      <td className="px-4 sm:px-6 py-4 sm:py-6 text-gray-700">
                        <div className="flex items-start gap-2">
                          <span>{reward.friendBenefit}</span>
                          <div className="w-[60px] h-[60px] bg-[#FDB11F] rounded-[40px] flex items-center justify-center flex-shrink-0">
                            <Star className="w-5 h-5 text-white" fill="#FFFFFF" strokeWidth={2} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              <button 
                className="text-white font-semibold text-base sm:text-lg flex items-center transition-all duration-300 hover:opacity-90"
                style={{
                  width: '234px',
                  height: '54px',
                  borderRadius: '99px',
                  padding: '20px 48px',
                  gap: '11px',
                  background: 'linear-gradient(90deg, #5D38DE 0%, #FDB11F 100%)',
                  border: '1px solid transparent',
                  backgroundClip: 'padding-box'
                }}
              >
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
      <section className=" sm:py-16 md:py-20  -mt-20">
        <div className=" w-full  sm:px-6 lg:px-8">
     
          <FAQSection/>
          
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white -mt-65">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 sm:mb-16">
            Our <span className="text-[#FF9500]">Partners</span>
          </h2>
          {partnersLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Loading partners...</p>
            </div>
          ) : (
            <div className="w-full relative overflow-hidden ">
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
                    animation: scroll-left 30s linear infinite;
                  }
                  .animate-scroll:hover {
                    animation-play-state: paused;
                  }
                `}
              </style>
              <div className="flex animate-scroll">
                {/* Render partners multiple times for infinite scroll effect */}
                {[...Array(4)].map((_, setIndex) => (
                  <div key={`set-${setIndex}`} className="flex items-center gap-12 sm:gap-16 px-8">
                    {partners.length > 0 ? (
                      partners.map((partner, index) => (
                        <div
                          key={`${setIndex}-${index}`}
                          className="flex flex-col items-center gap-3 min-w-[200px]  hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                        >
                          <img
                            src={partner.logoUrl}
                            alt={partner.name}
                            className="h-16 w-auto object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                            {partner.name}
                          </span>
                        </div>
                      ))
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default ReferAndEarn;

