import React from 'react';
import {Container,  Header,Comment} from 'semantic-ui-react';
import PlayerDisplay from '../player'
import Vote from '../vote/Vote'
import CreateComment from '../comment/CreateComment'
import ListComments from '../comment/ListComments'


class Replay extends React.Component {

    render() {
      const left = { padding: '0px 40px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }
      const replay = this.props.data.getReplay;
      return (
          <div style={left}>
              <Container textAlign='justified'>
                  <Container textAlign="center">
                    <Header size='medium'>{replay.name}</Header>
                  </Container>
                  <div className='player-wrapper'>
                    <PlayerDisplay source_url={replay.url} />  
                  </div>
                  <Container textAlign="right">
                  <Vote {...replay} />
                  </Container>
                  <Container textAlign="left">
                  <Comment.Group>
                    <ListComments {... replay}/>
                    <CreateComment {... replay}/>
                  {/* <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                  </Form>                 */}

                  </Comment.Group>
                  </Container>
                  <br/><br/>
              </Container>
        </div>
        );
      }
  }
  
export default Replay

