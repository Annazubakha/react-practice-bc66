import { RiSaveLine } from 'react-icons/ri';
// import { MdOutlineCancel } from 'react-icons/md';

export const EditForm = ({ defaultValue, updateTodo }) => {
  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    updateTodo(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input defaultValue={defaultValue} name="text" type="text" required />
      <button type="submit">
        <RiSaveLine size={16} color={'green'} />
      </button>
    </form>
  );
};
