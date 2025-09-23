import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${({ theme }) => theme.spacing.md}px;
  margin-left: -${({ theme }) => theme.spacing.md}px;
`;
