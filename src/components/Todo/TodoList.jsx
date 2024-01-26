import { useSelector } from 'react-redux';
import { selectFilteredTodos } from '../../redux/selectors';

import { TodoListItem } from './TodoListItem';

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
