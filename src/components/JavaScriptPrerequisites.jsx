// components/JavaScriptPrerequisites.jsx
import React from 'react';

const JavaScriptPrerequisites = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Essential JavaScript Concepts
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Arrow Functions */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm">Arrow Functions</span>
            </div>
            <div className="p-6 bg-gray-900 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;

// Arrow Function with React
const MyComponent = () => {
  return <div>Hello React!</div>;
};`}</code>
              </pre>
            </div>
          </div>

          {/* Destructuring */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm">Destructuring</span>
            </div>
            <div className="p-6 bg-gray-900 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`// Object Destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Array Destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;

// React Props Destructuring
const UserCard = ({ name, age }) => (
  <div>
    <h2>{name}</h2>
    <p>{age}</p>
  </div>
);`}</code>
              </pre>
            </div>
          </div>

          {/* Async/Await */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <span className="text-gray-400 text-sm">Async/Await</span>
            </div>
            <div className="p-6 bg-gray-900 overflow-x-auto">
              <pre className="text-gray-300 font-mono">
                <code>{`// Async Function in React
const UserComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/users');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* Render data */}</div>;
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptPrerequisites;
