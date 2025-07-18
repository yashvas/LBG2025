import React from "react";
import "./ProgressBar.css";

type ProgressBarProps = {
  progress: number; // 0 to 100
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, borderRadius: progress === 100 ? "20px" : "20px 0 0 20px" }}
      ></div>
      <span className="progress-text">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
