import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Clock,
  Users,
  CalendarDays,
  Sparkles,
  ShieldCheck,
  Laptop2,
  Headphones,
  ArrowRight,
  CheckCircle2,
  BookOpenCheck,
  ChevronDown,
  ChevronUp,
  MessageCircleQuestion,
  Code,
  Award,
  Laptop,
  Star,
  Shield,
  Download,
} from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Share from '../components/Courses/Share';

const offeringCards = [
  { icon: Laptop2, title: 'Live Cohort', subtitle: 'Weekend mentor sessions', accent: 'from-[#7DD3FC] to-[#38BDF8]' },
  { icon: Laptop, title: 'Self-paced kit', subtitle: 'Lifetime LMS access', accent: 'from-[#FDE68A] to-[#F59E0B]' },
  { icon: ShieldCheck, title: 'Placement labs', subtitle: 'Mock interviews & referrals', accent: 'from-[#C4B5FD] to-[#7C3AED]' },
  { icon: BookOpenCheck, title: 'Capstone project', subtitle: 'Industry briefs & reviews', accent: 'from-[#FDBA74] to-[#FB923C]' },
  { icon: Headphones, title: '1:1 Mentorship', subtitle: 'Monthly mentor pods', accent: 'from-[#F9A8D4] to-[#EC4899]' },
  { icon: Users, title: 'Community events', subtitle: 'Design critiques & AMAs', accent: 'from-[#6EE7B7] to-[#10B981]' },
];

const fallbackAboutHighlights = [
  'Live mentor-led weekend classes',
  'Industry capstones & case studies',
  'Placement support & mock interviews',
  'Lifetime access to recordings & toolkits',
];

const fallbackCurriculum = [
  {
    moduleTitle: 'Foundation & Research',
    topics: [
      'Design thinking fundamentals',
      'User research blueprints',
      'Competitive benchmarking',
    ],
  },
  {
    moduleTitle: 'Interface & Systems',
    topics: [
      'Advanced Figma workflows',
      'Design tokens & systems',
      'Collaboration rituals with devs',
    ],
  },
  {
    moduleTitle: 'Interaction & Prototyping',
    topics: [
      'Motion & micro interactions',
      'Prototyping for usability testing',
      'Design handoff best practices',
    ],
  },
  {
    moduleTitle: 'AI + Portfolio Sprint',
    topics: [
      'Using AI in design workflows',
      'Portfolio storytelling',
      'Hiring challenge simulations',
    ],
  },
];

const fallbackTrainingOptions = [
  {
    name: 'Online Bootcamp',
    price: 49990,
    currency: 'INR',
    descriptionPoints: [
      'Live mentor-led weekend sessions',
      '1:1 feedback loops',
      'Placement support & referrals',
    ],
  },
  {
    name: 'Self-Paced Learning',
    price: 19990,
    currency: 'INR',
    descriptionPoints: [
      '100+ on-demand lessons',
      'Monthly live Q&A',
      'Community + template access',
    ],
  },
  {
    name: 'Corporate Training',
    price: 89990,
    currency: 'INR',
    descriptionPoints: [
      'Custom curriculum design',
      'Onsite/virtual workshops',
      'Impact reports & certification',
    ],
  },
];

