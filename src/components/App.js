import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';
import questionsArray from './constants/questions';

function createQuestions() {
  return questionsArray.map((category) => (
    category[Math.floor(Math.random() * category.length)]
  ));
}

export default function App() {
  const [headerLinks] = useState(headerLinksArray);
  const [questions] = useState(createQuestions());
  const [currentQuestion] = useState(questions[0]);
  return (
    <>
      <Header headerLinks={headerLinks} />
      <Player currentQuestion={currentQuestion} />
    </>
  );
}
