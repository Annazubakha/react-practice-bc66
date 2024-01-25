import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { editTodo } from '../../../redux/operations';
import { useDispatch } from 'react-redux';

export const EditForm = ({ defaultValue, updateTodo, id }) => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    dispatch(editTodo({ id, text: value }));
  };
  console.log(defaultValue);
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 20 }}>
      <textarea
        defaultValue={defaultValue}
        name="text"
        type="text"
        style={{ width: '500px', height: '150px', resize: 'none' }}
        required
      />
      <button type="submit">
        <RiSaveLine size={16} color={'green'} />
      </button>
      <button type="button">
        <MdOutlineCancel size={16} color={'red'} />
      </button>
    </form>
  );
};
//  onClick={() => cancelEdit()}
