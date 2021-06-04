import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { IconCard } from './IconCard';

export default {
  title: 'common/IconCard',
  component: IconCard,
};

const Template: Story<Parameters<typeof IconCard>[0]> = args => (
  <Theme>
    <IconCard {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  iconCardTitle: 'Make payment seamless',
  iconCardText: 'Online or in-store, Quadpay means more flexibility at checkout.',
  iconType: 'smartphone',
};

export { TextExample };
