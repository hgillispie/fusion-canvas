import React from 'react';
import { Building } from 'lucide-react';

/**
 * Layout Component
 * 
 * This component provides a consistent layout wrapper for all pages.
 * It includes a header and footer, with the main content area in between.
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render in the layout
 */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Building className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-xl font-semibold text-gray-800">Builder.io + React</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="https://builder.io/c/docs/developers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Docs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Built with Builder.io and React
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;