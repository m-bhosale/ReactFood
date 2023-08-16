import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './src/components/Header'
import Body from './src/components/Body';
// Import the image using the relative path

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Use createRoot to render your application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
