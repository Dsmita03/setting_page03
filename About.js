import React from 'react';

function About() {
  // You can add application-related information here
  const appName = "Your App Name";
  const appVersion = "1.0.0";
  const appDescription = "A description of your application.";

  return (
    <div>
      <h3>About {appName}</h3>
      <p>Version: {appVersion}</p>
      <p>{appDescription}</p>
      {/* Add additional application-related information here */}
      <div>
        <h4>Release Notes</h4>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Bug fixes</li>
          {/* Add release notes for different versions */}
        </ul>
      </div>
    </div>
  );
}

export default About;
