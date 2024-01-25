import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/selectors';

import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const getFilteredTodos = () => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  return (
    <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {filteredTodos.map(item => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
