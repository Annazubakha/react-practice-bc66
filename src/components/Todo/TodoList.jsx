export const TodoList = ({ todo }) => {
  return (
    <ul>
      {todo.map(item => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};
