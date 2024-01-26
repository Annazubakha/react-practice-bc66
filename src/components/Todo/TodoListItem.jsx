import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { EditForm } from './EditForm/EditForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/operations';

export const TodoListItem = ({ id, text }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  return (
    <li
      key={id}
      style={{
        padding: '10px',
        width: '150px',
        border: '1px solid black',
        position: 'relative',
      }}
    >
      <span style={{ display: 'block', marginBottom: '5px' }}>{text}</span>
      <button
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        disabled={isEdit}
        type="button"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <RiDeleteBinLine size={16} color={isEdit ? 'grey' : 'red'} />
      </button>
      <button
        type="button"
        style={{
          position: 'absolute',
          right: 0,
          top: 20,
        }}
        disabled={isEdit}
        onClick={() => setIsEdit(!isEdit)}
      >
        <RiEdit2Line size={16} color={isEdit ? 'grey' : 'lightblue'} />
      </button>
      {isEdit && (
        <Modal>
          <EditForm defaultValue={text} id={id} cancelEdit={setIsEdit} />
        </Modal>
      )}
    </li>
  );
};
