import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { Loader2 } from 'lucide-react';

// Set your Builder public API key
builder.init('3c6461bfa5d2456eae766a5a705270df');

/**
 * BuilderPage Component
 * 
 * This component renders content from Builder.io based on the current URL path.
 * It handles loading states, previewing, and fallback content if no Builder
 * content is found for the current path.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.modelName - Builder model name to use (default: 'page')
 */
const BuilderPage: React.FC<{ modelName?: string }> = ({ modelName = 'page' }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    // Get the current path without the domain and leading slash
    const path = window.location.pathname === '/' 
      ? '/home' // Use '/home' for the root path
      : window.location.pathname;
      
    // Fetch content from Builder for the current page
    async function fetchContent() {
      setLoading(true);
      const content = await builder
        .get(modelName, {
          url: path,
          options: { includeRefs: true }
        })
        .promise();
        
      setContent(content);
      setLoading(false);
    }

    fetchContent();
  }, [modelName]);

  // Show a loading spinner while content is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
        <span className="ml-3 text-lg text-gray-600">Loading content...</span>
      </div>
    );
  }

  // Show the Builder content if it exists
  if (content) {
    return <BuilderComponent model={modelName} content={content} />;
  }

  // Show a message if no content is found and not in preview mode
  if (!isPreviewing) {
    return (
      <div className="text-center py-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Content Found</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          There is no Builder.io content published for this page yet.
          Log in to the Builder.io dashboard to create content for this page.
        </p>
        <a 
          href={`https://builder.io/content/${modelName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Content in Builder.io
        </a>
      </div>
    );
  }

  // Show nothing in preview mode if no content exists yet
  return null;
};

export default BuilderPage;