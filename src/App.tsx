import React from 'react';
import Layout from './components/Layout';
import BuilderPage from './pages/BuilderPage';

// Import the builder registry to register components
import './builder-registry';

/**
 * App Component
 * 
 * The main application component that sets up the layout and Builder.io page rendering.
 * This serves as the entry point to the application.
 */
function App() {
  return (
    <Layout>
      <BuilderPage />
    </Layout>
  );
}

export default App;