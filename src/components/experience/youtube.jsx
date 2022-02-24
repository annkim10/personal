import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {
  render() {
    const opts = {
      height: '280',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: 1197
      },
    };

    return <YouTube videoId="edX8kZcE4p8?t=1197" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube