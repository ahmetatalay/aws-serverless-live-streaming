/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReplay = /* GraphQL */ `
  query GetReplay($id: ID!) {
    getReplay(id: $id) {
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

export const getCommentByReplayId = /* GraphQL */ `
  query GetCommentByReplayId($id: ID!) {
    getReplay(id: $id) {
      comments {
        items {
          id
          content
          username
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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

export const listReplays = /* GraphQL */ `
  query ListReplays(
    $filter: ModelReplayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;


export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        username
        replay {
          id
          name
          url
          likes
          dislikes
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
