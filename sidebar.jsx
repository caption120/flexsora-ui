// src/sidebar.js

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./DocsPage.css"; // Using the same styles

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <nav>
        <div className="nav-group">
          <h3 className="nav-group-title">Getting Started</h3>
          <ul>
            {/* Use NavLink for automatic active styling */}
            <li>
              <NavLink to="/docs" end className="nav-link">
                Introduction
              </NavLink>
            </li>
            <li>
              <a href="#installation" className="nav-link">
                Installation
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-group">
          <h3 className="nav-group-title">Components</h3>
          <ul>
            <li>
              <a href="#theme" className="nav-link">
                Theme
              </a>
            </li>
            <li>
              <a href="#animations" className="nav-link">
                Animations <span className="tag pro-tag">pro</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-group">
          <h3 className="nav-group-title">App UI</h3>
          <ul>
            {/* CORRECTED LINK: Use the full path */}
            <li>
              <NavLink to="/docs/ai-input" className="nav-link">
                AI Input <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/special-card" className="nav-link">
                Special Card <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/expanded-tabs" className="nav-link">
                Expanded Tabs <span className="tag new-tag">new</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/docs/ai-chat" className="nav-link">
                AI Chat <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-input" className="nav-link">
                AI Chat Input <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message" className="nav-link">
                AI Chat Message <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-list" className="nav-link">
                AI Chat List <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-header" className="nav-link">
                AI Chat Header <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-footer" className="nav-link">
                AI Chat Footer <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-list" className="nav-link">
                AI Chat Message List <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-input" className="nav-link">
                AI Chat Message Input <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-actions" className="nav-link">
                AI Chat Message Actions <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/docs/ai-chat-message-attachment"
                className="nav-link"
              >
                AI Chat Message Attachment{" "}
                <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-reply" className="nav-link">
                AI Chat Message Reply <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-quote" className="nav-link">
                AI Chat Message Quote <span className="tag new-tag">new</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/docs/ai-chat-message-typing" className="nav-link">
                AI Chat Message Typing <span className="tag new-tag">new</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs/ai-chat-message-status" className="nav-link">
                AI Chat Message Status <span className="tag new-tag">new</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/docs/ai-chat-message-reactions"
                className="nav-link"
              >
                AI Chat Message Reactions{" "}
                <span className="tag new-tag">new</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
