import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers.jsx';

function Question({ questions }) {
  return (
    <div className="question">
      <Answers questions={questions} />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
};

export default Question;
