import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';

function Player({ currentQuestion }) {
  return (
    <div className="player">
      <img src={currentQuestion.image} alt=""/>
      <div className="player__description">
        <div>{currentQuestion.name}</div>
        <AudioPlayer showSkipControls="true" src={currentQuestion.audio} />
      </div>
    </div>
  );
}

Player.propTypes = {
  currentQuestion: PropTypes.objectOf(PropTypes.any),
};

export default Player;
