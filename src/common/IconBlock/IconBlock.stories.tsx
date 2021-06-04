import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { IconBlock } from './IconBlock';

export default {
  title: 'common/IconBlock',
  component: IconBlock,
};

const Template: Story<Parameters<typeof IconBlock>[0]> = args => (
  <Theme>
    <IconBlock {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  title: 'Partnering with Quadpay',
  children: '[CHILDREN]',
};

export { TextExample };
