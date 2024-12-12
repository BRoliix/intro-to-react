// components/SetupGuide.jsx
import React from 'react';

const SetupGuide = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Getting Started
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Installation Steps */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">1. Environment Setup</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`# Install Node.js from nodejs.org

# Verify installation
node --version
npm --version

# Install create-react-app globally
npm install -g create-react-app`}</code>
              </pre>
            </div>
          </div>

          {/* Create New Project */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">2. Create New Project</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`# Create a new React project
npx create-react-app my-react-app

# Navigate to project directory
cd my-react-app

# Start development server
npm start`}</code>
              </pre>
            </div>
          </div>

          {/* Project Structure */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">3. Project Structure</h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`my-react-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   └── components/
  ├── package.json
  └── README.md`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;
