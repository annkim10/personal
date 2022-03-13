import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {

  render() {

    const opts = {
      height: this.props.mobile ? '197' : '394',
      width: this.props.mobile ? '350' : '700',
    };

    return <YouTube videoId="NixC6V51_Xo" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube