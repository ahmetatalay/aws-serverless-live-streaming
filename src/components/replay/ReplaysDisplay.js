import React from 'react';
import { Container } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { listReplays } from '../../graphql/queries';
import { onCreateReplay } from '../../graphql/subscriptions';
import gql from 'graphql-tag';
import Replays from './Replays';
import {  Dimmer, Loader } from 'semantic-ui-react';

class ReplaysDisplay extends React.Component {
    subsCribeNewReplays= (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreateReplay),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newPostReplay = subscriptionData.data.onCreateReplay;
                return Object.assign({}, prev, {
                    listReplays: {
                        ...prev.listReplays,
                        items: [...prev.listReplays.items, newPostReplay]
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/>
            <Container textAlign='center'><h1>Match Replays</h1> <br/></Container>
            <div>
            <Query query={gql(listReplays)}  >
                    {({ loading, data, error, subscribeToMore }) => {
                    if (loading) { return (
                    <div>
                        <Dimmer active inverted>
                        <Loader>Loading</Loader>
                        </Dimmer>
                    </div>
                    ) }
                    
                    if (error) return <p>{error.message}</p>

                    return <Replays data={data} subscribeToMore={() =>
                        this.subsCribeNewReplays(subscribeToMore)} />
                    }}
            </Query>
            </div>
            </div>
            );
    }
}

export default ReplaysDisplay
