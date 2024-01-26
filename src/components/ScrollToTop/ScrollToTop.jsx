import { useEffect, useState } from 'react';
import { ScrollButton } from './ScrollToTop.styled';
import { BiArrowToTop } from 'react-icons/bi';
import { throttle } from 'lodash';

export const ScrollToTop = () => {
  const [scrollButton, setScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollButton(window.scrollY > 900);
    };
    const throttlingScroll = throttle(handleScroll, 1000);
    window.addEventListener('scroll', throttlingScroll);
    return () => {
      window.removeEventListener('scroll', throttlingScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      {scrollButton && (
        <ScrollButton onClick={goToTop}>
          <BiArrowToTop size={36} />
        </ScrollButton>
      )}
    </>
  );
};
