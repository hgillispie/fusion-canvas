import React from 'react';
import Layout from './components/Layout';
import BuilderPage from './pages/BuilderPage';
import './builder-registry';

/**
 * App Component
 * 
 * The main application component that sets up the layout and Builder.io page rendering.
 * This serves as the entry point to the application.
 */
const App = () => (
  <Layout>
    <BuilderPage />
  </Layout>
);

export default App;