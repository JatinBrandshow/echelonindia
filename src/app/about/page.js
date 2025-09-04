// src/app/about/page.js
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* About Page Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-90"></div>

                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Main content */}
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Text content - About focused */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="lg:w-1/2 text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-6"
                            >
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-white mb-6 border border-white/20">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    <span>Building Legacies Since 1989</span>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            >
                                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Spaces</span> That Inspire Lives
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-lg text-gray-300 mb-8 leading-relaxed"
                            >
                                For over three decades, we have been at the forefront of real estate development in Northern India, creating sustainable communities and architectural landmarks that stand the test of time.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                                className="text-lg text-gray-300 mb-10 leading-relaxed"
                            >
                                Our journey began with a simple vision: to transform urban landscapes while maintaining the highest standards of quality, integrity, and customer satisfaction.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 mb-12"
                            >
                                <button className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
                                    <span className="relative z-10">Our Story</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>

                                <button className="relative group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                                    <span className="relative z-10">Meet Our Team</span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8"
                            >
                                {[
                                    { value: "20+", label: "Years Experience" },
                                    { value: "20+", label: "Completed Projects" },
                                    { value: "5+", label: "Cities Presence" },
                                 
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Visual element with building image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative w-full max-w-2xl mx-auto">
                                {/* Main building image with enhanced size and styling */}
                                <div className="relative z-10  overflow-hidden">
                                    <div className="w-full h-96 lg:h-[550px] relative">
                                        <Image
                                            src="/images/about/home-img.png"
                                            alt="Modern Building Architecture"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {/* Subtle overlay to enhance contrast */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transform translate-x-64 z-20"></div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>

                                {/* Floating info cards - About focused */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.8 }}
                                    className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl max-w-[180px]"
                                >
                                    <div className="text-white text-sm font-medium">Quality Craftsmanship</div>
                                    <div className="text-cyan-300 text-xs">Since 1989</div>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 1 }}
                                    className="absolute -left-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-2xl max-w-[180px]"
                                >
                                    <div className="text-white text-sm font-medium">Sustainable Development</div>
                                    <div className="text-cyan-300 text-xs">Green Initiatives</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-cursive font-semibold mb-8 text-gray-800"
                        >
                            At Echelon
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600 mb-6 leading-relaxed"
                        >
                            We are redefining real estate development with a strong vision, unmatched expertise, and a commitment to quality. Founded and led by Mr. Manish Agarwal, a highly accomplished real estate developer with over 20 years of experience, our group has successfully delivered landmark residential and commercial projects across Northern India.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-50">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold font-cursive mb-4 text-gray-800">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Journey</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Two decades of excellence in transforming real estate landscapes across Northern India
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative group">
                                {/* Main Image */}
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                        alt="Our Journey"
                                        className="w-full h-98 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Stats Badge */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -10 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-6 -right-6 w-44 h-44 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl border-4 border-white"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">20+</div>
                                        <div className="text-xs font-semibold">Years of Excellence</div>
                                    </div>
                                </motion.div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl font-semibold font-cursive mb-8 text-gray-800">
                                    Building Legacies Since 1989
                                </h2>

                                <div className="space-y-6 mb-8">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="text-lg text-gray-600 leading-relaxed"
                                    >
                                        Mr. Manish Agarwal, as the Founder and Managing Director of both Dynamic Infradevelopers Pvt. Ltd. and Eminent Infradevelopers Pvt. Ltd., has built a legacy of trust, transparency, and innovation.
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-lg text-gray-600 leading-relaxed"
                                    >
                                        His leadership, combined with a team of skilled architects, project managers, and financial experts, ensures that every project reflects excellence, cost-effectiveness, and sustainable growth.
                                    </motion.p>
                                </div>

                                {/* Animated Stats Grid */}
                                <div className="grid grid-cols-2 gap-5">
                                    {[
                                        { number: "2", label: "Companies", color: "from-blue-600 to-cyan-600" },
                                        { number: "50+", label: "Projects", color: "from-cyan-600 to-blue-600" },
                                        { number: "10K+", label: "Customers", color: "from-blue-600 to-indigo-600" },
                                        { number: "5+", label: "Cities", color: "from-indigo-600 to-blue-600" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group relative bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                                        >
                                            <div className="text-center">
                                                <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                                                    {stat.number}
                                                </div>
                                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                            </div>

                                            {/* Hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                                            {/* Animated underline */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-3/4 transition-all duration-500"></div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Timeline Indicator */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex items-center mt-8 text-sm text-gray-500"
                                >
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span>1989 - Founded Dynamic Infradevelopers</span>
                                    </div>
                                    <div className="mx-2">•</div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                                        <span>2003 - Launched Eminent Infradevelopers</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        viewport={{ once: true }}
                        className="absolute bottom-10 left-10 opacity-10"
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-500">
                            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="currentColor" />
                        </svg>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="absolute top-10 right-10 opacity-10"
                    >
                        <svg width="80" height="80" viewBox="0 0 100 100" className="text-cyan-500">
                            <circle cx="50" cy="50" r="40" fill="currentColor" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-20"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                </div>

                {/* Animated orbs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-6 border border-white/20">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold font-cursive pb-1 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                                Our Philosophy
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
                            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                                The foundational beliefs that guide our approach to creating exceptional spaces
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Card with elegant border gradient */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                <div className="relative bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 h-full">
                                    <div className="text-cyan-300 text-5xl font-serif mb-6">"</div>
                                    <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed font-light">
                                        We believe in optimizing resources and adopting a methodological approach that ensures value creation for our customers and stakeholders.
                                    </p>
                                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                                        With every project, our goal is simple — to turn dreams into reality by delivering spaces that inspire, nurture, and grow with the people who live and work in them.
                                    </p>

                                    {/* Founder signature */}
                                    <div className="flex items-center mt-10 pt-6 border-t border-slate-700/50">
                                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4 text-lg">
                                            MA
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">Manish Agarwal</div>
                                            <div className="text-slate-400 text-sm">Founder & Managing Director</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                            >
                                {[
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        ),
                                        title: "Sustainability",
                                        desc: "Eco-friendly practices in all developments"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        ),
                                        title: "Trust",
                                        desc: "Building relationships that last generations"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                            </svg>
                                        ),
                                        title: "Quality",
                                        desc: "Uncompromising standards in every detail"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        ),
                                        title: "Growth",
                                        desc: "Creating value that appreciates over time"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="group relative bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:translate-y-1">
                                        <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-semibold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300">{item.title}</h3>
                                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{item.desc}</p>

                                        {/* Hover effect line */}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What we do */}
         <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

    <div className="container mx-auto px-6 relative z-10">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold font-cursive text-center mb-4 text-gray-800"
        >
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Do</span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
            Crafting exceptional living and commercial spaces that transform communities
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
                {/* Animated Corner Background - Blue */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full transition-all duration-700 group-hover:w-full group-hover:h-full group-hover:rounded-2xl"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Our Specialization</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        We specialize in developing housing societies, townships, apartments, malls, and multiplexes designed to cater to every segment of society — from working professionals to business leaders.
                    </p>
                    <ul className="space-y-3">
                        {['Housing Societies', 'Integrated Townships', 'Premium Apartments', 'Commercial Malls', 'Multiplex Complexes'].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
                {/* Animated Corner Background - Green */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full transition-all duration-700 group-hover:w-full group-hover:h-full group-hover:rounded-2xl"></div>
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">Our Vision</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        Each project is driven by the vision of creating not just structures, but thriving communities in a spiritual and healthy environment.
                    </p>
                    <ul className="space-y-3">
                        {['Community-Centric Design', 'Sustainable Development', 'Quality Craftsmanship', 'Innovative Solutions', 'Customer Satisfaction'].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    </div>

    
</section>


            <style jsx>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>

            <style jsx>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>

        </div>
    );
}