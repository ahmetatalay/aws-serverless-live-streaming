/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReplay = /* GraphQL */ `
  mutation CreateReplay(
    $input: CreateReplayInput!
    $condition: ModelReplayConditionInput
  ) {
    createReplay(input: $input, condition: $condition) {
      id
      name
      url
      likes
      dislikes
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateReplay = /* GraphQL */ `
  mutation UpdateReplay(
    $input: UpdateReplayInput!
    $condition: ModelReplayConditionInput
  ) {
    updateReplay(input: $input, condition: $condition) {
      id
      name
      url
      likes
      dislikes
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteReplay = /* GraphQL */ `
  mutation DeleteReplay(
    $input: DeleteReplayInput!
    $condition: ModelReplayConditionInput
  ) {
    deleteReplay(input: $input, condition: $condition) {
      id
      name
      url
      likes
      dislikes
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      username
      replay {
        id
        name
        url
        likes
        dislikes
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      username
      replay {
        id
        name
        url
        likes
        dislikes
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      username
      replay {
        id
        name
        url
        likes
        dislikes
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
