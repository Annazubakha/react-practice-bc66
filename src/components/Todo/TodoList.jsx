import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/selectors';
import { deleteTodo } from '../../redux/operations';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredTodos = () => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  return (
    <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {filteredTodos.map(item => (
        <li
          key={item.id}
          style={{
            padding: '10px',
            width: '150px',
            border: '1px solid black',
            position: 'relative',
          }}
        >
          <span style={{ display: 'block', marginBottom: '5px' }}>
            {item.text}
          </span>
          <button
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            type="button"
            onClick={() => dispatch(deleteTodo(item.id))}
          >
            <RiDeleteBinLine size={16} color={'red'} />
          </button>
        </li>
      ))}
    </ul>
  );
};

//  <button
//    type="button"
//    style={{
//      position: 'absolute',
//      right: 0,
//      bottom: 0,
//    }}
//    disabled={disabled}
//    onClick={() => onEdit(item)}
//  >
//    <RiEdit2Line size={16} color={disabled ? 'grey' : 'lightblue'} />
//  </button>;
