import { Form } from 'components/Form/Form';
import { TodoList } from 'components/Todo/TodoList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { TodoFilter } from 'components/Todo/TodoFilter';
import { loadFromLS, saveToLS } from 'helpers';
import { Container, EditForm, Section } from 'components';
import Modal from 'components/Modal/Modal';

export class Todo extends Component {
  state = {
    todo: [
      { text: 'todo1', id: 1 },
      { text: 'todo2', id: 2 },
    ],
    filter: '',
    isEdit: false,
    currentTodo: {},
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
    if (this.findTodo(text)) return;

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

  onEdit = (currentTodo = {}) => {
    console.log(currentTodo);
    this.setState(prevState => ({ isEdit: !prevState.isEdit, currentTodo }));
  };

  findTodo = text => {
    const { todo } = this.state;
    const isExist = todo.find(
      item => item.text.toLowerCase() === text.toLowerCase()
    );

    if (isExist) {
      alert(`Todo: ${text} is already exist`);
    }

    return isExist;
  };

  updateTodo = text => {
    const { currentTodo } = this.state;

    if (this.findTodo(text)) return;

    this.setState(prevState => ({
      todo: prevState.todo.map(item => {
        if (item.id === currentTodo.id) {
          return { ...currentTodo, text };
        }
        return item;
      }),
      isEdit: false,
    }));
  };

  render() {
    const { filter, isEdit, currentTodo } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <Section>
        <Container>
          <Form addTodo={this.addTodo} text="Add todos" />
          <TodoFilter value={filter} onChange={this.filterChange} />
          <TodoList
            todo={filteredTodos}
            onDelete={this.deleteTodo}
            onEdit={this.onEdit}
            disabled={isEdit}
          />
          {isEdit && (
            <Modal closeModal={this.onEdit}>
              <EditForm
                cancelEdit={this.onEdit}
                updateTodo={this.updateTodo}
                defaultValue={currentTodo.text}
              />
            </Modal>
          )}
        </Container>
      </Section>
    );
  }
}
