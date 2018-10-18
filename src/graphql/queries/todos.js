import graphql from 'graphql-tag';

export default graphql`
  query GetTodos {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;
