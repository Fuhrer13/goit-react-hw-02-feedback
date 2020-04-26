import React from "react";
import PropTypes from "prop-types";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeddbackOptions/FeddbackOptions";

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
