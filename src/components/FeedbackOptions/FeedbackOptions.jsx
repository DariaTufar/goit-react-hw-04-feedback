import React from 'react';
import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';
 
 
export const FeedbackOptions = ({ options, onCountFeedback }) => {
  return options.map(option => (
    <ButtonFeedback type="button" key={option} onClick={() => onCountFeedback(option)}>
      {option}{' '}
    </ButtonFeedback>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onCountFeedback: PropTypes.func.isRequired,
};
