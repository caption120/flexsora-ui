// src/docspage.jsx

import React from 'react';
import './DocsPage.css';

const DocsPage = () => {
  return (
    <>
      <main className="main-content">
        <div className="breadcrumb">
          Docs › Introduction
        </div>
        <article>
          <section id="introduction">
            <h1 className="content-title">Introduction</h1>
            <p className="content-description">
              Beautifully designed components that you can copy and
              paste into your apps. Accessible. Customizable. Open Source.
            </p>
            <p className="content-paragraph">
              This is <strong>NOT</strong> a component library. It's a collection of re-usable components that you can copy and paste into your apps.
            </p>
          </section>

          <section id="not-a-library">
            <h2 className="content-subtitle">What do you mean by "not a component library?"</h2>
            <p className="content-paragraph">
              I mean you do not install it as a dependency from npm. You don't have to worry about version conflicts, breaking changes, or unnecessary bloat in your `node_modules` folder.
            </p>
            <p className="content-paragraph">
              Simply find the component you need for your project. Copy the code directly into your project's source files and begin customizing it to fit your exact needs. The code is yours to own and adapt.
            </p>
            <p className="content-paragraph">
              Use this collection as a reference to inspire and <i>build your own component libraries</i>, tailored specifically for your application's design system.
            </p>
          </section>

          <section id="faq" className="faq-section">
            <h2 className="content-title-faq">Frequently Asked Questions</h2>
            
            <h3 className="content-subtitle" id="faq-why-copy-paste">Why copy/paste and not a dependency package?</h3>
            <p className="content-paragraph">
              This approach puts you, the developer, in complete control. Here are a few key benefits:
            </p>
            <ul className="list">
              <li><strong>Total Ownership:</strong> Once you paste the code, it's part of your codebase. You can change anything you want without waiting for updates or fighting with library limitations.</li>
              <li><strong>No Black Boxes:</strong> You can see and understand all the code you're using. This makes debugging easier and helps you learn how the components work.</li>
              <li><strong>No Dependencies:</strong> You avoid adding another package to your `package.json`, which keeps your project lighter and reduces potential security vulnerabilities.</li>
              <li><strong>Infinite Customization:</strong> You are not limited by the props the library author decided to expose. You can refactor the component, change its logic, and style it however you see fit.</li>
            </ul>

            <h3 className="content-subtitle" id="faq-is-it-free">Is it free to use?</h3>
             <p className="content-paragraph">
              Yes, absolutely. All components are open source and free to use in your personal and commercial projects. Feel free to use them however you like.
            </p>
          </section>
        </article>
      </main>

      <aside className="right-sidebar">
        <div className="on-page-nav">
          <h3 className="on-page-title">On This Page</h3>
          <ul>
            <li><a href="#introduction" className="on-page-link">Introduction</a></li>
            <li><a href="#not-a-library" className="on-page-link">Not a Library?</a></li>
            <li><a href="#faq" className="on-page-link">FAQ</a></li>
            <li><a href="#faq-why-copy-paste" className="on-page-link" style={{ paddingLeft: '1rem' }}>› Why copy/paste?</a></li>
            <li><a href="#faq-is-it-free" className="on-page-link" style={{ paddingLeft: '1rem' }}>› Is it free?</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default DocsPage;