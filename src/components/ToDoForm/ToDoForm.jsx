import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../../redux/actions';

export const ToDoForm = ({ text }) => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addToDo(query));
    setQuery('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value);
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
