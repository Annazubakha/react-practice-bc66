import { TodoList } from 'components/Todo/TodoList';
import React from 'react';

import { TodoFilter } from 'components/Todo/TodoFilter';
import { Container, Section, ToDoForm } from 'components';

const Todo = () => {
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
