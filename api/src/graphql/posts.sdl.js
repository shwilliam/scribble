import gql from 'graphql-tag'

export const schema = gql`
  type Post {
    id: Int!
    image: String!
    label: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    image: String!
    label: String!
  }

  input UpdatePostInput {
    image: String
    label: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
