import { useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from 'components/Notification';

import css from 'App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const handleFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (acc, currValue) => acc + currValue,
      0
    );
  };
  const countPositiveFeedbackPercentage = () =>
    Math.round((feedback.good / countTotalFeedback()) * 100);

  const total = countTotalFeedback;
  const percentage = countPositiveFeedbackPercentage;

  return (
    <div className={css.container}>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />
      <Section title="Statistics" />

      {total() !== 0 ? (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={percentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
