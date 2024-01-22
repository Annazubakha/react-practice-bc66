import { TodoList } from 'components/Todo/TodoList';
import React from 'react';

import { TodoFilter } from 'components/Todo/TodoFilter';
import { Container, Section, ToDoForm } from 'components';

const Todo = () => {
  // const getFilteredTodos = () => {
  //   return todos.filter(item =>
  //     item.text.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const findTodo = text => {
  //   const isExist = todos.find(
  //     item => item.text.toLowerCase() === text.toLowerCase()
  //   );

  //   if (isExist) {
  //     alert(`Todo: ${text} is already exist`);
  //   }

  //   return isExist;
  // };

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
