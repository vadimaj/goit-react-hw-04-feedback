import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={css['list-item']}>Good: {good}</li>
    <li className={css['list-item']}>Neutral: {neutral}</li>
    <li className={css['list-item']}>Bad: {bad}</li>
    <li className={css['list-item']}>Total: {total()}</li>
    <li className={css['list-item']}>
      Positive feedback: {positivePercentage()}%
    </li>
  </ul>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
