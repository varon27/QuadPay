import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { HeroBlock } from './HeroBlock';

export default {
  title: 'common/HeroBlock',
  component: HeroBlock,
};

const Template: Story<Parameters<typeof HeroBlock>[0]> = args => (
  <Theme>
    <HeroBlock {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  title: 'Quadpay anywhere',
  subTitle: 'Shop your favorite brands with the Quadpay app—online or in-store.',
};

export { TextExample };
