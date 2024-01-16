import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import React, { useEffect } from 'react';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleEscPress = event => {
      if (event.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return <Backdrop onClick={handleBackdropClick}>{children}</Backdrop>;
};
