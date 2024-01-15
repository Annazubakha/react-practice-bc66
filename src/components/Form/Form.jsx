import { useState } from 'react';

export const Form = ({ addTodo, text }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(query);

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
