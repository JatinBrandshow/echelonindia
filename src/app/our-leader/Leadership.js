// src/app/leadership/Leadership.js
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Leadership() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        // Scroll animation handling
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     const [activeCompany, setActiveCompany] = useState(0);
  
  const companies = [
    {
      id: 0,
      name: "Dynamic Infradevelopers Pvt Ltd",
      title: "Founder & Managing Director",
      period: "1989 - Present",
      cin: "U74899DL1989PTC037477",
      description: "Leading real estate group of India, aiming to provide living in a spiritual and healthy environment backed by a commitment to excellence and quality.",
      focusAreas: ["Housing Societies", "Townships", "Apartments in Northern India"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 1,
      name: "Eminent Infradevelopers Pvt Ltd",
      title: "Founder & Managing Director",
      period: "2003 - Present",
      cin: "U45201DL2003PTC122964",
      description: "A consortium of leading builders & developers of New Delhi, committed to cater to every section of Society with quality infrastructure.",
      focusAreas: ["Townships", "Apartments", "Malls and Multiplexes"],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0H9m2 0H5m2 0H3m2 0v-5a1 1 0 011-1h8a1 1 0 011 1v5m-6 0h4" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "10K+", label: "Customers" },
    { value: "5+", label: "Cities" }
  ];

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Hero Section */}
            <section id="hero" className="hero-bg min-h-screen flex items-center pt-16 pb-28">
                <div className="container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">MANISH AGARWAL</h1>
                    <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-200">Real Estate Developer | Founder & Managing Director</p>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in delay-400">Highly accomplished real estate developer with 20+ years of experience in developing and managing a variety of real estate projects across Northern India.</p>
                    <div className="animate-fade-in delay-600">
                        <a href="#experience" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block mr-4 transition">Experience</a>
                        <a href="#companies" className="border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-lg font-semibold inline-block transition">Companies</a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About </h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                            <div className="w-64 h-64 bg-blue-100 rounded-full overflow-hidden shadow-xl">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Manish Agarwal" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-12">
                            <p className="text-lg text-gray-700 mb-6">Highly accomplished real estate developer with 20+ years of experience in developing and managing a variety of real estate. Proven track record of success in driving revenue growth, increasing asset value, and building strong relationships with stakeholders.</p>
                            <p className="text-lg text-gray-700 mb-6">Solid experience and select strengths that encompass territory management, key account development, staff training and team leadership.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">20+ Years</h3>
                                        <p className="text-gray-600">Experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">50+ Projects</h3>
                                        <p className="text-gray-600">Completed</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">2 Companies</h3>
                                        <p className="text-gray-600">Founded</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">North India</h3>
                                        <p className="text-gray-600">Focus Area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         <section id="experience" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Professional <span className="text-blue-400">Journey</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Company Selector Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-1.5 flex border border-gray-700/50">
              {companies.map((company, index) => (
                <button
                  key={company.id}
                  onClick={() => setActiveCompany(index)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCompany === index
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {company.name}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative mb-12">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 transform -translate-y-1/2"></div>
            
            {/* Timeline Points */}
            <div className="relative flex justify-between">
              {companies.map((company, index) => (
                <div 
                  key={company.id}
                  className="relative"
                  onClick={() => setActiveCompany(index)}
                >
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeCompany === index 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-700 hover:bg-blue-600'
                    }`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-md">
                      {company.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Content */}
          <motion.div
            key={activeCompany}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-lg mb-12"
          >
            <div className="flex items-start mb-6">
              <div className="bg-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                {companies[activeCompany].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {companies[activeCompany].title}
                </h3>
                <p className="text-lg text-blue-300 font-semibold">
                  {companies[activeCompany].name}
                </p>
                <div className="text-gray-400 text-xs font-mono mt-1 tracking-tight">
                  CIN: {companies[activeCompany].cin}
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {companies[activeCompany].description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {companies[activeCompany].focusAreas.map((area, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1.5 rounded-lg border border-gray-600/50"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 shadow-sm"
          >
            <h3 className="text-xl font-bold text-center text-white mb-8">Career Highlights</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="p-4 rounded-lg bg-gray-700/50 border border-gray-600 hover:bg-gray-700/70 transition-colors duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>


            <section id="companies" className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                    >
                        <span className="text-blue-600">Companies</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Dynamic Infradevelopers Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -15,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="company-card bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
                            style={{
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-20"></div>
                                <div className="absolute top-4 right-4 bg-white text-blue-800 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    SINCE 1989
                                </div>
                                <h3 className="text-2xl font-bold text-white relative z-10 text-center px-4">Dynamic Infradevelopers Pvt Ltd</h3>
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
                                    style={{ transform: 'skewX(-12deg) translateX(-40px)' }}
                                ></div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-sm mb-2 font-mono">CIN: U74899DL1989PTC037477</p>
                                <p className="text-gray-700 mb-4 leading-relaxed">Leading real estate group of India, aiming to provide living in a spiritual and healthy environment backed by a commitment to excellence and quality.</p>
                                <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Housing societies</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Townships</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Apartments in northern India</span>
                                    </div>
                                </div>
                                <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                                    Explore Projects
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        {/* Eminent Infradevelopers Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -15,
                                rotateY: -5,
                                transition: { duration: 0.3 }
                            }}
                            className="company-card bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
                            style={{
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}
                        >
                            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-20"></div>
                                <div className="absolute top-4 right-4 bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    SINCE 2003
                                </div>
                                <h3 className="text-2xl font-bold text-white relative z-10 text-center px-4">Eminent Infradevelopers Pvt Ltd</h3>
                                <div
                                    className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
                                    style={{ transform: 'skewX(-12deg) translateX(-40px)' }}
                                ></div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-500 text-sm mb-2 font-mono">CIN: U45201DL2003PTC122964</p>
                                <p className="text-gray-700 mb-4 leading-relaxed">A consortium of leading builders & developers of New Delhi, committed to cater to every section of Society.</p>
                                <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Townships</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Apartments</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-gray-800 font-medium">Malls and multiplexes</span>
                                    </div>
                                </div>
                                <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
                                    Explore Projects
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            \

            <style jsx>{`
        .hero-bg {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3') center/cover;
        }
        .company-card {
          transition: transform 0.3s ease;
        }
        .company-card:hover {
          transform: translateY(-5px);
        }
        .timeline-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 40px;
        }
        .timeline-item:before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2563eb;
        }
        .timeline-item:after {
          content: '';
          position: absolute;
          left: 5px;
          top: 25px;
          width: 2px;
          height: calc(100% + 15px);
          background: #2563eb;
        }
        .timeline-item:last-child:after {
          display: none;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}