const fallbackProjects = [
  {
    title: 'AI powered code assistant',
    description: 'Design a multi-platform experience that helps dev teams ship faster with GenAI.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  },
  {
    title: 'Habit tracking application',
    description: 'End-to-end UX project covering research, prototyping and usability testing.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'IoT smart home dashboard',
    description: 'Strategy + interface project for connected devices with responsive design.',
    imageUrl: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&h=400&fit=crop',
  },
];

const fallbackMentors = [
  {
    name: 'Simran Kaur',
    title: 'Lead Product Designer • Spotify',
    bio: 'Ex-Meta mentor with 9+ years building consumer and fintech experiences.',
  },
  {
    name: 'Rahul Menon',
    title: 'Principal UX Architect • Microsoft',
    bio: 'Drives design strategy for enterprise SaaS; mentors cohorts at Upskillway.',
  },
];

const fallbackRoles = [
  { title: 'Product Designer', description: 'Own end-to-end journeys, collaborate with PM + engineering.' },
  { title: 'UX Researcher', description: 'Plan studies, synthesize insights and influence roadmaps.' },
  { title: 'Interaction Designer', description: 'Craft motion, micro states and accessible systems.' },
  { title: 'UX Writer', description: 'Shape in-product copy, voice and content design systems.' },
  { title: 'Design Strategist', description: 'Define north-star experiences & vision decks.' },
  { title: 'Design Lead', description: 'Mentor teams, run crits and ship systematically.' },
];

const fallbackFaqs = [
  { question: 'When does the next batch start?', answer: 'New cohorts launch every month. The next Full Stack Dev with AI batch starts 28 Nov 2025.' },
  { question: 'Is placement support included?', answer: 'Yes. Resume deep dives, mock interviews, referrals to 400+ partners and a dedicated career coach.' },
  { question: 'What is the weekly commitment?', answer: 'Weekend live sessions (6 hrs) + 5-7 hrs guided assignments through the week.' },
  { question: 'Can I switch plans later?', answer: 'Learners can upgrade from self-paced to the live cohort anytime by paying the difference.' },
];

const fallbackTestimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Product Designer @ Swiggy',
    quote: 'Capstone sprints simulated real hiring challenges. Cracked 3 offers within 45 days.',
  },
  {
    name: 'Meera Thomas',
    role: 'UX Strategist @ Razorpay',
    quote: 'Mentorship pods and hiring simulations helped me build a story-driven portfolio.',
  },
];

const fallbackPrograms = [
  {
    title: 'Product Design Pro',
    duration: '6 Months',
    price: '₹39,990',
    imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
    slug: 'product-design-pro',
  },
  {
    title: 'Data Science Accelerator',
    duration: '8 Months',
    price: '₹59,990',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    slug: 'data-science-accelerator',
  },
  {
    title: 'No-Code Builder',
    duration: '4 Months',
    price: '₹24,990',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=400&fit=crop',
    slug: 'no-code-builder',
  },
  {
    title: 'AI Product Strategy',
    duration: '3 Months',
    price: '₹34,990',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    slug: 'ai-product-strategy',
  },
];

