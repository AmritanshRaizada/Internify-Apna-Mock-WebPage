import React, { useState, useEffect } from 'react';
// Font Awesome 5 icons (still available in fa)
import { 
  FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, 
  FaChevronDown, FaSearch, FaLock 
} from "react-icons/fa";

// Font Awesome 6 icons
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaThumbsUp, FaRegComment, FaCircle } from 'react-icons/fa'
import { FaPhoneAlt, FaHeart, FaStar } from "react-icons/fa";

const ICICIInterviewPrep = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter(i => i !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const questions = {
    technical: [
      {
        question: "How do you drive sales in a competitive market?",
        answer: "You can talk about pricing strategy, customer targeting, etc."
      },
      {
        question: "What CRM tools have you used effectively?",
        answer: "Mention tools like Salesforce, Zoho CRM, etc. with examples."
      },
      {
        question: "Q. Explain your approach to sales forecasting.",
        answer: "I combine historical data analysis with market insights to create accurate forecasts. Regular updates and adjustments ensure targets remain realistic and achievable."
      },
      {
        question: "Q. How do you manage a large sales team?",
        answer: "I set clear goals, conduct regular training, and foster open communication. Empowering team members with resources and feedback drives performance and morale."
      }
    ],
  behavioural :[
  {
    question: "Describe a time you led a sales turnaround.",
    answer:
      "Situation: Sales were declining in my region. Task: Reverse the negative trend. Action: Implemented targeted promotions and retrained the team. Result: Achieved a 20% sales increase within six months."
  },
  {
    question: "How do you handle underperforming team members?",
    answer:
      "Situation: One team member missed targets consistently. Task: Improve their performance. Action: Provided coaching and set incremental goals. Result: They met targets within three months and improved confidence."
  },
  {
    question: "Tell me about a conflict you resolved in your team.",
    answer:
      "Situation: Two team members disagreed on strategy. Task: Mediate and find resolution. Action: Facilitated open discussion and aligned goals. Result: Team collaboration improved, and sales increased."
  },
  {
    question: "Give an example of meeting a tight sales deadline.",
    answer:
      "Situation: Needed to close deals before quarter-end. Task: Ensure timely sales closure. Action: Prioritized leads and motivated team for focused effort. Result: Exceeded sales targets despite tight deadline."
  }
],
    mission: [
      {
    question: "How do you align with ICICI Bank’s customer focus?",
    answer:
      "I prioritize understanding customer needs and delivering personalized solutions. This approach aligns with ICICI Bank’s commitment to customer-centric services and long-term relationships."
  },
  {
    question: "What attracts you to ICICI Bank’s culture?",
    answer:
      "ICICI Bank’s emphasis on innovation, integrity, and teamwork resonates with me. I value a culture that encourages growth and ethical business practices."
  },
  {
    question: "How would you contribute to ICICI Bank’s vision?",
    answer:
      "I aim to drive field sales growth by leveraging data-driven strategies and fostering strong client connections. This supports ICICI Bank’s vision of being a trusted financial partner."
  },
  {
    question: "What does integrity mean in sales at ICICI Bank?",
    answer:
      "Integrity means being honest, transparent, and ethical in all transactions. It builds trust with customers and upholds ICICI Bank’s reputation in the market."
  }
    ]
  };

  return (
    <div className="bg-purple-50 font-sans min-h-screen">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <HeaderCard />
          <AboutSection />
          <CheatsheetsSection />
          <InterviewPreparation 
            activeTab={activeTab} 
            toggleTab={toggleTab} 
            questions={questions} 
            expandedQuestions={expandedQuestions}
            toggleQuestion={toggleQuestion}
          />
          <AfterInterviewSection />
          <DisclaimerSection />
        </div>

        <div className="space-y-6">
          <RatingsSection />
          <ShareSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full border-b px-6 py-3 flex items-center justify-between font-sans">
      <div className="flex items-center space-x-6 text-sm font-medium mx-auto">
        <div className="flex w-max cursor-pointer items-center">
          <a>
            <svg width="48" height="48" viewBox="0 0 56 56" className="">
              {/* SVG paths from original */}
              <g data-name="Group 1" fill="#fff">
                <path data-name="Path 1" d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"></path>
                <path data-name="Path 2" d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"></path>
              </g>
              <path data-name="Path 3" d="M44.77 56h-7.437v-7h17.843a11.232 11.232 0 01-10.4 7z" fill="#ffd166" fillRule="evenodd"></path>
              <path data-name="Path 4" d="M18.667 49v7h-7.438a11.232 11.232 0 01-10.4-7z" fill="#2bb793" fillRule="evenodd"></path>
              <path data-name="Path 5" d="M18.667 49h18.667v7H18.667z" fill="#83bde4" fillRule="evenodd"></path>
              <path data-name="Path 6" d="M15.333 30.26a1.9 1.9 0 00.142.84.909.909 0 00.505.414l-.809 2.568a4.964 4.964 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082A3.637 3.637 0 019 34.163a3.53 3.53 0 01-2.579-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.654 6.654 0 013.883-.95h.768v-.263a1.428 1.428 0 00-.323-1.092 1.943 1.943 0 00-1.234-.283 6.617 6.617 0 00-1.244.151 13.01 13.01 0 00-1.547.415l-.87-2.548a12.257 12.257 0 014.268-.849 5.666 5.666 0 013.7.98 3.725 3.725 0 011.153 3v3.724zm-5.1 1.092a1.321 1.321 0 00.678-.182 1.63 1.63 0 00.515-.465v-1.6h-.424a2.086 2.086 0 00-1.254.3 1.086 1.086 0 00-.405.93 1.07 1.07 0 00.243.738.823.823 0 00.647.273zm13.67-8.8a3.409 3.409 0 013.024 1.516 7.556 7.556 0 011.02 4.247 7.955 7.955 0 01-.535 3A4.871 4.871 0 0125.9 33.4a3.585 3.585 0 01-2.255.758 3.226 3.226 0 01-2.507-1.072v4.854l-4 .4V22.96h3.559l.162 1.052A3.923 3.923 0 0122.3 22.9a4.036 4.036 0 011.607-.343zm-1.573 8.76q1.517 0 1.517-2.932a8.247 8.247 0 00-.162-1.881 1.563 1.563 0 00-.435-.86 1.105 1.105 0 00-.7-.212 1.641 1.641 0 00-1.415 1.011v4.126a1.8 1.8 0 00.546.576 1.227 1.227 0 00.647.172zm13.97-8.756a2.75 2.75 0 012.133.849 3.4 3.4 0 01.779 2.386v7.968h-4v-7.24a1.589 1.589 0 00-.152-.829.515.515 0 00-.455-.222q-.667 0-1.355 1.071v7.22h-4V22.96h3.5l.284 1.112a5.118 5.118 0 011.526-1.152 4.08 4.08 0 011.75-.364zm13.852 7.7a1.913 1.913 0 00.141.84.911.911 0 00.506.414l-.809 2.568a4.958 4.958 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082 3.639 3.639 0 01-3.256 1.577 3.527 3.527 0 01-2.578-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.653 6.653 0 013.882-.95h.769v-.263a1.424 1.424 0 00-.324-1.092 1.939 1.939 0 00-1.233-.283 6.608 6.608 0 00-1.244.151 12.959 12.959 0 00-1.547.415l-.87-2.548a12.246 12.246 0 014.267-.849 5.665 5.665 0 013.7.98 3.725 3.725 0 011.153 3zm-5.1 1.092a1.32 1.32 0 00.677-.182 1.63 1.63 0 00.516-.465v-1.6h-.425a2.09 2.09 0 00-1.254.3 1.085 1.085 0 00-.4.93 1.065 1.065 0 00.243.738.823.823 0 00.647.273z" fill="#4d3951"></path>
            </svg>
          </a>
        </div>

        <div className="relative flex items-center space-x-1">
          <span className="text-gray-800">Jobs</span>
          <svg className="w-3 h-3 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <span className="text-teal-600">Job Prep</span>

        <div className="relative flex items-center space-x-1">
          <span className="text-gray-800">Contests</span>
          <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
        </div>

        <div className="relative flex items-center space-x-1">
          <span className="text-gray-800">Degree</span>
          <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">NEW</span>
        </div>

        <div className="relative flex items-center space-x-1">
          <span className="text-gray-800">Resume Tools</span>
          <svg className="w-3 h-3 mt-0.5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs by title, company ..."
            className="pl-10 pr-4 py-1.5 text-sm rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-300 w-64"
          />
          <FaSearch className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
        
        <a href="#" className="text-teal-600 text-sm font-medium">Employer Login</a>
<button className="bg-teal-600 text-white text-sm font-medium px-4 py-1.5 rounded border border-transparent hover:bg-white hover:text-teal-600 hover:border-teal-600 transition-colors duration-200 cursor-pointer">
  Candidate Login

</button>

      </div>
    </nav>
  );
};

