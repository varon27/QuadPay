import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { Logo } from './Logo';

export default {
  title: 'common/Logo',
  component: Logo,
};

const Template: Story<Parameters<typeof Logo>> = args => (
  <Theme>
    <Logo />
  </Theme>
);

const LogoExample = Template.bind({});

export { LogoExample };
