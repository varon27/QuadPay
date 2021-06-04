import React from 'react';
import styled from 'styled-components';
import { BlockLayout } from './common/BlockLayout/BlockLayout';
import { HeroBlock } from './common/HeroBlock/HeroBlock';
import { IconBlock } from './common/IconBlock/IconBlock';
import { IconCard } from './common/IconCard/IconCard';
import { Theme } from './common/Theme/Theme';

export const ICON_OPTIONS = [
  [
    'smartphone',
    'Make payment seamless',
    'Online or in-store, Quadpay means more flexibility at checkout.',
  ] as const,
  ['shield', 'Take on zero risk', 'You get paid today. Your customers pay over time.'] as const,
  [
    'action-cart',
    'Put your customers first',
    'Interest-free installment plans with no hard credit check or impact on credit.',
  ] as const,
  [
    'credit-card',
    'Accept all major cards',
    'QuadPay is the only Buy Now, Pay Later solution that accepts Amex and Discover along with Visa.',
  ] as const,
  [
    'fireworks',
    'Tap into our community',
    'Introduce your brand to millions of existing QuadPay customers in our marketplace.',
  ] as const,
  [
    'analytics',
    'Track progress',
    'Easily manage customer data, order management, and reconciliation in the merchant portal.',
  ] as const,
];

const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const App = () => (
  <Theme>
    <BlockLayout hasBlueBackgroundColor>
      <HeroBlock
        title="Quadpay anywhere"
        subTitle="Shop your favorite brands with the Quadpay app—online or in-store."
        logo
        image
      ></HeroBlock>
    </BlockLayout>
    <BlockLayout isPositionAbsolute isFlexCenter>
      <IconBlock title="Partnering with Quadpay">
        {ICON_OPTIONS.map(([icon, title, text]) => (
          <IconCard iconType={icon} key={icon} iconCardTitle={title} iconCardText={text} />
        ))}
      </IconBlock>
    </BlockLayout>
  </Theme>
);

export default App;