const HeaderCard = () => {
  return (
    <div className="relative">
      <div
        className="rounded-xl shadow-lg p-6 flex items-center space-x-4 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Finterview-prep%2Fdetail_bg_web.png&w=3840&q=75')" }}
      >
        <img
          src="https://apna.co/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Finterview-prep%2Fcompany_name%2Ficici-bank.webp&w=256&q=75"
          alt="ICICI Logo"
          className="w-20 h-20 rounded bg-white p-1"
        />
        <div>
          <h2 className="text-2xl font-bold">Head of Field Sales</h2>
          <p className="text-white/80">at ICICI Bank</p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">About this interview</h3>
      <p className="text-gray-700">
        Get an opportunity to get interviewed for ICICI Bank's Head of Field Sales. Together with technical
        questions, get insights about company values and culture.
      </p>
    </div>
  );
};

const CheatsheetsSection = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 shadow-xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">Personalised Interview Cheatsheets</h3>
        <p className="text-sm text-gray-600">Based on your profile</p>
      </div>

      <div className="relative p-6 pt-0">
        <div className="flex space-x-4 filter blur-sm select-none pointer-events-none">
          <div className="bg-white rounded-xl p-4 w-1/3">
            <p className="font-semibold text-gray-800">Question: Tell me about a time when you had to solve a comp...</p>
            <p className="text-xs text-gray-500 mt-2">In my previous role at XYZ Corp...</p>
          </div>
          <div className="bg-white rounded-xl p-4 w-1/3">
            <p className="font-semibold text-gray-800">Question: How would you design a distributed cache system?</p>
            <p className="text-xs text-gray-500 mt-2">When designing a distributed cache system...</p>
          </div>
          <div className="bg-white rounded-xl p-4 w-1/3">
            <p className="font-semibold text-gray-800">Question: How would you design a distributed cache system?</p>
            <p className="text-xs text-gray-500 mt-2">Focus on consistency, availability...</p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 z-20">
          <FaLock className="h-8 w-8 text-purple-600 mb-2" />
          <p className="text-purple-700 font-semibold text-lg">Locked</p>
          <p className="text-gray-700 text-sm mt-1 text-center px-4">
            This will get unlocked after your interview is completed.
          </p>
        </div>
      </div>
    </div>
  );
};

