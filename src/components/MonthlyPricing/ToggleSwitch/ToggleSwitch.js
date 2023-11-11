import React, { useState } from 'react';
import './ToggleSwitch.css'; // Make sure to create a corresponding CSS file for styles

const ToggleSwitch = ({ label, onChange }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    const newToggleState = !toggle;
    setToggle(newToggleState);
    onChange(newToggleState); // Pass the new toggle state to the parent component
  };

  return (
    <div className="toggle-switch">
      <label>
        {label}
        <input
          type="checkbox"
          checked={toggle}
          onChange={handleToggle}
        />
        <span className="slider round"></span> {/* This is for the styled slider */}
      </label>
    </div>
  );
};

export default ToggleSwitch;
