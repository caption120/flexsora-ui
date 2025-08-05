// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './header';
import Hiro from './hiro';
import DocsPage from './docspage';
import AIInput from './Aiinput';
import Sidebar from './sidebar';
import './DocsPage.css'; 
import SpecialCard from './specialcard';

// Layout for the homepage
function HomePage() {
  return (
    <div className="app">
      <Header />
      <Hiro />
    </div>
  );
}

// Layout for all documentation pages
function DocsLayout() {
  return (
    <div className="app">
      <Header />
      <div className="docs-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<DocsPage />} />
          <Route path="ai-input" element={<AIInput />} />
          <Route path="special-card" element={<SpecialCard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;