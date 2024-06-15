import React from "react";
import "./StopWaitButton.css";

const StopWaitButton = ({ setStopButtonClick }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => {
          setStopButtonClick();
        }}
        className="button-92"
        role="button"
      >
        Stop The Wait
      </button>
    </div>
  );
};
export default StopWaitButton;
