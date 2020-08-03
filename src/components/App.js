import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';
import questionsArray from './constants/questions';
import Question from './Question/Question.jsx';
import Button from './Button/Button.jsx';
import unknownBird from '../assets/bird.jpg';

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
  const [questionPicture] = useState(unknownBird);
  const [questionName] = useState('***');
  const [score] = useState(0);
  return (
    <>
      <Header headerLinks={headerLinks} score={score} />
      <Player
        currentQuestion={currentQuestion}
        questionPicture={questionPicture}
        questionName={questionName}
      />
      <Question questions={questions} choosedBird={choosedBird} />
      <Button />
    </>
  );
}
