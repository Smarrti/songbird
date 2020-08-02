import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers.jsx';
import RightAnswer from '../RightAnswer/RightAnswer.jsx';

function Question({ questions, choosedBird }) {
  return (
    <div className="question">
      <Answers questions={questions} />
      <RightAnswer choosedBird={choosedBird} />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
  choosedBird: PropTypes.arrayOf(PropTypes.any),
};

export default Question;
