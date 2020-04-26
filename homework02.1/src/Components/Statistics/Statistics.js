import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        {positivePercentage > 0 && (
          <p>Positive feedback: {positivePercentage}%</p>
        )}
      </div>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
