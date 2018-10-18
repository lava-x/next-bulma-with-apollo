import React, { PureComponent } from 'react';
import styles from './styles';
import Posts from 'containers/Posts';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import FilterLink from 'containers/FilterLink';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home full-height-min flex-vertical-center">
        <AddTodo />
        <p>
          Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
          {', '}
          <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
          {', '}
          <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </p>
        <VisibleTodoList />
        <Posts />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
