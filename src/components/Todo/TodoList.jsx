import { useSelector } from 'react-redux';

import { TodoListItem } from './TodoListItem';
import { selectFilteredTodos } from 'myRedux/todos/selectors';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {todos.map(item => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
