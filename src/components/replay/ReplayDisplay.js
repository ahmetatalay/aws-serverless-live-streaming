import React from 'react';
import { Container } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { getReplay } from '../../graphql/queries';
import gql from 'graphql-tag';
import Replay from './Replay';
import { Dimmer, Loader } from 'semantic-ui-react';

class ReplayDisplay extends React.Component {
    render() {
        return (
            <div>

            <Container textAlign='center'><h1>Match Replay </h1> <br/></Container>
            <div>
                
            <Query query={gql(getReplay)}  variables={{ id: this.props.match.params.id }}>
                    {({ loading, data, error, subscribeToMore }) => {
                    if (loading) { return (
                    <div>
                        <Dimmer active inverted>
                        <Loader>Loading</Loader>
                        </Dimmer>
                    </div>
                    ) }
                    if (error) return <p>{error.message}</p>

                    return <Replay data={data} />
                    }}
                </Query>
            </div>
            </div>
            );
    }
}

export default ReplayDisplay
