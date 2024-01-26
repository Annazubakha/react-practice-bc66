import { TodoList } from 'components/Todo/TodoList';
import React, { useEffect } from 'react';

import { TodoFilter } from 'components/Todo/TodoFilter';
import { Container, Section, ToDoForm } from 'components';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../redux/operations';

const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <ToDoForm text="Add todos" />
        <TodoFilter />
        <TodoList />
      </Container>
    </Section>
  );
};

export default Todo;
