import React, { Component } from "react";
import FeedbackOptions from "./Components/FeddbackOptions/FeddbackOptions";
import Notification from "./Components/Notification/Notification";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = (element) => {
    const { name } = element.target;
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(2);
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.totalFeedback}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </>
    );
  }
}
