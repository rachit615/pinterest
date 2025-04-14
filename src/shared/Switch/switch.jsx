import React from "react";

export default function Switch({ isOn, onToggle, label }) {
  console.log("ison", isOn);
  return (
    <div className={`switch ${isOn ? "on" : ""}`}>
      <label>
        <input type="checkbox" checked={isOn} onChange={onToggle} />
        <span className="switch-track"></span>
      </label>
    </div>
  );
}
