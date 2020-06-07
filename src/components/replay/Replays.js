import React from 'react';
import {Card, Container, Header, Image } from 'semantic-ui-react';
import Vote from '../vote/Vote'
import { Link } from 'react-router-dom';
import posterImage from '../../assets/img/poster.jpg';

class Replays extends React.Component {
    componentDidMount() {
        this.props.subscribeToMore();
    }

    render() {
      const left = { padding: '0px 40px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }
      const items = this.props.data.listReplays.items;
      
      if (items.length === 0) return(
        <Container textAlign="center">
        <Header size='small'>No Replay Found</Header>
      </Container>
      )

      const replays_list =  items.map((replay,index) => {
        return (
              <Card key={index}>
                <Link to={`/replay/${replay.id}`}>
                  <Image src={posterImage}/>
                </Link>
                {/* <Card.Content>
                </Card.Content> */}
                <Card.Content>
                {/* <Image
                  floated='left'
                  size='mini'
                  src={imageTest}
                /> */}
                <Vote {...replay} />
                
                <Card.Header>
                    {replay.name}
                </Card.Header>
                <Card.Description>
                    This is sample description for {replay.name}
                </Card.Description>

                {/* <Container textAlign="right"> */}
                  {/* </Container> */}
                </Card.Content>
              </Card>
              
          )
    });

    return (
          <div style={left}>
              {/* <Grid columns={3}>
              <Grid.Row> */}
               <Card.Group itemsPerRow={3}>
                  {replays_list}
               </Card.Group>
               <br/><br/>
              {/* </Grid.Row>
              </Grid> */}
          </div>
    );
      }
  }
  
export default Replays