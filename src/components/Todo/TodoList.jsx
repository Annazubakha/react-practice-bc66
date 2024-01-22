import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/selectors';
import { deleteToDo } from '../../redux/actions';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      {todos.map(item => (
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
            onClick={() => dispatch(deleteToDo(item.id))}
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
