import * as React from "react";
import TodoItem from './todoItem';

export default class TodoApp extends React.PureComponent {
  public render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    );
  }
}