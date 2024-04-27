import React, { useEffect, useState } from 'react';
import './GetDash.css'; // Import your CSS file
import dashboardImage from './dash.png';

export default function GetDash() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) { // Adjust this value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`get-dash-container ${isVisible ? 'visible' : ''}`}>
      <div className="get-dash-image">
        <img src={dashboardImage} alt="Dashboard" />
      </div>
      <div className="get-dash-content">
        <h2 className="typewriter">
          Unlock the Power of Financial Management!
        </h2>
        <p>
          Transform your financial journey with our cutting-edge dashboard. Whether you're a seasoned investor or just starting out, our platform empowers you to take control of your finances like never before. Features: Comprehensive Insights: Gain deep insights into your spending habits, investment performance, and financial health with our intuitive analytics tools. Budget Tracking: Stay on top of your budgeting goals with real-time tracking and personalized recommendations.
        </p>
        <button className="get-dash-button">Get Your Dashboard!</button>
      </div>
    </div>
  );
}
