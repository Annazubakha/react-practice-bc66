export const TodoFilter = ({ value, onChange }) => {
  return (
    <label style={{ marginBottom: '20px' }}>
      Filter:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
