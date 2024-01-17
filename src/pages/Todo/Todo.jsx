import { Form } from 'components/Form/Form';
import { TodoList } from 'components/Todo/TodoList';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoFilter } from 'components/Todo/TodoFilter';
import { Container, EditForm, Section } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Modal } from 'components/Modal/Modal';

export const Todo = () => {
  const [todos, setTodos] = useLocalStorage('todoes', []);
  const [filter, setFilter] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

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

  const onEdit = (currentTodo = {}) => {
    setIsEdit(!isEdit);
    setCurrentTodo(currentTodo);
  };

  const findTodo = text => {
    const isExist = todos.find(
      item => item.text.toLowerCase() === text.toLowerCase()
    );

    if (isExist) {
      alert(`Todo: ${text} is already exist`);
    }

    return isExist;
  };

  const updateTodo = text => {
    if (findTodo(text)) return;
    setTodos(prevState =>
      prevState.map(item => {
        if (item.id === currentTodo.id) {
          return { ...currentTodo, text };
        }
        return item;
      })
    );
    setIsEdit(false);
    setCurrentTodo({});
  };

  const filteredTodos = getFilteredTodos();

  return (
    <Section>
      <Container>
        <Form addTodo={addTodo} text="Add todos" />
        <TodoFilter value={filter} onChange={filterChange} />
        <TodoList
          todo={filteredTodos}
          onDelete={deleteTodo}
          onEdit={onEdit}
          disabled={isEdit}
        />
        {isEdit && (
          <Modal closeModal={onEdit}>
            <EditForm
              cancelEdit={onEdit}
              updateTodo={updateTodo}
              defaultValue={currentTodo.text}
            />
          </Modal>
        )}
      </Container>
    </Section>
  );
};
