const customViewports = {
  tinyMobile: {
    name: 'XS',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  mobile: {
    name: 'SM(768px)',
    styles: {
      width: '768px',
      height: '640px',
    },
  },
  mobileEnd: {
    name: 'Tablet-1(1023px)',
    styles: {
      width: '1023px',
      height: '640px',
    },
  },
  tablet: {
    name: 'Tablet(1024px)',
    styles: {
      width: '1024px',
      height: '640px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: customViewports },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
