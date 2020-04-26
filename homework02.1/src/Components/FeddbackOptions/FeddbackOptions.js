import React from "react";
import PropTypes from "prop-types";

const Feedback = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);
  return (
    <>
      {buttons.map((option) => (
        <button
          key={option}
          name={option}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option}
        </button>
      ))}
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
