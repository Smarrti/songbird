import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PropTypes from 'prop-types';

function Player({ currentQuestion, questionPicture, questionName }) {
  return (
    <div className="player">
      <img className="player__image" src={questionPicture} alt=""/>
      <div className="player__description">
        <div className="player__bird">{questionName}</div>
        <div className="player__line"></div>
        <AudioPlayer
          customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          layout='horizontal-reverse'
          showFilledProgress="false"
          showDownloadProgress="false"
          showJumpControls="false"
          src={currentQuestion.audio} />
      </div>
    </div>
  );
}

Player.propTypes = {
  currentQuestion: PropTypes.arrayOf(PropTypes.any),
  questionPicture: PropTypes.string,
  questionName: PropTypes.string,
};

export default Player;
