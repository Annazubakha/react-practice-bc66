import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoList = ({ todo, onDelete, onEdit, disabled }) => {
  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      {todo.map(item => (
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
            onClick={() => onDelete(item.id)}
            disabled={disabled}
          >
            <RiDeleteBinLine size={16} color={disabled ? 'grey' : 'red'} />
          </button>
          <button
            type="button"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}
            disabled={disabled}
            onClick={() => onEdit()}
          >
            <RiEdit2Line size={16} color={disabled ? 'grey' : 'lightblue'} />
          </button>
        </li>
      ))}
    </ul>
  );
};
