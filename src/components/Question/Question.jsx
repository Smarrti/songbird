import React from 'react';
import PropTypes from 'prop-types';
import Answers from '../Answers/Answers.jsx';
import ChoosedBird from '../ChoosedBird/ChoosedBird.jsx';

function Question({ questions, choosedBird }) {
  return (
    <div className="question">
      <Answers questions={questions} />
      <ChoosedBird choosedBird={choosedBird} />
    </div>
  );
}

Question.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
  choosedBird: PropTypes.objectOf(PropTypes.any),
};

export default Question;
