import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title }) => <h2 className={css.title}>{title}</h2>;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
