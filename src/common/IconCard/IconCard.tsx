import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography/Typography';
import { ReactComponent as AnalyticsIcon } from './icons/analytics-graph-bar.svg';
import { ReactComponent as CreditCardIcon } from './icons/credit-card-check.svg';
import { ReactComponent as FireworksIcon } from './icons/fireworks-people-watch.svg';
import { ReactComponent as ActionCartIcon } from './icons/multiple-actions-cart.svg';
import { ReactComponent as ShieldIcon } from './icons/shield-check.svg';
import { ReactComponent as SmartphoneIcon } from './icons/smartphone-pay-dollar.svg';

const IconBlockContainer = styled.div`
  ${({ theme }) => `
  margin: 0;
  box-sizing: border-box;
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  padding: 8px;

  @media (min-width: ${theme.breakpoints.md}px) {
    max-width: 50%;
    flex-basis: 50%;
  }

  @media (min-width: ${theme.breakpoints.tablet}px) {
    max-width: 33%;
    flex-basis: 33%;
    padding: 15px;
  }
  `}
`;

type IconType = 'smartphone' | 'shield' | 'action-cart' | 'credit-card' | 'fireworks' | 'analytics';

export const IconCard = ({
  iconCardTitle,
  iconCardText,
  iconType,
}: {
  iconCardTitle: string;
  iconCardText: string;
  iconType: IconType;
}) => (
  <>
    <IconBlockContainer>
      {(() => {
        switch (iconType) {
          case 'smartphone':
            return <SmartphoneIcon />;
          case 'shield':
            return <ShieldIcon />;
          case 'action-cart':
            return <ActionCartIcon />;
          case 'credit-card':
            return <CreditCardIcon />;
          case 'fireworks':
            return <FireworksIcon />;
          case 'analytics':
            return <AnalyticsIcon />;
        }
      })()}
      <Typography variant="h3" content={iconCardTitle} />
      <Typography variant="body" content={iconCardText} />
    </IconBlockContainer>
  </>
);
