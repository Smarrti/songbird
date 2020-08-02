import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';

function RightAnswer({ choosedBird }) {
  return (
    <div className="choosed-bird">
      <div className="choosed-bird__bird">
        <img className="choosed-bird__image" src={choosedBird.image} alt=""/>
        <div className="choosed-bird__main">
          <p className="choosed-bird__name">{choosedBird.name}</p>
          <p className="choosed-bird__species">{choosedBird.species}</p>
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
      <p className="choosed-bird__description"></p>
    </div>
  );
}

RightAnswer.propTypes = {
  choosedBird: PropTypes.objectOf(PropTypes.any),
};

export default RightAnswer;
