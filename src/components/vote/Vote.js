import React from 'react';
import { updateReplay } from '../../graphql/mutations';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button } from 'semantic-ui-react';

class LikePost extends React.Component {

    state = {
        replayData: {
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            updated: false,
            color: "grey"
        }
    }

      
    // handleLike2 = (e,updateReplay) => {
    //     console.log(this.state.replayData.updated)
    //     if(!this.state.replayData.updated) {
    //         const likeCount = this.state.replayData.likes+1
    //         updateReplay({
    //             variables: {
    //                 input: {
    //                     id: this.props.id,
    //                     likes: likeCount
    //                 }
    //             }
    //         })
    //         this.setState({ replayData: { ...this.state.replayData, likes: likeCount,updated: true,color:"red" } })      
    //       } 
    //     else {
    //         const likeCount = this.state.replayData.likes-1
    //         updateReplay({
    //             variables: {
    //                 input: {
    //                     id: this.props.id,
    //                     likes: likeCount
    //                 }
    //             }
    //         })
    //         this.setState({ replayData: { ...this.state.replayData, likes: likeCount,updated: false,color:"grey" } })      
    //       }
    // }


    handleLike = (e,updateReplay) => {
        const likeCount = this.state.replayData.likes+1
        updateReplay({
            variables: {
                input: {
                    id: this.props.id,
                    likes: likeCount
                }
            }
        })
        this.setState({ replayData: { ...this.state.replayData, likes: likeCount } })      
    }

    handleDislike = (e,updateReplay) => {
        const dislikeCount = this.state.replayData.dislikes+1
        updateReplay({
            variables: {
                input: {
                    id: this.props.id,
                    dislikes: dislikeCount
                }
            }
        })
        this.setState({ replayData: { ...this.state.replayData, dislikes: dislikeCount } })      
    }

    render() {
        return (
            <>
                <Mutation mutation={gql(updateReplay)}>
                    {(updateReplay, { loading, error }) => {
                        return (
                            <div>
                            <Button
                                onClick={(e) => this.handleDislike(e,updateReplay)}
                                floated='right'
                                content=''
                                icon='thumbs down'
                                color="grey"
                                label={{ as: 'a', basic: true, content: this.state.replayData.dislikes }}
                                labelPosition='right'
                            />
                            <Button
                                onClick={(e) => this.handleLike(e,updateReplay)}
                                floated='right'
                                content=''
                                icon='thumbs up'
                                color="red"
                                label={{ as: 'a', basic: true, content: this.state.replayData.likes }}
                                labelPosition='right'
                            />

                            </div>
                        )
                    }}
                </Mutation>
            </>
        )

    }
}

export default LikePost;