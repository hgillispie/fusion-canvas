import React from 'react';

/**
 * HelloWorld Component
 * 
 * A simple example component that can be used in the Builder.io editor.
 * This demonstrates how to create components that accept properties
 * which can be configured in the Builder visual editor.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.name - Name to display in the greeting
 */
const HelloWorld: React.FC<{ name: string }> = ({ name = 'World' }) => {
  return (
    <div className="p-6 my-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
        Hello, {name}!
      </h2>
      <p className="text-gray-700">
        This is a custom component registered with Builder.io. You can create more
        components like this and register them in the builder-registry.tsx file.
      </p>
    </div>
  );
};

export default HelloWorld;