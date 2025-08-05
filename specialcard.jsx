// src/pages/SpecialCard.jsx

import React, { useState } from 'react';
// Correctly import the highlighter and the desired theme
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './SpecialCard.css';
import './AIInput.css'; // For styling the tabs and code blocks

const SpecialCard = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopied, setIsCopied] = useState(false);

  // --- JSX and CSS Code Strings remain the same ---
  const componentJsxCode = `
import React from 'react';
import './CookieConsentCard.css';

const CookieConsentCard = () => {
  return (
    <div className="cookie-consent-card">
      <div className="cookie-icon">🍪</div>
      <h3 className="card-title">We use cookies.</h3>
      <p className="card-description">
        This website uses cookies to ensure you get the best experience on our site.
      </p>
      <div className="button-group">
        <button className="allow-btn">Allow</button>
        <button className="decline-btn">Decline</button>
      </div>
    </div>
  );
};

export default CookieConsentCard;
  `;

  const componentCssCode = `
/* --- Styles for the Cookie Consent Card --- */
.cookie-consent-card {
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  max-width: 420px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  transition: transform 0.3s ease;
}

.cookie-consent-card:hover {
  transform: scale(1.02);
}

.cookie-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.card-description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #cfcfcf;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.allow-btn,
.decline-btn {
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.allow-btn {
  background-color: #4caf50;
  color: white;
}

.allow-btn:hover {
  background-color: #43a047;
  transform: translateY(-2px);
}

.decline-btn {
  background-color: #f44336;
  color: white;
}

.decline-btn:hover {
  background-color: #e53935;
  transform: translateY(-2px);
}

/* ... etc. ... */
  `;

  const handleCopyCode = () => {
    const codeToCopy =
      activeTab === "code" ? componentJsxCode : componentCssCode;
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };
  
  // --- This is the single, corrected renderContent function ---
  const renderContent = () => {
    if (activeTab === 'preview') {
      return (
        <div className="preview-wrapper-center cookie-preview-wrapper">
          <div className="cookie-consent-card">
            <div className="cookie-icon">🍪</div>
            <h3 className="card-title">We use cookies.</h3>
            <p className="card-description">
              This website uses cookies to ensure you get the best experience on our site.
            </p>
            <div className="button-group">
              <button className="allow-btn">Allow</button>
              <button className="decline-btn">Decline</button>
            </div>
          </div>
        </div>
      );
    }

    // Determine the correct language and code content based on the active tab
    const codeContent = activeTab === 'code' ? componentJsxCode : componentCssCode;
    const language = activeTab === 'code' ? 'jsx' : 'css';

    // Return the SyntaxHighlighter component with the correct props
    return (
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines
        // Use `customStyle` to control the container's appearance
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          backgroundColor: '#0d1117',
          borderRadius: '8px',
          maxHeight: '400px', // Ensures a scrollbar appears for long code
          // Scrollbar hiding properties
          scrollbarWidth: 'none', /* For Firefox */
        }}
        // More styles to hide the scrollbar in Webkit browsers (Chrome, Safari)
        codeTagProps={{
          style: { 'WebkitOverflowScrolling': 'touch' }, // For smooth scrolling on mobile
          className: 'hide-scrollbar'
        }}
      >
        {codeContent.trim()}
      </SyntaxHighlighter>
    );
  };


  return (
    <main className="main-content">
      <div className="breadcrumb">Docs › Special Card</div>
      <h1 className="content-title">Special Card</h1>
      <p className="content-description">A friendly cookie consent prompt.</p>

      <div className="component-tabs">
        <button
          className={`tab-btn ${activeTab === "preview" ? "active" : ""}`}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={`tab-btn ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
        <button
          className={`tab-btn ${activeTab === "css" ? "active" : ""}`}
          onClick={() => setActiveTab("css")}
        >
          CSS
        </button>
      </div>

      <div className="component-display-area">
        {activeTab !== "preview" && (
          <button
            className={`copy-code-btn ${isCopied ? "copied" : ""}`}
            onClick={handleCopyCode}
            title="Copy code"
          >
            {isCopied ? (
              <><svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" /></svg><span>Copied!</span></>
            ) : (
              <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2V2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" /></svg>
            )}
          </button>
        )}
        {renderContent()}
      </div>
    </main>
  );
};

export default SpecialCard;