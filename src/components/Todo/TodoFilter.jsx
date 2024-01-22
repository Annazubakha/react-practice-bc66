import { useDispatch } from 'react-redux';
import { filterTodo } from '../../redux/actions';

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
