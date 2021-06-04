import { Story } from '@storybook/react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Theme } from './Theme';

export default {
  title: 'common/Theme',
  component: Theme,
};

// const StyledTest2 = styled.h2`
//   ${breakpoint('tablet')`
//       color:${({ theme }) => theme.colors.quadPayBlue};
//     `}
// `;

const StyledTest = styled.h2`
  ${({ theme }) => `
    color: ${theme.colors.earlyRiser};

    @media (min-width: ${theme.breakpoints.tablet}px) {
      color: red;
    }
  `}
`;

const Template: Story<Parameters<typeof Theme>[0]> = args => (
  <>
    <Theme>
      <h2>Hello world</h2>
    </Theme>
  </>
);

const StyledComponent: Story<Parameters<typeof Theme>[0]> = args => (
  <>
    <Theme>
      <StyledTest>Hello Styled</StyledTest>
      {/* <StyledTest2>Hello Styled 2</StyledTest2> */}
    </Theme>
  </>
);

const TextExample = Template.bind({});

export { TextExample, StyledComponent };
