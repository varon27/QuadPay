import styled from 'styled-components';

const CustomTitleH1 = styled.h1<{
  $isDarkColor: boolean;
  $isLightColor: boolean;
}>`
  ${({ theme, $isDarkColor, $isLightColor }) => `
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 100%;
    margin: 0 0 24px;
    color: ${$isDarkColor ? theme.colors.jetSetter : theme.colors.brightIdea};
    color: ${$isLightColor ? theme.colors.brightIdea : theme.colors.jetSetter};

      @media (${theme.mediabBreakpointsMin[3]}) {
        font-size: 92px;
      }
  `}
`;

const CustomTitleH2 = styled.h2<{
  $isDarkColor: boolean;
  $isLightColor: boolean;
}>`
  ${({ theme, $isDarkColor, $isLightColor }) => `
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 100%;
    margin: 0 0 40px;
    color: ${$isDarkColor ? theme.colors.jetSetter : theme.colors.brightIdea};
    color: ${$isLightColor ? theme.colors.brightIdea : theme.colors.jetSetter};

      @media (min-width: ${theme.breakpoints.md}px) {
        font-size: 56px;
        margin: 0 0 56px;
      }

      @media (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 64px;
        line-height: 110%;
        margin: 0 0 72px;
      }
  `}
`;

const CustomTitleH3 = styled.h3<{
  $isDarkColor: boolean;
  $isLightColor: boolean;
}>`
  ${({ theme, $isDarkColor, $isLightColor }) => `
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 130%;
    padding: 34px 0 8px;
    margin: 0;
    color: ${$isDarkColor ? theme.colors.jetSetter : theme.colors.brightIdea};
    color: ${$isLightColor ? theme.colors.brightIdea : theme.colors.jetSetter};

      @media (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 28px;
        padding: 68px 0 16px;
      }
  `}
`;

const CustomTitleH4 = styled.h4<{
  $isDarkColor: boolean;
  $isLightColor: boolean;
}>`
  ${({ theme, $isDarkColor, $isLightColor }) => `
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 130%;
    color: ${$isDarkColor ? theme.colors.jetSetter : theme.colors.brightIdea};
    color: ${$isLightColor ? theme.colors.brightIdea : theme.colors.jetSetter};

      @media (min-width: ${theme.breakpoints.md}px) {
        font-size: 20px;
      }
      @media (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 24px;
      }
  `}
`;

const Body = styled.p<{
  $isDarkColor: boolean;
  $isLightColor: boolean;
}>`
  ${({ theme, $isDarkColor, $isLightColor }) => `
    font-family: Roc Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;
    margin: 0;
    color: ${$isDarkColor ? theme.colors.jetSetter : theme.colors.brightIdea};
    color: ${$isLightColor ? theme.colors.brightIdea : theme.colors.jetSetter};

      @media (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 18px;
      }
  `}
`;

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body';
type Color = 'light' | 'dark';

export const Typography = ({
  variant,
  color,
  content,
}: {
  variant?: Variant;
  color?: Color;
  content: string;
}) => (
  <>
    {(() => {
      switch (variant) {
        case 'h1':
          return (
            <CustomTitleH1
              $isDarkColor={String(color) === 'dark'}
              $isLightColor={String(color) === 'light'}
            >
              {content}
            </CustomTitleH1>
          );
        case 'h2':
          return (
            <CustomTitleH2
              $isDarkColor={String(color) === 'dark'}
              $isLightColor={String(color) === 'light'}
            >
              {content}
            </CustomTitleH2>
          );
        case 'h3':
          return (
            <CustomTitleH3
              $isDarkColor={String(color) === 'dark'}
              $isLightColor={String(color) === 'light'}
            >
              {content}
            </CustomTitleH3>
          );
        case 'h4':
          return (
            <CustomTitleH4
              $isDarkColor={String(color) === 'dark'}
              $isLightColor={String(color) === 'light'}
            >
              {content}
            </CustomTitleH4>
          );
        case 'body':
          return (
            <Body $isDarkColor={String(color) === 'dark'} $isLightColor={String(color) === 'light'}>
              {content}
            </Body>
          );
      }
    })()}
  </>
);
