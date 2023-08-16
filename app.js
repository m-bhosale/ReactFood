import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './src/components/Header'
import {Footer} from './src/components/Footer'
import Body from './src/components/Body';
// Import the image using the relative path

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer/> */}
    </div>
  );
};  

// Use createRoot to render your application
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<AppLayout />);
