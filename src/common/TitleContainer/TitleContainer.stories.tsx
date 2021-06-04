import { Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../Theme/Theme';
import { TitleContainer } from './TitleContainer';

export default {
  title: 'common/TitleContainer',
  component: TitleContainer,
};

const Template: Story<Parameters<typeof TitleContainer>[0]> = args => (
  <Theme>
    <TitleContainer {...args} />
  </Theme>
);

const TextExample = Template.bind({});

TextExample.args = {
  title: 'Quadpay anywhere',
  subTitle: 'Shop your favorite brands with the Quadpay app—online or in-store.',
};

export { TextExample };
