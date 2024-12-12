// components/CodeSection.jsx
import React from 'react';

const CodeSection = () => {
  return (
    <section id="code" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Clean & Simple Code
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
          <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-6 bg-gray-900 overflow-x-auto">
            <pre className="text-gray-300 font-mono">
              <code>{`function Welcome() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1>Hello React!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
