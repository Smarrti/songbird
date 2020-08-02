import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';
import questionsArray from './constants/questions';
import Question from './Question/Question.jsx';

function createQuestions() {
  return questionsArray.map((category) => (
    category[Math.floor(Math.random() * category.length)]
  ));
}

export default function App() {
  const [headerLinks] = useState(headerLinksArray);
  const [questions] = useState(createQuestions());
  const [currentQuestion] = useState(questions[0]);
  const [choosedBird] = useState(questions[0]);
  const [score] = useState(0);
  return (
    <>
      <Header headerLinks={headerLinks} score={score} />
      <Player currentQuestion={currentQuestion} />
      <Question questions={questions} choosedBird={choosedBird} />
    </>
  );
}
