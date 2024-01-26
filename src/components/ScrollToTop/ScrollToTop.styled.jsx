import { styled } from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  padding: 12px 12px;
  & svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
