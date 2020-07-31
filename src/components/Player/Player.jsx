import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

function Player({ currentQuestion }) {
  return (
    <div className="player">
      <img src={currentQuestion.image} alt=""/>
      <div className="player__description">
        <div>{currentQuestion.bird}</div>
        <ReactPlayer url={currentQuestion.audioUrl} />
      </div>
    </div>
  );
}

Player.propTypes = {
  currentQuestion: PropTypes.objectOf(PropTypes.string),
};

export default Player;
