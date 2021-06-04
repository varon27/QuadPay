import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { Typography } from './Typography';

export default {
  title: 'common/Typography',
  component: Typography,
};

const Template: Story<Parameters<typeof Typography>[0]> = args => (
  <Theme>
    <Typography {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  content: 'Quadpay anywhere',
  variant: 'h1',
  color: 'light',
};

export { TextExample };
