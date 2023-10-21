import React from "react";

const CarbonRewardCard = ({ logo, text, subtext, up, down, statText }) => {
  return (
    <div className="carbon-rewards-stats">
      <div className="carbon-rewards-stats-logo-wrapper">
        <span className="carbon-rewards-stats-logo">
          <i class={`fa-solid ${logo}`}></i>
        </span>
        {up ? (
          <span className="carbon-rewards-stats-logo-2 carbon-rewards-stats-up">
            <i class="fa-solid fa-circle-up"></i>
            {statText}
          </span>
        ) : null}
        {down ? (
          <span className="carbon-rewards-stats-logo-2 carbon-rewards-stats-down">
            <i class="fa-solid fa-circle-down"></i>
            {statText}
          </span>
        ) : null}
      </div>
      <p className="carbon-rewards-stats-text">{text}</p>
      <p className="carbon-rewards-stats-subtext">{subtext}</p>
    </div>
  );
};

export default CarbonRewardCard;
