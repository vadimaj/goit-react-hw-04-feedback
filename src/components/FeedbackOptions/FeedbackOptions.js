import React from 'react';
import PropTypes, { array } from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  return (
    <div className={css.controls}>
      {options.map(btnName => {
        return (
          <button
            key={btnName}
            id={btnName}
            className={css.btn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {btnName}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: array.isRequired,
};

export default FeedbackOptions;
