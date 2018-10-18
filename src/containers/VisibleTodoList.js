import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import TodoList from 'components/TodoList';
import { queries } from 'graphql';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const withTodos = graphql(queries.todos, {
  props: ({ data }) => {
    if (data.loading || data.error) return { todos: [] };
    return {
      todos: getVisibleTodos(data.todos, data.visibilityFilter),
    };
  },
});

const TODO_MUTATION = gql`
  mutation ToggleTodo($id: Int!) {
    toggleTodo(id: $id) @client
  }
`;

const toggleTodo = graphql(TODO_MUTATION, {
  props: ({ mutate, ...rest }) => {
    return {
      onTodoClick: (id) => mutate({ variables: { id } }),
    };
  },
});

export default compose(
  toggleTodo,
  withTodos
)(TodoList);
