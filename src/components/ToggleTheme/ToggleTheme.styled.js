import styled from 'styled-components';
import Switch from 'react-switch';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ReactSwitchStyled = styled(Switch)`
  & .react-switch-handle {
    background-color: transparent !important;
  }
`;
