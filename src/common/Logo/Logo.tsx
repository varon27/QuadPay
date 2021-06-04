import styled from 'styled-components';
import LogoVector from '../../style/QuadPayLogo.svg';

const LogoSvg = styled.img`
  ${({ theme }) => `
    position: absolute;
    width: 1102px;
    height: 1442.07px;
    left: -22px;
    top: -330.47px;
    z-index: 1;

    @media (min-width: ${theme.breakpoints.md}px) {
      position: absolute;
      width: 1180px;
      height: 1420.07px;
      left: 183px;
      top: -265.47px;
      z-index: 1;
    }

    @media (min-width: ${theme.breakpoints.tablet}px) {
      width: 1587.11px;
      height: 1705.07px;
    }
  `}
`;

export const Logo = () => <LogoSvg src={LogoVector} alt="Logo QuadPay" />;
