import React from 'react';
import { Mutation } from 'react-apollo'
import { createComment } from '../../graphql/mutations'
import gql from 'graphql-tag';
import { Form, Button } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';


class CreateComment extends React.Component {
    state = {
        comment: "",
        username:"Anonymous",
        replay: this.props,
    }
    getCurrentUsername = () => {
        return new Promise((resolve, reject) => {
         Auth.currentAuthenticatedUser()
          .then(user => {
           if (user.username) {
            console.log("user.username",user.username)
            resolve(user.username)
           } else {
            console.log("user",user)
            resolve("Anonymous")
           }
          })
          .catch(err => {
            resolve(null)
        });
        })
    }
    componentDidMount() {
        this.getLoggedName();
    }

    getLoggedName = async () => {
        let username = await this.getCurrentUsername()
        if(username === null){
            username = "Anonymous"
        }
        return this.setState({ username: username });
    }

    handleChange = (target) => {
        this.setState({ comment: target.value})
    }

    handleSubmit = (e, createComment) => {
        e.preventDefault();
        createComment({
            variables: {
                input: {
                    content: this.state.comment,
                    username: this.state.username,
                    commentReplayId: this.state.replay.id,
                }
            }
        })
        this.setState({ comment: ""})
        // setTimeout(function() {
        //     window.location.reload();
        // }, 2000);
    }
    render() {
        return (
            <div>

                <Mutation mutation={gql(createComment)} >
                    {(createComment, { data, loading, error }) => {
                        return (
                            <Form reply onSubmit={(e) => this.handleSubmit(e, createComment)}>
                                <Form.TextArea name="comment" required value={this.state.comment} onChange={(e) => this.handleChange(e.target)} />
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                            </Form>
                        )
                    }}

                </Mutation>
            </div>
        )
    }

}


export default CreateComment