const InterviewPreparation = ({ activeTab, toggleTab, questions, expandedQuestions, toggleQuestion }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Prepare for the Interview</h3>
      <div className="flex space-x-4 mb-6">
        <button 
          className={`border px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'technical' ? 'border-purple-600 text-purple-600' : ''
          }`}
          onClick={() => toggleTab('technical')}
        >
          Technical
        </button>
        <button 
          className={`border px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'behavioural' ? 'border-purple-600 text-purple-600' : ''
          }`}
          onClick={() => toggleTab('behavioural')}
        >
          Behavioural
        </button>
        <button 
          className={`border px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            activeTab === 'mission' ? 'border-purple-600 text-purple-600' : ''
          }`}
          onClick={() => toggleTab('mission')}
        >
          Mission-vision
        </button>
      </div>

      <div className="space-y-4">
        {questions[activeTab]?.map((q, index) => (
          <div key={index} className="border-b">
            <button 
              onClick={() => toggleQuestion(index)} 
              className="w-full text-left py-3 font-medium flex justify-between items-center"
            >
              <span>Q. {q.question}</span>
              <FaChevronDown className={`transition-transform ${expandedQuestions.includes(index) ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${expandedQuestions.includes(index) ? 'block' : 'hidden'} text-gray-600 pb-4`}>
              {q.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AfterInterviewSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4">After this interview, You'll get</h3>
      <ul className="space-y-3">
        <li className="bg-white p-3 rounded shadow text-gray-800">
          Get an Interview Score and Rating amongst all the candidates
        </li>
        <li className="bg-white p-3 rounded shadow text-gray-800">
          Detailed Analysis and Feedback on how the interview went
        </li>
        <li className="bg-white p-3 rounded shadow text-gray-800">
          Question wise tips to improve your answers and deliver next time
        </li>
      </ul>
    </div>
  );
};

const DisclaimerSection = () => {
  return (
    <>
      <div className="text-sm text-gray-600 mt-4 flex items-start space-x-2">
        <span className="text-xl">🔒</span>
        <p>This is a mock interview for practice purposes only. Your responses and feedback won't be shared with any recruiters.</p>
      </div>
      <p className="text-xs text-purple-500 mt-2">This page contains AI-generated content, which may occasionally be inaccurate or irrelevant.</p>
    </>
  );
};

const RatingsSection = () => {
    return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md p-4 mx-auto text-center space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Ratings & Reviews</h2>

      <div className="flex justify-around items-center border-b pb-4">
        <div className="flex flex-col items-center space-y-1">
          <FaPhoneAlt className="text-purple-600" />
          <span className="font-semibold text-gray-800">246</span>
          <span className="text-xs text-gray-500">Preps</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <FaHeart className="text-purple-600" />
          <span className="font-semibold text-gray-800">82%</span>
          <span className="text-xs text-gray-500">Found helpful</span>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <FaStar className="text-purple-600" />
          <span className="font-semibold text-gray-800">81</span>
          <span className="text-xs text-gray-500">Reviews</span>
        </div>
      </div>

      <p className="text-sm text-purple-600">10 mins interview slot available</p>

      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition">
        Start Interview
      </button>
    </div>
  );
}


const ShareSection = () => {
return (
    <div className="max-w-md bg-white rounded-2xl shadow-md p-6 mx-auto text-center space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Share with Friends</h2>

      <div className="flex justify-center space-x-6">
        <FaWhatsapp className="text-green-500 text-5xl cursor-pointer" />
        <FaFacebook className="text-blue-600 text-5xl cursor-pointer" />
        <FaLinkedin className="text-blue-700 text-5xl cursor-pointer" />
        <FaXTwitter className="text-black text-5xl cursor-pointer" />
      </div>

      <p className="text-sm text-purple-600">or copy link</p>

      <div className="flex items-center justify-center space-x-2">
        <input
          type="text"
          readOnly
          value="https://apna.co/interview-prep/n"
          className="border border-gray-300 rounded-md px-3 py-2 w-72 text-sm text-gray-700"
        />
        <button className="border border-purple-500 text-purple-600 rounded-md px-4 py-2 text-sm hover:bg-purple-50 transition">
          Copy
        </button>
      </div>
    </div>
  );
}
const Footer = () => {
  return (
    <footer className="bg-[#140422] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-10 md:space-y-0">
        <div>
          <div className="flex items-start space-x-4">
            <a>
              <svg width="68" height="68" viewBox="0 0 56 56" className="">
                {/* SVG paths from original */}
                <g data-name="Group 1" fill="#fff">
                  <path data-name="Path 1" d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"></path>
                  <path data-name="Path 2" d="M11.23 0h33.54A11.228 11.228 0 0156 11.23v33.54A11.228 11.228 0 0144.77 56H11.23A11.228 11.228 0 010 44.77V11.23A11.228 11.228 0 0111.23 0z"></path>
                </g>
                <path data-name="Path 3" d="M44.77 56h-7.437v-7h17.843a11.232 11.232 0 01-10.4 7z" fill="#ffd166" fillRule="evenodd"></path>
                <path data-name="Path 4" d="M18.667 49v7h-7.438a11.232 11.232 0 01-10.4-7z" fill="#2bb793" fillRule="evenodd"></path>
                <path data-name="Path 5" d="M18.667 49h18.667v7H18.667z" fill="#83bde4" fillRule="evenodd"></path>
                <path data-name="Path 6" d="M15.333 30.26a1.9 1.9 0 00.142.84.909.909 0 00.505.414l-.809 2.568a4.964 4.964 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082A3.637 3.637 0 019 34.163a3.53 3.53 0 01-2.579-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.654 6.654 0 013.883-.95h.768v-.263a1.428 1.428 0 00-.323-1.092 1.943 1.943 0 00-1.234-.283 6.617 6.617 0 00-1.244.151 13.01 13.01 0 00-1.547.415l-.87-2.548a12.257 12.257 0 014.268-.849 5.666 5.666 0 013.7.98 3.725 3.725 0 011.153 3v3.724zm-5.1 1.092a1.321 1.321 0 00.678-.182 1.63 1.63 0 00.515-.465v-1.6h-.424a2.086 2.086 0 00-1.254.3 1.086 1.086 0 00-.405.93 1.07 1.07 0 00.243.738.823.823 0 00.647.273zm13.67-8.8a3.409 3.409 0 013.024 1.516 7.556 7.556 0 011.02 4.247 7.955 7.955 0 01-.535 3A4.871 4.871 0 0125.9 33.4a3.585 3.585 0 01-2.255.758 3.226 3.226 0 01-2.507-1.072v4.854l-4 .4V22.96h3.559l.162 1.052A3.923 3.923 0 0122.3 22.9a4.036 4.036 0 011.607-.343zm-1.573 8.76q1.517 0 1.517-2.932a8.247 8.247 0 00-.162-1.881 1.563 1.563 0 00-.435-.86 1.105 1.105 0 00-.7-.212 1.641 1.641 0 00-1.415 1.011v4.126a1.8 1.8 0 00.546.576 1.227 1.227 0 00.647.172zm13.97-8.756a2.75 2.75 0 012.133.849 3.4 3.4 0 01.779 2.386v7.968h-4v-7.24a1.589 1.589 0 00-.152-.829.515.515 0 00-.455-.222q-.667 0-1.355 1.071v7.22h-4V22.96h3.5l.284 1.112a5.118 5.118 0 011.526-1.152 4.08 4.08 0 011.75-.364zm13.852 7.7a1.913 1.913 0 00.141.84.911.911 0 00.506.414l-.809 2.568a4.958 4.958 0 01-1.78-.414 2.685 2.685 0 01-1.132-1.082 3.639 3.639 0 01-3.256 1.577 3.527 3.527 0 01-2.578-.96 3.316 3.316 0 01-.98-2.478 3.166 3.166 0 011.334-2.75 6.653 6.653 0 013.882-.95h.769v-.263a1.424 1.424 0 00-.324-1.092 1.939 1.939 0 00-1.233-.283 6.608 6.608 0 00-1.244.151 12.959 12.959 0 00-1.547.415l-.87-2.548a12.246 12.246 0 014.267-.849 5.665 5.665 0 013.7.98 3.725 3.725 0 011.153 3zm-5.1 1.092a1.32 1.32 0 00.677-.182 1.63 1.63 0 00.516-.465v-1.6h-.425a2.09 2.09 0 00-1.254.3 1.085 1.085 0 00-.4.93 1.065 1.065 0 00.243.738.823.823 0 00.647.273z" fill="#4d3951"></path>
              </svg>
            </a>
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Follow us on social media</h2>
              <div className="flex space-x-4">
                <a href="#"><FaFacebook className="text-white" /></a>
                <a href="#"><FaInstagram className="text-white" /></a>
                <a href="#"><FaLinkedin className="text-white" /></a>
                <a href="#"><FaTwitter className="text-white" /></a>
                <a href="#"><FaYoutube className="text-white" /></a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-600 w-3/4" />
          <div className="text-sm text-gray-400 space-x-6">
            <span>© 2025 Apna | All rights reserved</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-2xl max-w-lg shadow-md flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Apply on the go</h3>
            <p className="text-sm text-gray-700 mt-1">Get real time job updates on our App</p>
            
            <div className="mt-3">
              <a href="https://play.google.com/store/apps/YOUR_APP_LINK" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  className="w-32 hover:opacity-80 transition-opacity" 
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
          
          <div className="ml-6">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://apna.co&margin=0" 
              className="w-16 h-16" 
              alt="Scan to download app"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ICICIInterviewPrep;