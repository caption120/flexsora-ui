import React from 'react';
import './Hiro.css';
import { useNavigate } from 'react-router-dom';

const Hiro = () => {
  const navigate = useNavigate();

  const HandleGetStarted = () => {
    navigate('/docs');
  }
  return (
    <main className="hero-section">
      <a href="https://www.producthunt.com" target="_blank" rel="noopener noreferrer" className="product-hunt-banner">
        <span>FIND US ON</span>
        <span className="product-hunt-logo">P</span>
        <span>Product Hunt</span>
        <span className="upvote-count">▲ 53</span>
      </a>
      <h1 className="main-headline">
        Components crafted for <br />
        <span className="highlight-text">Modern Websites</span>
      </h1>
      <div className="cta-container">
        <button className="get-started-btn" aria-label="Get started with our components" onClick={HandleGetStarted}>
          <svg
            className="btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 14 4-4" />
            <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          </svg>
          <span>Get started</span>
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="down-arrows">↓↓↓</div>
      <p className="sub-headline">
        To make your dream Website live by just{' '}
        <strong>Copy and paste</strong>
      </p>
    </main>
  );
};

export default Hiro;