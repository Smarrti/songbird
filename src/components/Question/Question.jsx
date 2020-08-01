import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers.jsx';
import RightAnswer from '../RightAnswer/RightAnswer.jsx';

function Question({ questions }) {
  return (
    <div className="question">
      <Answers questions={questions} />
      <RightAnswer />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
};

export default Question;
