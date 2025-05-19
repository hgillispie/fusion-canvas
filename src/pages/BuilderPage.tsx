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
  const isPreviewing = useIsPreviewing();
  const path = window.location.pathname === '/' ? '/' : window.location.pathname;

  useEffect(() => {
    builder
      .get(modelName, { url: path, options: { includeRefs: true } })
      .promise()
      .then(setContent);
  }, [modelName, path]);

  if (!content && !isPreviewing) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Content Found</h2>
        <a 
          href={`https://builder.io/content/page`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Create Content in Builder.io
        </a>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 text-indigo-600 animate-spin" />
      </div>
    );
  }

  return <BuilderComponent model={modelName} content={content} />;
};

export default BuilderPage;