const fallbackTools = [
  { name: 'Figma' },
  { name: 'FigJam' },
  { name: 'Maze' },
  { name: 'Notion' },
  { name: 'Framer' },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        let response = await fetch(`http://localhost:3000/api/v1/cms/courses/${id}`);

        if (!response.ok) {
          response = await fetch(`http://localhost:3000/api/v1/cms/courses?page=1&limit=100&status=published`);
          const listData = await response.json();
          if (listData.success && listData.data) {
            const foundCourse = listData.data.find((c) => c.slug === id || c._id === id);
            if (foundCourse) {
              setCourse(foundCourse);
            } else {
              setError('Course not found');
            }
          } else {
            setError('Course not found');
          }
        } else {
          const result = await response.json();
          if (result.success) {
            setCourse(result.data);
          } else {
            setError('Course not found');
          }
        }
      } catch (err) {
        setError('Failed to load course: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const formatPrice = (price, currency = 'INR') => {
    if (typeof price !== 'number') {
      return price || 'Contact counsellor';
    }
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-20">
          <div className="space-y-8 animate-pulse">
            <div className="h-5 w-32 bg-white/10 rounded-full" />
            <div className="h-10 w-64 bg-white/10 rounded-full" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-64 bg-white/5 rounded-3xl" />
              <div className="h-64 bg-white/5 rounded-3xl" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center space-y-6">
          <h1 className="text-3xl font-semibold">Unable to load course</h1>
          <p className="text-gray-400 max-w-md">{error || 'This course may be unpublished.'}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold"
            >
              Retry
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="px-6 py-3 rounded-full border border-white/20 text-white"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  const programPrice = course.price ?? course.programFee ?? course.pricing;
  const heroHighlights = [
    { icon: Clock, label: course.duration || '08 Months' },
    { icon: Sparkles, label: course.mode || 'Live + Project based' },
    { icon: Users, label: `${course.learners || '18k+'} learners` },
    { icon: ShieldCheck, label: 'Placement support' },
  ];
  const heroStats = [
    { label: 'Program fee', value: programPrice ? formatPrice(programPrice, course.currency || 'INR') : 'Contact counsellor' },
    { label: 'Level', value: course.level || course.difficulty || 'Beginner friendly' },
    { label: 'Mode', value: course.mode || 'Weekend cohort' },
    { label: 'Seats left', value: course.seatsLeft ? `${course.seatsLeft} seats` : 'Limited seats' },
  ];

  const aboutHighlights = Array.isArray(course.highlights) && course.highlights.length ? course.highlights : fallbackAboutHighlights;
  const curriculumBlocks = course.curriculum?.length ? course.curriculum : fallbackCurriculum;
  const trainingOptions = course.trainingOptions?.length ? course.trainingOptions : fallbackTrainingOptions;
  const projects = course.projects?.length ? course.projects : fallbackProjects;
  const mentors = course.mentors?.length ? course.mentors : fallbackMentors;
  const careerRoles = course.careerRoles?.length ? course.careerRoles : fallbackRoles;
  const faqList = course.faqs?.length ? course.faqs : fallbackFaqs;
  const toolsList = (course.masteredTools?.length ? course.masteredTools : fallbackTools).map((tool) =>
    typeof tool === 'string' ? { name: tool } : tool,
  );
  const testimonialCards = (course.testimonials?.length ? course.testimonials : fallbackTestimonials).map((item) => ({
    name: item.studentName || item.name,
    role: item.studentRole || item.role,
    quote: item.testimonialText || item.quote,
    rating: item.rating || 5,
  }));
  const relatedPrograms = (course.relatedPrograms?.length ? course.relatedPrograms : fallbackPrograms).map((program) => ({
    title: program.title,
    duration: program.duration || program.meta?.duration || 'Flexible',
    price: program.price ? formatPrice(program.price, program.currency || 'INR') : program.priceLabel || 'Contact us',
    imageUrl:
      program.imageUrl ||
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
    slug: program.slug || program._id || program.id || program.title,
  }));

  const ratingValue = course.rating || 4.9;
  const ratingCount = course.reviews || '4.9k';
  const heroDescription = course.description || course.shortDescription || 'Master in-demand skills with mentor-led cohorts, industry-grade briefs and personalised placement support.';
  const instructorName = course.creator?.name || 'Upskillway Mentors';

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Plus_Jakarta_Sans']">
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 mt-20">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft size={18} />
          Back to courses
        </button>

        <section className="pt-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#FDB11F]">
                <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600">
                  {course.category || 'Full Stack Development'}
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <CalendarDays size={16} />
                  {course.nextCohort || 'Next cohort • 28 Nov'}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] leading-tight font-semibold">
                {course.title || 'Full Stack development with AI'}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">{heroDescription}</p>
              <div className="flex flex-wrap gap-3">
                {heroHighlights.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600">
                    <Icon size={16} className="text-[#FDB11F]" />
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Star size={16} className="text-[#FDB11F]" />
                  {ratingValue}
                  <span className="text-gray-500">({ratingCount} reviews)</span>
                </span>
                <span>Instructor: {instructorName}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FDB11F] text-black font-semibold shadow-lg"
                >
                  Book free trial
                  <ArrowRight size={18} />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                  Download curriculum
                  <Download size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroStats.map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{value}</p>
                  </div>
                ))}
              </div>
              <Share className="mt-2" />
            </div>
            <div className="flex-1">
              <div className="relative rounded-[32px] border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-4 lg:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                {course.bannerImageUrl ? (
                  <img
                    src={course.bannerImageUrl}
                    alt={course.title}
                    className="w-full h-[360px] object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-[360px] rounded-2xl bg-gradient-to-r from-[#EEF2FF] to-[#ECFEFF] flex items-center justify-center">
                    <Code size={64} className="text-slate-500" />
                  </div>
                )}
                <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#FDB11F] text-black flex items-center justify-center shadow-xl hover:scale-110 transition">
                  <Play size={22} />
                </button>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="rounded-2xl bg-white border border-gray-200 p-4 flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-sm text-gray-500">Applications closing in</p>
                      <p className="text-xl font-semibold text-gray-900">03 days • 12:48 hrs</p>
                    </div>
                    <button onClick={() => navigate('/contact')} className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold">
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="rounded-[32px] border border-gray-200 bg-white p-8 space-y-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">About course</p>
            <h2 className="text-3xl font-semibold">About {course.title || 'this program'}</h2>
            <p className="text-gray-600">{heroDescription}</p>
            <ul className="space-y-3">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle2 size={18} className="text-[#FDB11F] mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] border border-gray-200 bg-gray-50 p-6 flex items-center justify-center">
            {course.aboutSectionImageUrl ? (
              <img
                src={course.aboutSectionImageUrl}
                alt="About visual"
                className="w-full h-full object-cover rounded-3xl"
              />
            ) : (
              <div className="w-full h-72 rounded-3xl bg-gradient-to-br from-[#EEF2FF] to-[#E0F2FE] flex items-center justify-center">
                <Laptop size={72} className="text-slate-500" />
              </div>
            )}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Exclusive course offerings</h3>
            <button className="text-sm text-[#FDB11F] flex items-center gap-2">
              View roadmap
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offeringCards.map(({ icon: Icon, title, subtitle, accent }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 flex items-start gap-4 shadow-sm">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center`}>
                  <Icon size={20} className="text-black" />
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">
            Master these tools
          </h3>
          <div className="flex flex-wrap gap-6">
            {toolsList.map((tool, index) => (
              <div key={`${tool.name}-${index}`} className="flex flex-col items-center text-center">
                  {tool.logoUrl ? (
                    <img
                      src={tool.logoUrl}
                      alt={tool.name}
                      className="w-14 h-14 object-contain rounded-2xl bg-white border border-gray-200 p-3"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-sm text-gray-500">
                      {tool.name?.charAt(0) || 'T'}
                    </div>
                  )}
                <span className="text-sm text-gray-600 mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-[32px] border border-[#FFB11F]/40 bg-gradient-to-br from-[#2E1A00] to-[#0B0500] p-8 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-[#FFB11F] text-sm uppercase tracking-[0.4em]">Hurry up!</p>
              <h3 className="text-3xl font-semibold text-white">Grab your free live class</h3>
              <p className="text-gray-200">
                Limited seats left for the upcoming cohort. Experience one full mentor-led session before joining.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-full bg-white text-black font-semibold inline-flex items-center gap-2 w-fit"
              >
                Reserve my seat
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="flex-1">
              <div className="w-full rounded-3xl bg-white/10 border border-white/20 p-6 flex items-center justify-center">
                <img
                  src={course.bannerImageUrl || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop'}
                  alt="Live class"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">Curriculum</p>
                <h3 className="text-3xl font-semibold">Course journey</h3>
              </div>
              <button className="px-5 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2">
                Download PDF
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="space-y-4">
              {curriculumBlocks.map((module, index) => (
                <div key={`${module.moduleTitle}-${index}`} className="border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                    className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold">{module.moduleTitle}</span>
                    {expandedModule === index ? <ChevronUp /> : <ChevronDown />}
                  </button>
                  {expandedModule === index && (
                  <div className="px-6 py-4 bg-white text-sm text-gray-600 border-t border-gray-200">
                      <ul className="space-y-2">
                        {(module.topics || []).map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-[#FDB11F]" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Training plans</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {trainingOptions.map((option, index) => (
              <div key={`${option.name}-${index}`} className="rounded-[28px] border border-gray-200 bg-white p-6 flex flex-col gap-5 shadow-sm">
                <div>
                  <p className="text-sm text-gray-400">{option.name}</p>
                  <p className="text-3xl font-semibold mt-2">
                    {option.price ? formatPrice(option.price, option.currency || 'INR') : 'Contact us'}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  {(option.descriptionPoints || []).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Shield size={16} className="text-[#FDB11F] mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/contact')}
                  className="mt-auto w-full py-3 rounded-full bg-white text-black font-semibold"
                >
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Build projects from scratch</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="rounded-[28px] border border-gray-200 bg-white overflow-hidden shadow-sm">
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                )}
                <div className="p-6 space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">Capstone</p>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">Mentors</p>
              <h3 className="text-2xl font-semibold">Meet our mentors</h3>
            </div>
            <button className="text-sm text-[#FDB11F] flex items-center gap-2">
              View all
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="rounded-3xl border border-gray-200 bg-white p-6 space-y-3 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-lg font-semibold">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{mentor.name}</p>
                    <p className="text-sm text-gray-400">{mentor.title}</p>
                  </div>
                </div>
                {mentor.bio && <p className="text-sm text-gray-400">{mentor.bio}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">What role does a Data Scientist play?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {careerRoles.map((role) => (
              <div key={role.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold">{role.title}</p>
                <p className="text-sm text-gray-400 mt-2">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid md:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-[32px] border border-gray-200 bg-white p-8 space-y-4 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">Get Certified</p>
            <h3 className="text-3xl font-semibold">Earn an industry recognised credential</h3>
            <p className="text-gray-600">
              Shareable digital badge with verification ID, hosted on Upskillway Vault for lifetime access.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-3">
                <Award size={18} className="text-[#FDB11F]" />
                ISO certified credential
              </li>
              <li className="flex items-center gap-3">
                <Award size={18} className="text-[#FDB11F]" />
                Globally verifiable certificate ID
              </li>
              <li className="flex items-center gap-3">
                <Award size={18} className="text-[#FDB11F]" />
                Portfolio + LinkedIn ready asset pack
              </li>
            </ul>
            <button className="px-5 py-3 rounded-full border border-white/10 text-white flex items-center gap-2 w-fit">
              View sample certificate
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="rounded-[32px] border border-white/5 bg-gradient-to-b from-[#1C1C1F] to-[#050505] p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-400">Achievement unlocked</p>
              <p className="text-2xl font-semibold">Upskillway Certified Professional</p>
            </div>
            <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-sm text-gray-600">
                Includes verified certificate ID, shareable short link, alumni community access and showcase templates.
              </p>
              <button onClick={() => navigate('/contact')} className="mt-5 w-full py-3 rounded-2xl bg-white text-black font-semibold">
                Claim credential
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">From aspiration to achievement</h3>
            <button className="text-sm text-[#FDB11F] flex items-center gap-2">
              Read stories
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialCards.map((card) => (
              <div key={card.name} className="rounded-[28px] border border-gray-200 bg-white p-6 space-y-4 shadow-sm">
                <p className="text-gray-600 italic">“{card.quote}”</p>
                <div>
                  <p className="font-semibold">{card.name}</p>
                  <p className="text-sm text-gray-400">{card.role}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`${card.name}-star-${i}`}
                      size={16}
                      className={i < card.rating ? 'text-[#FDB11F]' : 'text-gray-600'}
                      fill={i < card.rating ? '#FDB11F' : 'none'}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-[32px] border border-purple-400/20 bg-gradient-to-r from-purple-600 to-purple-800 p-8 grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Talk to our counsellor</h3>
              <p className="text-purple-100 mb-6">
                Get personalised guidance, scholarship checks and a detailed learning roadmap within 30 minutes.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button type="submit" className="w-full bg-white text-purple-700 py-3 rounded-2xl font-semibold">
                  Book a free session
                </button>
              </form>
            </div>
            <div className="rounded-3xl bg-white/10 border border-white/15 p-6">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=500&fit=crop"
                alt="Counsellor"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
            <button className="text-sm text-[#FDB11F] flex items-center gap-2">
              Ask counsellor
              <MessageCircleQuestion size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {expandedFAQ === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-white text-sm text-gray-600 border-t border-gray-200">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">Related programs</p>
              <h3 className="text-2xl font-semibold">Explore more courses</h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPrograms.map((program) => (
              <div
                key={program.slug}
                className="rounded-3xl border border-gray-200 bg-white overflow-hidden flex flex-col shadow-sm"
              >
                <img src={program.imageUrl} alt={program.title} className="w-full h-40 object-cover" />
                <div className="p-4 space-y-2 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.3em]">Featured</p>
                  <h4 className="font-semibold line-clamp-2">{program.title}</h4>
                  <p className="text-sm text-gray-400">{program.duration}</p>
                  <p className="text-sm font-semibold text-white">{program.price}</p>
                  <button
                    onClick={() => navigate(`/course/${program.slug}`)}
                    className="mt-auto w-full py-2 rounded-full bg-white text-black text-sm font-semibold"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid md:grid-cols-[1fr_0.9fr] gap-8">
          <div className="rounded-[32px] border border-gray-200 bg-white p-8 space-y-4 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[#FDB11F]">Need help?</p>
            <h3 className="text-3xl font-semibold">Need help choosing the right path?</h3>
            <p className="text-gray-600">
              Our support team is ready to answer questions about fees, schedules, financing and custom batches.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB11F]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB11F]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB11F]"
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FDB11F]"
              />
              <button type="submit" className="w-full bg-white text-black py-3 rounded-2xl font-semibold">
                Submit
              </button>
            </form>
          </div>
          <div className="rounded-[32px] border border-gray-200 bg-white overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop"
              alt="Need help"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CourseDetail;

