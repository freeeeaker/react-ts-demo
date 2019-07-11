import * as React from 'react'
import TodoInput from './todoInput';
import TodoList from './todoList';

export default class TodoApp extends React.PureComponent {
  public render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}