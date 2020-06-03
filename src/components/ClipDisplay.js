import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react'
import aws_video_config from '../aws-video-exports.js';
import PlayerDisplay from './player'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag';
import { createReplay } from '../graphql/mutations';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { signUpConfig } from './Auth';

const videoUrl = aws_video_config.awsOutputLiveHLS;

class NewReplay extends Component {
  state ={
    loading: false
  }
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = async (e,createReplay) => {
    e.preventDefault();
      
    const latency=30; //There is a latency of about 30 seconds due to IP streaming. This number can be adjusted based on observed latency for the operator.
    const clipLength=20; //Keeping the Replay logic simple. Assume the clip length to be 20 seconds.
    const d = new Date();
    const n = Math.floor(d.getTime()/1000.0); //Get the UNIX epoch time in seconds
    const start = n - (latency + clipLength); //Start of the clip in UNIX epoch seconds
    const end = n - latency; //End of the clip in UNIX epoch seconds
    const urlstr = videoUrl + '?start=' + start + '&end=' + end; //Encoded URL to get the Replay clip
    const name = prompt('Enter Replay Name:'); //Get a name for the Replay clip from the operator. Note that the start and end time are already registered.
    // console.log('Replay:', name);
    // console.log('Url_Str:', urlstr);
    const likes = 0;
    const dislikes = 0;

    createReplay({
      variables: {
          input: {
              name: name,
              url: urlstr,
              likes: likes,
              dislikes: dislikes,
          }
      }
    })
    alert('Replay created!');
  }

  

  render() {
      return (
            <Mutation mutation={gql(createReplay)} >
            {(createReplay, { data, loading, error }) => {
                return (
                <Container textAlign='justified'>

                <Button loading={this.state.loading} content='Create New Replay' primary onClick={(e) => this.handleClick(e,createReplay)}/>
                </Container>

                )
            }}
            </Mutation>
      )
  }
}

class LiveDisplay extends Component {
  render() {
      return (
        <div>
            <Container textAlign='justified'>
                 <PlayerDisplay source_url={videoUrl} />
                <br/>
            </Container>
        </div>
        );
  }
}


class ClipDisplay extends Component {
  render() {
      return (
        <div>
            <br/><br/><br/><br/>
            <Container textAlign='center'><h1>Clipping Live Stream</h1></Container>
            <LiveDisplay />
            <NewReplay />
        </div>
        );
  }
}
export default withAuthenticator(ClipDisplay, false, [], null, null, signUpConfig);
