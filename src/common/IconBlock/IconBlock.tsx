import { ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography/Typography';

const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

type IconType = 'smartphone' | 'shield' | 'action-cart' | 'credit-card' | 'fireworks' | 'analytics';

export const IconBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <>
    <Typography variant="h2" content={title} />
    <IconsContainer>{children}</IconsContainer>
  </>
);
