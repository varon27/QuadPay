import { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div<{
  $hasBlueBackgroundColor: boolean;
  $isPositionAbsolute: boolean;
  $isFlexCenter: boolean;
}>`
  ${({ theme, $hasBlueBackgroundColor, $isPositionAbsolute, $isFlexCenter }) => `
    overflow: hidden;
    position: ${$isPositionAbsolute ? 'absolute' : 'relative'};
    width: 100%;
    background-color: ${
      $hasBlueBackgroundColor ? theme.colors.quadPayBlue : theme.colors.earlyRiser
    };
    display: ${$isFlexCenter ? 'flex' : 'block'};
    justify-content: ${$isFlexCenter ? 'center' : 'inherit'};
  `}
`;

const ContentContainer = styled.div`
  ${({ theme }) => `
    max-width: 400px;
    padding: 48px 60px;

    @media (min-width: ${theme.breakpoints.md}px) {
      max-width: 844px;
      padding: 64px 90px;
    }

    @media (min-width: ${theme.breakpoints.tablet}px) {
      max-width: 1170px;
      padding: 96px 135px;
    }
`}
`;

export const BlockLayout = ({
  children,
  hasBlueBackgroundColor,
  isPositionAbsolute,
  isFlexCenter,
}: {
  children: ReactNode;
  hasBlueBackgroundColor?: boolean;
  isPositionAbsolute?: boolean;
  isFlexCenter?: boolean;
}) => (
  <LayoutContainer
    $hasBlueBackgroundColor={Boolean(hasBlueBackgroundColor)}
    $isPositionAbsolute={Boolean(isPositionAbsolute)}
    $isFlexCenter={Boolean(isFlexCenter)}
  >
    <ContentContainer>{children}</ContentContainer>
  </LayoutContainer>
);
