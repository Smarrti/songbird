import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';
import questionsArray from './constants/questions';
import Question from './Question/Question.jsx';
import Button from './Button/Button.jsx';
import unknownBird from '../assets/bird.jpg';
import playSound from './functions/playSoung';

function createQuestions() {
  return questionsArray.map((category) => (
    category[Math.floor(Math.random() * category.length)]
  ));
}

export default function App() {
  const [headerLinks] = useState(headerLinksArray);
  const [questions] = useState(createQuestions());
  const [currentQuestion] = useState(questions[0]);
  const [choosedBird, setChoosedBird] = useState('***');
  const [questionPicture, setQuestionPicture] = useState(unknownBird);
  const [questionName, setQuestionName] = useState('***');
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreOfLevel, setScoreOfLevel] = useState(5);
  function checkAnswer(e) {
    const answer = e.target.textContent;
    if (answer.includes(currentQuestion.name)) {
      setQuestionPicture(currentQuestion.image);
      setQuestionName(currentQuestion.name);
      setNumberQuestion(numberQuestion + 1);
      setScore(score + scoreOfLevel);
      playSound('win');
    } else {
      setScoreOfLevel(scoreOfLevel - 1);
      playSound('lose');
    }
    setChoosedBird(questions[answer[0] - 1]);
  }
  return (
    <>
      <Header headerLinks={headerLinks} score={score} />
      <Player
        currentQuestion={currentQuestion}
        questionPicture={questionPicture}
        questionName={questionName}
      />
      <Question questions={questions} choosedBird={choosedBird} checkAnswer={checkAnswer} />
      <Button />
    </>
  );
}
