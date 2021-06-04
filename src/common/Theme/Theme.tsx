import React from 'react';
import { ThemeProvider } from 'styled-components';

const breakpoints = {
  xs: 0,
  s: 360,
  md: 769,
  tablet: 1025,
};

const createMediaQuery = (breakpoint: number, operator: string) =>
  operator + '-width:' + breakpoint + 'px';

const mediabBreakpointsMin = Object.values(breakpoints).map(value =>
  createMediaQuery(value, 'min'),
);

const mediabBreakpointsMax = Object.values(breakpoints).map(value =>
  createMediaQuery(value, 'max'),
);

export const QuadpayTheme = {
  colors: {
    quadPayBlue: '#140CA3',
    washDenim: '#022059',
    earlyRiser: '#FAF0E6',
    brightIdea: '#FFF',
    jetSetter: '#000',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  breakpoints,
  mediabBreakpointsMin,
  mediabBreakpointsMax,
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={QuadpayTheme}>{children}</ThemeProvider>
);
