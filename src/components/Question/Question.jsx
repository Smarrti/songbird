import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers.jsx';
import ChoosedBird from '../ChoosedBird/ChoosedBird.jsx';

function Question({ questions, choosedBird, checkAnswer }) {
  return (
    <div className="question">
      <Answers questions={questions} checkAnswer={checkAnswer} />
      <ChoosedBird choosedBird={choosedBird} />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
  choosedBird: PropTypes.objectOf(PropTypes.any),
  checkAnswer: PropTypes.func,
};

export default Question;
