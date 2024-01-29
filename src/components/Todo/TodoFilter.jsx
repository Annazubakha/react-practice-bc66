import { useDispatch } from 'react-redux';
import { filterTodo } from '../../myRedux/todos/filterSlice';

export const TodoFilter = () => {
  const dispatch = useDispatch();

  return (
    <label style={{ marginBottom: '20px' }}>
      Filter:
      <input
        type="text"
        onChange={event => dispatch(filterTodo(event.target.value))}
      />
    </label>
  );
};
