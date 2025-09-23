import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 540px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1140px;
  }
`;
