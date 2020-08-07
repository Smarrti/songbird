import React from 'react';
import PropTypes from 'prop-types';

function GameEnd({ score, isVisible }) {
  return (
    <>
      {isVisible
        && <div className="game-end">
          <div className="game-end__wrapper">
            <p className="game-end__congratulations">Поздравляем!</p>
            <div className="game-end__results">Вы прошли викторину и набрали {score} из 30 баллов</div>
            {score !== 30
              && <div className="button">Попробовать ещё раз</div>
            }
          </div>
        </div>
      }
    </>
  );
}

GameEnd.propTypes = {
  score: PropTypes.number,
  isVisible: PropTypes.bool,
};

export default GameEnd;
