/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReplay = /* GraphQL */ `
  subscription OnCreateReplay {
    onCreateReplay {
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
export const onUpdateReplay = /* GraphQL */ `
  subscription OnUpdateReplay {
    onUpdateReplay {
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
export const onDeleteReplay = /* GraphQL */ `
  subscription OnDeleteReplay {
    onDeleteReplay {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
