import React from 'react';
import PropTypes from 'prop-types';

function Answers({ questions, checkAnswer }) {
  return (
    <ul className="answers">
      {questions.map((question, index) => (
        <li className="answers__answer" key={question.name} onClick={checkAnswer}>
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
};

export default Answers;
