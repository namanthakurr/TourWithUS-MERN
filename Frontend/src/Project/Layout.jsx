// Project/Layout.jsx

import React, { useState, useEffect } from 'react';
import NAveeeee from './NAveeeee.jsx';
import Footer from './Footer.js';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop.jsx';
import Information from './Information.js';
import '../App.css';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); 

  // Handle initial page load
  useEffect(() => {
    const handleInitialLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500); 
    };

    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      window.addEventListener('load', handleInitialLoad);
    }

    return () => {
      window.removeEventListener('load', handleInitialLoad);
    };
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsLoading(true); // Show loader during route transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}/
      <ScrollToTop />
      <NAveeeee />
      <Outlet />
      <Footer />
      <Information />
    </div>
  );
};

export default Layout;
