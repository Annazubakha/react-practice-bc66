import { ThemeContext } from 'components/ThemeContext/ThemeContext';
import { useContext } from 'react';

import { Container, ReactSwitchStyled } from './ToggleTheme.styled';
import { GiNightSky } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa6';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ReactSwitchStyled
        onChange={toggleTheme}
        offColor="#e41b1b"
        onColor="#666d90"
        checked={theme === 'dark'}
        uncheckedHandleIcon={<FaRegLightbulb size="26" color="#f1cc17" />}
        checkedHandleIcon={<GiNightSky size="26" color="#e6e4da" />}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </Container>
  );
};
