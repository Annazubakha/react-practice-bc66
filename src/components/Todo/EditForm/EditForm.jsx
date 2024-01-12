import { RiSaveLine } from 'react-icons/ri';
// import { MdOutlineCancel } from 'react-icons/md';

export const EditForm = () => {
  return (
    <form>
      <input type="text" required />
      <button type="submit">
        <RiSaveLine size={16} color={'green'} />
      </button>
    </form>
  );
};
