export const TodoList = ({ todo, onDelete }) => {
  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      {todo.map(item => (
        <li
          key={item.id}
          style={{ padding: '10px', width: '150px', border: '1px solid black' }}
        >
          <span style={{ display: 'block', marginBottom: '5px' }}>
            {item.text}
          </span>
          <button
            style={{
              display: 'block',
              backgroundColor: '#ccc',
              border: '1px solid black',
              color: 'white',
              marginLeft: 'auto',
            }}
            type="button"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
