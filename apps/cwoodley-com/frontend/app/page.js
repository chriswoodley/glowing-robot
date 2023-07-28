import React from 'react';

export const metadata = {
  title: 'Chris Woodley',
  description: 'Chris Woodley'
};

function RootPage() {
  return (
      <>
        <h1>Services</h1>

        <ul className="pl-5">
          <li>Single Page Web Applications (Vue.js, React, Angular)</li>
          <li>Responsive Mobile First Front-End Development</li>
          <li>Wireframes / HTML Mockups</li>
          <li>Information Architecture</li>
          <li>User Interface Design</li>
        </ul>
      </>
    );
}

export default RootPage;
