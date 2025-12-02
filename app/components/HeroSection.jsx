"use client";
import { FiDownload } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id ="Hero"
     className="pt-32 pb-20 px-6 text-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      
      {/* Availability Badge */}
      <div className="inline-block px-6 py-2 bg-white/70 backdrop-blur-md rounded-full text-purple-700 font-medium shadow-sm border border-purple-200 mb-10">
        🌟 Available for new opportunities
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Hello I'm
        <br />
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 text-transparent bg-clip-text">
          Akanksha Mohite
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-700">
        Full-stack developer specializing in building exceptional web applications 
        with modern technologies. Transforming ideas into elegant, scalable 
        solutions.
      </p>

      {/* Buttons */}
      <div  
      className="flex justify-center gap-4 mt-10">
        <a href="#Projects"   // your project page route
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition flex items-center gap-2 inline-flex">
            Explore My Work ↓
        </a>

        <a href="#Contact"  className="px-8 py-3 bg-white hover:bg-gray-100 border rounded-lg shadow-sm transition">
          Let’s Connect
       </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-12 text-gray-700 text-2xl">
        <a href="https://github.com/mohiteakanksha" className="hover:text-purple-600"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/mohiteakanksha/" className="hover:text-purple-600"><FiLinkedin /></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akankshamohite700@gmail.com" target="_blank" rel="noopener noreferrer"><FiMail size={24} /></a>
      </div>

    </section>
  );
}
