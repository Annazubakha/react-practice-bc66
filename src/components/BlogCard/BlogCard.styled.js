import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.white};
`;
export const CardPoster = styled.img`
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Tag = styled.span`
  align-self: flex-start;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tagBackground};
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;
`;
