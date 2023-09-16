// HiddenApp.js
import React from 'react';

const HiddenApp = ({ onClose }) => {
  return (
    <div>
      {/* Your hidden app UI */}
      <h2>Hidden App</h2>
      <p>This is your hidden app content.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HiddenApp;
