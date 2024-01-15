import { Form } from 'components/Form/Form';
import { TodoList } from 'components/Todo/TodoList';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoFilter } from 'components/Todo/TodoFilter';
import { Container, Section } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const Todo = () => {
  // state = {
  //   todo: [
  //     { text: 'todo1', id: 1 },
  //     { text: 'todo2', id: 2 },
  //   ],
  //   filter: '',
  //   isEdit: false,
  //   currentTodo: {},
  // };

  const [todos, setTodos] = useLocalStorage('todoes', []);

  const [filter, setFilter] = useState('');

  const addTodo = text => {
    if (findTodo(text)) return;

    setTodos(prev => [...prev, { text, id: nanoid() }]);
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const filterChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredTodos = () => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // onEdit = (currentTodo = {}) => {
  //   console.log(currentTodo);
  //   this.setState(prevState => ({ isEdit: !prevState.isEdit, currentTodo }));
  // };

  const findTodo = text => {
    const isExist = todos.find(
      item => item.text.toLowerCase() === text.toLowerCase()
    );

    if (isExist) {
      alert(`Todo: ${text} is already exist`);
    }

    return isExist;
  };

  // updateTodo = text => {
  //   const { currentTodo } = this.state;

  //   if (this.findTodo(text)) return;

  //   this.setState(prevState => ({
  //     todo: prevState.todo.map(item => {
  //       if (item.id === currentTodo.id) {
  //         return { ...currentTodo, text };
  //       }
  //       return item;
  //     }),
  //     isEdit: false,
  //   }));
  // };

  const filteredTodos = getFilteredTodos();

  return (
    <Section>
      <Container>
        <Form addTodo={addTodo} text="Add todos" />
        <TodoFilter value={filter} onChange={filterChange} />
        <TodoList
          todo={filteredTodos}
          onDelete={deleteTodo}
          // onEdit={onEdit}
          // disabled={isEdit}
        />
        {/* {isEdit && (
          <Modal closeModal={this.onEdit}>
            <EditForm
              cancelEdit={this.onEdit}
              updateTodo={this.updateTodo}
              defaultValue={currentTodo.text}
            />
          </Modal>
        )} */}
      </Container>
    </Section>
  );
};
