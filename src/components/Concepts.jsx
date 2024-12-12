// components/Concepts.jsx
import React from 'react';

const concepts = [
  {
    title: "Components",
    description: "Learn about React components - the building blocks of React applications. Understand functional and class components.",
    icon: "🧩"
  },
  {
    title: "State & Props",
    description: "Master state management and props to handle data flow in your applications.",
    icon: "📊"
  },
  {
    title: "Hooks",
    description: "Explore React Hooks to add state and other React features to functional components.",
    icon: "🎣"
  },
  {
    title: "JSX",
    description: "Write HTML-like code in JavaScript using JSX, making your components more readable.",
    icon: "⚛️"
  },
  {
    title: "Virtual DOM",
    description: "Understand how React's Virtual DOM optimizes rendering performance.",
    icon: "⚡"
  },
  {
    title: "Lifecycle",
    description: "Learn component lifecycle and effects to manage component behavior.",
    icon: "🔄"
  }
];

const Concepts = () => {
  return (
    <section id="concepts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Core Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{concept.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {concept.title}
              </h3>
              <p className="text-gray-600">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concepts;
