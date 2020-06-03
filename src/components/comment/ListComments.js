import React from 'react'
import { Query } from 'react-apollo'
import { getCommentByReplayId } from '../../graphql/queries';
import { onCreateComment } from '../../graphql/subscriptions'
import gql from 'graphql-tag';
import CommentModel from './CommentModel'
import { Dimmer, Loader } from 'semantic-ui-react';

class ListComments extends React.Component {

    state = {
        replay: {
            id: this.props.id,
        }
    }


    subsCribeNewComments = (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreateComment),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newPostData = subscriptionData.data.onCreateComment;
                return Object.assign({}, prev, {
                    getReplay: {
                        ...prev.getReplay.comments,
                        comments:{
                            __typename: "ModelCommentConnection",
                            items: [
                                ...prev.getReplay.comments.items, 
                                {
                                    __typename: 'Comment', 
                                    id: newPostData.content,
                                    content: newPostData.content,
                                    username: newPostData.username,
                                    updatedAt: new Date().toISOString(),
                                    createdAt: new Date().toISOString(), 

                                },
                            ]    
                        }
                    }
                })
            }
        })
    }


    render() {
        
        return (
            <div className="posts">
                <Query query={gql(getCommentByReplayId)} variables={{ id: this.state.replay.id }}>
                    {({ loading, data, error, subscribeToMore }) => {

                    if (loading) { 
                        return (
                        <div>
                            <Dimmer active inverted>
                            <Loader>Loading</Loader>
                            </Dimmer>
                        </div>
                        ) 
                    }
                        
                    if (error) return <p>{error.message}</p>

                    return (
                        <div>
                            <h3>Comments</h3><br/>
                            {/* <CommentModel data={data}/> */}

                        <CommentModel data={data} subscribeToMore={() =>
                            this.subsCribeNewComments(subscribeToMore)} />
                        </div>
                    )
                    }}
                </Query>
            </div>
        )
    }
}


export default ListComments;