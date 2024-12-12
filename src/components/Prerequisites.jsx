// components/Prerequisites.jsx
import React from 'react';

const Prerequisites = () => {
  const topics = [
    {
      title: "JavaScript Fundamentals",
      items: [
        "Arrow Functions",
        "Destructuring",
        "Spread Operator",
        "Promises & Async/Await",
        "ES6 Modules",
        "Classes"
      ],
      icon: "📚"
    },
    {
      title: "Development Setup",
      items: [
        "Node.js & npm",
        "Code Editor (VS Code)",
        "Git Basics",
        "Terminal Usage",
        "Browser Dev Tools"
      ],
      icon: "🛠️"
    },
    {
      title: "Web Fundamentals",
      items: [
        "HTML & CSS",
        "DOM Manipulation",
        "HTTP Requests",
        "API Integration",
        "Browser Events"
      ],
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Before You Start
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {topic.title}
              </h3>
              <ul className="space-y-2">
                {topic.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;
