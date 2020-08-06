import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import headerLinksArray from './constants/headerLinks';
import Player from './Player/Player.jsx';
import questionsArray from './constants/questions';
import Question from './Question/Question.jsx';
import Button from './Button/Button.jsx';
import unknownBird from '../assets/bird.jpg';
import playSound from './functions/playSoung';

function createArrayOfUniqueNumbers(max, length) {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    let number = Math.floor(Math.random() * max);
    while (array.includes(number)) {
      number = Math.floor(Math.random() * max);
    }
    array.push(number);
  }
  return array;
}

function generateRightAnswers() {
  const arr = createArrayOfUniqueNumbers(6, 6);
  return arr;
}

export default function App() {
  const [headerLinks] = useState(headerLinksArray);
  const [questions] = useState(questionsArray);
  const [rightAnswers] = useState(generateRightAnswers());
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [choosedBird, setChoosedBird] = useState({});
  const [questionPicture, setQuestionPicture] = useState(unknownBird);
  const [questionName, setQuestionName] = useState('***');
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreOfLevel, setScoreOfLevel] = useState(5);
  const [classesForButton, setClassesForButton] = useState('button button_not-active');
  function checkAnswer(e) {
    if (!e.target.classList.contains('answers__answer_not-correct')) {
      const answer = e.target.textContent;
      if (answer.includes(currentQuestion[rightAnswers[numberQuestion]].name)) {
        setQuestionPicture(currentQuestion[rightAnswers[numberQuestion]].image);
        setQuestionName(currentQuestion[rightAnswers[numberQuestion]].name);
        setNumberQuestion(numberQuestion + 1);
        setScore(score + scoreOfLevel);
        playSound('win');
        setClassesForButton('button');
      } else {
        setScoreOfLevel(scoreOfLevel - 1);
        e.target.classList.add('answers__answer_not-correct');
        playSound('lose');
      }
      setChoosedBird(currentQuestion[answer[0] - 1]);
    }
  }
  function nextLevel() {
    setCurrentQuestion(numberQuestion + 1);
    setNumberQuestion(numberQuestion + 1);
    setChoosedBird({});
    setQuestionPicture(unknownBird);
    setQuestionName('***');
    setScoreOfLevel(5);
    setClassesForButton('button button_not-active');
  }
  return (
    <>
      <Header headerLinks={headerLinks} score={score} />
      <Player
        currentQuestion={currentQuestion}
        rightAnswer={rightAnswers[numberQuestion]}
        questionPicture={questionPicture}
        questionName={questionName}
      />
      <Question questions={currentQuestion} choosedBird={choosedBird} checkAnswer={checkAnswer} />
      <Button classesForButton={classesForButton} nextLevel={nextLevel} />
    </>
  );
}
