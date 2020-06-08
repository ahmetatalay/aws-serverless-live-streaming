import React, { Component } from 'react';
import { Container, Button,Form } from 'semantic-ui-react'
import aws_video_config from '../../aws-video-exports.js';
import PlayerDisplay from '../player'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag';
import { createReplay } from '../../graphql/mutations';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { signUpConfig } from '../auth/Auth';

const videoUrl = aws_video_config.awsOutputLiveHLS;

class NewReplay extends Component {
  state ={
    loading: false,
    cliplength: 20,
    replayName:""
  }
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleClick = async (e,createReplay) => {
    e.preventDefault();

    const { cliplength, replayName } = this.state

    this.setState({ cliplength: cliplength, replayName: replayName })

    console.log(this.state.cliplength)//You will get vlue here
    console.log(this.state.replayName)//You will get vlue here

    const latency=30; 
    const clipLength=this.state.cliplength
    const d = new Date();
    const n = Math.floor(d.getTime()/1000.0);
    const start = n - (latency + clipLength); 
    const end = n - latency; 
    const urlstr = videoUrl + '?start=' + start + '&end=' + end; 
    const name = this.state.replayName

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
    this.setState({ cliplength: 30, replayName: '' })
  }

  

  render() {
      return (
            <Mutation mutation={gql(createReplay)} >
            {(createReplay, { data, loading, error }) => {
                return (
                <Container textAlign='justified'>
                <Form onSubmit={(e) => this.handleClick(e,createReplay)}>
                  <Form.Input
                    width={6}
                    label={`Clip Length: ${this.state.cliplength} sn `}
                    min={0}
                    max={60}
                    step={5}
                    name='cliplength'
                    type='range'
                    value={this.state.cliplength}
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    required
                    width={4}
                    fluid
                    label='Replay Name'
                    name='replayName'
                    value={this.state.replayName}
                    onChange={this.handleChange}
                  />

                  <Button loading={this.state.loading} content='Create New Replay' primary />
                </Form>

                {/* <Button loading={this.state.loading} content='Create New Replay' primary onClick={(e) => this.handleClick(e,createReplay)}/> */}
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
