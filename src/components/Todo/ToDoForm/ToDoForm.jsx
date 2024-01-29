import { addTodo } from 'myRedux/todos/operations';
import { selectTodos } from 'myRedux/todos/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ToDoForm = ({ text }) => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleSubmit = e => {
    e.preventDefault();

    if (findTodo(query)) {
      return;
    }

    dispatch(addTodo(query));
    setQuery('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
  };

  const findTodo = text => {
    const isExist = todos.find(
      item => item.text.toLowerCase() === text.toLowerCase()
    );

    if (isExist) {
      alert(`Todo: ${text} is already exist`);
    }

    return isExist;
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label>
        <input
          value={query}
          type="text"
          name="query"
          onChange={handleChange}
          required
        />
      </label>
      <button>{text}</button>
    </form>
  );
};
