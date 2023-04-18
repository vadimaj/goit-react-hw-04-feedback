import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from 'components/Notification';

import css from 'App.module.css';
export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    this.setState(prevState => {
      const key = e.target.id;
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, currValue) => acc + currValue,
      0
    );
  };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
        <Section title="Statistics" />

        {total() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
