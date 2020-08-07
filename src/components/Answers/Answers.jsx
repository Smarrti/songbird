import React from 'react';
import PropTypes from 'prop-types';

function Answers({ questions, checkAnswer, classesOfAllAnswers }) {
  return (
    <ul className="answers">
      {questions.map((question, index) => (
        <li className={classesOfAllAnswers} key={question.name} onClick={checkAnswer}>
          <span>{index + 1}.</span>
          {question.name}
        </li>
      ))}
    </ul>
  );
}

Answers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
  checkAnswer: PropTypes.func,
  classesOfAllAnswers: PropTypes.string,
};

export default Answers;
