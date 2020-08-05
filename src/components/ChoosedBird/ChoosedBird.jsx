import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';
import unknownBird from '../../assets/bird.jpg';

function RightAnswer({ choosedBird }) {
  return (
    <div className="choosed-bird">
      <div className="choosed-bird__bird">
        <img
          className="choosed-bird__image"
          src={typeof choosedBird.image === 'string' ? choosedBird.image : unknownBird}
          alt=""
        />
        <div className="choosed-bird__main">
          <p className="choosed-bird__name">
            {typeof choosedBird.name === 'string' ? choosedBird.name : '***'}
          </p>
          <p className="choosed-bird__species">
            {typeof choosedBird.species === 'string' ? choosedBird.species : ' '}
          </p>
          <AudioPlayer
            customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
            layout='horizontal-reverse'
            showFilledProgress="false"
            showDownloadProgress="false"
            showJumpControls="false"
            src={choosedBird.audio}
            preload="metadata"
            volume="0.5"
          />
        </div>
      </div>
      <p className="choosed-bird__description">{choosedBird.description}</p>
    </div>
  );
}

RightAnswer.propTypes = {
  choosedBird: PropTypes.any,
};

export default RightAnswer;
