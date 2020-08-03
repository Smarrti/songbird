import React from 'react';
import PropTypes from 'prop-types';

function Answers({ questions, checkAnswer }) {
  return (
    <ul className="answers">
      {questions.map((question) => (
        <li className="answers__answer" key={question.name} onClick={checkAnswer}>
          <span>•</span>
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
