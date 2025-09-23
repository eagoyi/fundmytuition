import styled from 'styled-components';

interface ColSize {
  span?: number;
  offset?: number;
}

interface ColProps {
  xs?: number | ColSize;
  sm?: number | ColSize;
  md?: number | ColSize;
  lg?: number | ColSize;
  xl?: number | ColSize;
}

const getWidth = (size?: number | ColSize) => {
  if (typeof size === 'number') {
    const width = (size / 12) * 100;
    return `flex-basis: ${width}%; max-width: ${width}%;`;
  }
  if (typeof size === 'object') {
    let styles = '';
    if (size.span) {
      const width = (size.span / 12) * 100;
      styles += `flex-basis: ${width}%; max-width: ${width}%;`;
    }
    if (size.offset) {
      const offset = (size.offset / 12) * 100;
      styles += `margin-left: ${offset}%;`;
    }
    return styles;
  }
};

export const Col = styled.div<ColProps>`
  position: relative;
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;

  ${({ xs }) => getWidth(xs)}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ sm }) => getWidth(sm)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ md }) => getWidth(md)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ lg }) => getWidth(lg)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    ${({ xl }) => getWidth(xl)}
  }
`;
