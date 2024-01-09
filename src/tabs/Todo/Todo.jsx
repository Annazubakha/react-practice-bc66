import { Form } from 'components/Form/Form';
import { TodoList } from 'components/Todo/TodoList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Todo extends Component {
  state = {
    todo: [
      { text: 'todo1', id: 1 },
      { text: 'todo2', id: 2 },
    ],
  };

  addTodo = text => {
    this.setState(prevState => ({
      todo: [...prevState.todo, { text, id: nanoid() }],
    }));
  };

  render() {
    const { todo } = this.state;

    return (
      <div>
        <Form addTodo={this.addTodo} />
        <TodoList todo={todo} />
      </div>
    );
  }
}
