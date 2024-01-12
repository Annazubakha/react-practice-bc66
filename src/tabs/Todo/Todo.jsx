import { Form } from 'components/Form/Form';
import { TodoList } from 'components/Todo/TodoList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { TodoFilter } from 'components/Todo/TodoFilter';
import { loadFromLS, saveToLS } from 'helpers';
import { EditForm } from 'components';

export class Todo extends Component {
  state = {
    todo: [
      { text: 'todo1', id: 1 },
      { text: 'todo2', id: 2 },
    ],
    filter: '',
    isEdit: false,
  };

  componentDidMount() {
    const savedTodoes = loadFromLS('todoes');
    if (savedTodoes) {
      this.setState({ todo: savedTodoes });
    }
  }

  componentDidUpdate(_, prevState) {
    const { todo } = this.state;

    if (prevState.todo !== todo) {
      saveToLS('todoes', todo);
    }
  }

  addTodo = text => {
    const { todo } = this.state;
    const isExist = todo.find(
      item => item.text.toLowerCase() === text.toLowerCase()
    );

    if (isExist) {
      alert(`Todo: ${text} is already exist`);
      return;
    }

    this.setState(prevState => ({
      todo: [...prevState.todo, { text, id: nanoid() }],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todo: prevState.todo.filter(item => item.id !== id),
    }));
  };

  filterChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredTodos = () => {
    const { todo, filter } = this.state;

    return todo.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onEdit = () => {
    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  };

  render() {
    const { filter, isEdit } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <div>
        {isEdit ? (
          <EditForm />
        ) : (
          <Form addTodo={this.addTodo} text="Add todos" />
        )}

        <TodoFilter value={filter} onChange={this.filterChange} />
        <TodoList
          todo={filteredTodos}
          onDelete={this.deleteTodo}
          onEdit={this.onEdit}
          disabled={isEdit}
        />
      </div>
    );
  }
}
