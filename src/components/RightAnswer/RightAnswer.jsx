import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';

function RightAnswer({ choosedBird }) {
  return (
    <div className="right-answer">
      <div className="right-answer__bird">
        <img className="right-answer__image" src={choosedBird.image} alt=""/>
        <div className="right-answer__main">
          <p className="right-answer__name">{choosedBird.name}</p>
          <p className="right-answer__species">{choosedBird.species}</p>
          <AudioPlayer
            customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
            layout='horizontal-reverse'
            showFilledProgress="false"
            showDownloadProgress="false"
            showJumpControls="false"
            src={choosedBird.audio}
          />
        </div>
      </div>
      <p className="right-answer__description"></p>
    </div>
  );
}

RightAnswer.propTypes = {
  choosedBird: PropTypes.objectOf(PropTypes.any),
};

export default RightAnswer;
