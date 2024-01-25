import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { editTodo } from '../../../redux/operations';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const EditForm = ({ defaultValue, id, cancelEdit }) => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.text;
    dispatch(editTodo({ id, text: value }))
      .unwrap()
      .then(() => {
        Notify.success('ToDo update');
      })
      .catch(() => {
        Notify.error('Something went wrong');
      })
      .finally(() => {
        cancelEdit(false);
      });
  };

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
        <RiSaveLine size={30} color={'green'} />
      </button>
      <button type="button" onClick={() => cancelEdit(false)}>
        <MdOutlineCancel size={30} color={'red'} />
      </button>
    </form>
  );
};
