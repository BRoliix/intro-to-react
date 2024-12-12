// components/Features.jsx
import React from 'react';

const features = [
  {
    title: "Component-Based",
    description: "Build encapsulated components that manage their own state.",
    icon: "🧩"
  },
  {
    title: "Virtual DOM",
    description: "Optimized rendering for better performance.",
    icon: "⚡"
  },
  {
    title: "Rich Ecosystem",
    description: "Access thousands of ready-to-use components.",
    icon: "🛠️"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose React?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
