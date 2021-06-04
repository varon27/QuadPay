import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { BlockLayout } from './BlockLayout';

export default {
  title: 'common/BlockLayout',
  component: BlockLayout,
};

const Template: Story<Parameters<typeof BlockLayout>[0]> = args => (
  <Theme>
    <BlockLayout {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  children: '[CHILDREN]',
};

export { TextExample };
