import styled from 'styled-components';
import Image from '../../style/QuadPay_Jul_31_WHITE PINK_22_ROMY_4TH-OF-JULY_3245 1.png';
import { Logo } from '../Logo/Logo';
import { TitleContainer } from '../TitleContainer/TitleContainer';

const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const HeroImage = styled.img`
  ${({ theme }) => `
    width: 565px;
    position: absolute;
    left: 272px;
    top: -24.71px;

    @media (min-width: ${theme.breakpoints.md}px) {
      width: 573px;
      left: 515px;
    }

    @media (min-width: ${theme.breakpoints.tablet}px) {
      width: auto;
      left: 705.73px;
    }
`}
`;

export const HeroBlock = ({
  title,
  subTitle,
  logo,
  image,
}: {
  title: string;
  subTitle: string;
  logo?: boolean;
  image?: boolean;
}) => (
  <HeroContainer>
    <TitleContainer title={title} subTitle={subTitle} />
    {logo && <Logo />}
    {image && <HeroImage src={Image} alt="happy couple" />}
  </HeroContainer>
);
