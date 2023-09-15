import React, { useState, useEffect } from 'react';
import './Theme.css'; // Import your CSS file


function Theme() {
  // State to manage theme settings
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Effect to apply the selected theme to the entire application
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div>
      <h3>Theme Settings</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Add additional theme-related settings here */}
    </div>
  );
}

export default Theme;
