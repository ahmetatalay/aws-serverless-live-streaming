import React from 'react';
import {Comment } from 'semantic-ui-react';

class CommentModel extends React.Component {
    componentDidMount() {
        this.props.subscribeToMore();
    }


    render() {
        const items = this.props.data.getReplay.comments.items;
        return items.map((comment) => {
            return (
                <div key={comment.id}>
                <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>{comment.username}</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                    <Comment.Text>{comment.content}</Comment.Text>
                </Comment.Content>
              </Comment>

                </div>
            )
        })
    }
}

export default CommentModel;