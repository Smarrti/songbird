import React from 'react';
import PropTypes from 'prop-types';

function Answers({ questions }) {
  return (
    <ul className="answers">
      {questions.map((question) => (
        <li className="answers__answer" key={question.name}>
          <span>•</span>
          {question.name}
        </li>
      ))}
    </ul>
  );
}

Answers.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any),
};

export default Answers;
