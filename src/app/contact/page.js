// src/app/contact/page.js
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                </div>

                {/* Main Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-indigo-950"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="flex justify-center mb-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Connect With <span className="text-cyan-400">Us</span>
                        </h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="w-24 h-1 bg-cyan-400 mx-auto mb-8"
                        ></motion.div>

                        <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                            We'd love to hear from you. Let's start a conversation about how we can help with your real estate needs.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                        >
                            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/30 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </button>

                            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Message
                            </button>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        >
                            <div className="animate-bounce">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 relative bg-gradient-to-b from-navy-50 to-gray-50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Get in Touch</h1>
                        <p className="text-lg text-navy-700 max-w-2xl mx-auto">
                            Have questions or want to discuss a project? Reach out to us and our team will get back to you shortly.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy-900">Send us a Message</h2>
                                <p className="text-gray-600 mb-8">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center"
                                    >
                                        <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                                        <p>Your message has been sent successfully. We'll get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="+91 123 456 7890"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                                                    Subject *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="general">General Inquiry</option>
                                                    <option value="project">Project Information</option>
                                                    <option value="investment">Investment Opportunity</option>
                                                    <option value="partnership">Partnership</option>
                                                    <option value="career">Career Opportunity</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Tell us how we can help you..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="bg-blue-950 text-white rounded-2xl shadow-xl p-8 md:p-10 h-full">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-navy-800 p-3 rounded-lg mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                                            <p className="text-navy-100">
                                                123 Business District<br />
                                                New Delhi, 110001<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy-800 p-3 rounded-lg mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                                            <p className="text-navy-100 mb-1">+91 123 456 7890</p>
                                            <p className="text-navy-100">+91 987 654 3210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy-800 p-3 rounded-lg mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Email Addresses</h3>
                                            <p className="text-navy-100 mb-1">info@dynamiceminent.com</p>
                                            <p className="text-navy-100">sales@dynamiceminent.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-navy-800 p-3 rounded-lg mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                                            <p className="text-navy-100 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-navy-100">Saturday: 10:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-navy-700">
                                    <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {[
                                            {
                                                icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                                label: "Twitter",
                                                color: "hover:bg-blue-400"
                                            },
                                            {
                                                icon: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
                                                label: "Facebook",
                                                color: "hover:bg-blue-600"
                                            },
                                            {
                                                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.980-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.980 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.980.059-1.280.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.980-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.40-1.439-1.40z",
                                                label: "Instagram",
                                                color: "hover:bg-pink-500"
                                            },
                                            {
                                                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.370-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.920-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                                label: "LinkedIn",
                                                color: "hover:bg-blue-700"
                                            }
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href="#"
                                                className={`w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                                                aria-label={social.label}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d={social.icon} />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 p-6 pb-0">Find Us Here</h2>
                        <div className="h-96 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.107842302205!2d77.206532!3d28.632485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1684832540725!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-b-2xl"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}