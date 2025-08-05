// src/pages/AIInput.jsx

import React, { useState } from "react";
// 1. IMPORT THE SYNTAX HIGHLIGHTER AND THEME
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./AIInput.css"; 

const AIInput = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [isCopied, setIsCopied] = useState(false);

  // --- JSX and CSS code strings remain unchanged ---
  const componentJsxCode = `
import React from 'react';
import './AIInput.css'; // Import the CSS

// Add the required SVG icons or import them
const AttachmentIcon = () => (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 0 0-3 0v9a2.5 2.5 0 0 0 5 0V5A.5.5 0 0 1 11 5v7a.5.5 0 0 1-1 0V3a.5.5 0 0 1-1-.5z" /></svg>
);
const SearchIcon = () => (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" style={{ color: '#ff8a65' }}><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1 0 13A6.5 6.5 0 0 1 8 1.5zM4.5 8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5z" /></svg>
);
const SendIcon = () => (
    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l4.743-14.425zM11.832 10.11l-3.328-5.263 5.512-2.756-2.184 8.02z" /></svg>
);


const AiInputComponent = () => {
  return (
    <div className="ai-input-container">
      <textarea
        className="ai-textarea"
        placeholder="Search the web..."
      ></textarea>
      <div className="ai-actions">
        <div className="ai-left-actions">
          <button className="ai-action-btn" title="Attach file">
            <AttachmentIcon />
          </button>
          <button className="ai-search-btn">
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
        <button className="ai-action-btn" title="Send">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default AiInputComponent;
  `;

  const componentCssCode = `
/* Styles for the AI Input component itself */
.ai-input-container {
  width: 100%;
  max-width: 500px;
  background-color: #1c1c1c;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #3f3f46; /* Using a theme variable would be better */
}

.ai-textarea {
  background: none;
  border: none;
  color: #fafafa;
  font-family: inherit;
  font-size: 1rem;
  resize: none;
  height: 60px;
  width: 100%;
}

.ai-textarea:focus {
  outline: none;
}

.ai-textarea::placeholder {
  color: #71717a;
}

.ai-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-left-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ai-action-btn {
  background: none;
  border: 1px solid transparent;
  color: #a1a1aa;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

.ai-action-btn:hover {
  background-color: #27272a;
  color: #fafafa;
}

.ai-search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2a2220;
  color: #ff8a65;
  border: 1px solid #5d3931;
  padding: 6px 12px;
  border-radius: 99px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.ai-search-btn:hover {
  background-color: #3e2e2a;
  border-color: #ea580c;
  color: #fff;
}

.ai-search-btn:hover svg {
  color: #fff !important;
}


  `;

  const handleCopyCode = () => {
    const codeToCopy =
      activeTab === "code" ? componentJsxCode : componentCssCode;

    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); 
    });
  };

  // 2. CREATE A DEDICATED FUNCTION TO RENDER CONTENT
  const renderContent = () => {
    if (activeTab === "preview") {
      return (
        <div className="ai-input-preview-wrapper">
          <div className="ai-input-container">
            <textarea
              className="ai-textarea"
              placeholder="Search the web..."
            ></textarea>
            <div className="ai-actions">
              <div className="ai-left-actions">
                <button className="ai-action-btn" title="Attach file">
                  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 0 0-3 0v9a2.5 2.5 0 0 0 5 0V5A.5.5 0 0 1 11 5v7a.5.5 0 0 1-1 0V3a.5.5 0 0 1-1-.5z" /></svg>
                </button>
                <button className="ai-search-btn">
                  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" style={{ color: "#ff8a65" }}><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1 0 13A6.5 6.5 0 0 1 8 1.5zM4.5 8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V8.5a.5.5 0 0 1 .5-.5z" /></svg>
                  <span>Search</span>
                </button>
              </div>
              <button className="ai-action-btn" title="Send">
                <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l4.743-14.425zM11.832 10.11l-3.328-5.263 5.512-2.756-2.184 8.02z" /></svg>
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    // Logic for displaying the highlighted code
    const codeContent = activeTab === 'code' ? componentJsxCode : componentCssCode;
    const language = activeTab === 'code' ? 'jsx' : 'css';

    return (
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          backgroundColor: '#0d1117',
          borderRadius: '8px',
          maxHeight: '400px', // Same height as SpecialCard for consistency
          scrollbarWidth: 'none',
        }}
        codeTagProps={{
          style: { 'WebkitOverflowScrolling': 'touch' },
          className: 'hide-scrollbar'
        }}
      >
        {codeContent.trim()}
      </SyntaxHighlighter>
    );
  };

  return (
    <main className="main-content">
      <div className="breadcrumb">Docs › AI Input</div>
      <h1 className="content-title">AI Input</h1>
      <p className="content-description">A Custom Text area like Chat-Gpt</p>

      <div className="component-tabs">
        <button className={`tab-btn ${activeTab === "preview" ? "active" : ""}`} onClick={() => setActiveTab("preview")}>Preview</button>
        <button className={`tab-btn ${activeTab === "code" ? "active" : ""}`} onClick={() => setActiveTab("code")}>Code</button>
        <button className={`tab-btn ${activeTab === "css" ? "active" : ""}`} onClick={() => setActiveTab("css")}>CSS</button>
      </div>

      <div className="component-display-area">
        {activeTab !== "preview" && (
          <button className={`copy-code-btn ${isCopied ? "copied" : ""}`} onClick={handleCopyCode} title="Copy code">
            {isCopied ? (
              <><svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" /></svg><span>Copied!</span></>
            ) : (
              <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2V2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" /></svg>
            )}
          </button>
        )}
        {/* 3. CALL THE RENDER FUNCTION HERE */}
        {renderContent()}
      </div>
    </main>
  );
};

export default AIInput;