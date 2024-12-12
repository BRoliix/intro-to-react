// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learn React
            </span>
            <br />
            <span className="text-gray-800">
              The Complete Guide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            React is a JavaScript library for building user interfaces. 
            Learn how to create powerful web applications with component-based architecture.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
