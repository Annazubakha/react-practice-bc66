import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
`;
