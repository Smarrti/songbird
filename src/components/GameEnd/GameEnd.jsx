import React from 'react';
import PropTypes from 'prop-types';

function GameEnd({ score }) {
  return (
    <div className="game-end">
      <p className="game-end__congratulations">Поздравляем!</p>
      <div className="game-end__results">Вы прошли викторину и набрали {score} из 30 баллов</div>
      {score !== 30
        && <div className="button">Попробовать ещё раз</div>
      }
    </div>
  );
}

GameEnd.propTypes = {
  score: PropTypes.number,
};

export default GameEnd;
