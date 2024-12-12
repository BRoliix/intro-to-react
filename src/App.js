// App.js
import React from 'react';
import Hero from './components/Hero';
import Prerequisites from './components/Prerequisites';
import SetupGuide from './components/SetupGuide';
import JavaScriptPrerequisites from './components/JavaScriptPrerequisites';
import Concepts from './components/Concepts';
import CodeExamples from './components/CodeExamples';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="relative pt-16">
        <Hero />
        <Prerequisites />
        <SetupGuide />
        <JavaScriptPrerequisites />
        <Concepts />
        <CodeExamples />
      </main>
    </div>
  );
}

export default App;
