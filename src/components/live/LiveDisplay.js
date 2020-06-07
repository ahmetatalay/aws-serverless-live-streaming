import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import aws_video_config from '../../aws-video-exports.js';
import PlayerDisplay from '../player'

const videoUrl = aws_video_config.awsOutputLiveHLS;


class LiveDisplay extends Component {
  render() {
      return (
        <div>
              <br/><br/><br/><br/>
            <Container textAlign='center'><h1>Octank Live Streaming</h1></Container>
            <Container textAlign='justified' >
                <PlayerDisplay source_url={videoUrl} />
            </Container>
        </div>
        );
  }
}

export default LiveDisplay
