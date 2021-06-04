import styled from 'styled-components';
import { Typography } from '../Typography/Typography';

const CustomTitleContainer = styled.div`
  ${({ theme }) => `
    margin: 0;
    box-sizing: border-box;
    z-index: 2;

    @media (min-width: ${theme.breakpoints.md}px) {
      flex-grow: 0;
      max-width: 45%;
      flex-basis: 45%;
      // margin-left: 90px;
    }

    @media (min-width: ${theme.breakpoints.tablet}px) {
      // margin-left: 135px;
    }
  `}
`;

export const TitleContainer = ({ title, subTitle }: { title: string; subTitle: string }) => (
  <CustomTitleContainer>
    <Typography variant="h1" color="light" content={title} />
    {subTitle && <Typography variant="h4" color="light" content={subTitle} />}
  </CustomTitleContainer>
);
