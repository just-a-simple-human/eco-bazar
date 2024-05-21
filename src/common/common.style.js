import styled, { css } from "styled-components";

export const colors = {
  brandingColors: {
    softPrimary: "#84D187",
    primary: "#00B207",
    hardPrimary: "#2C742F",
    warning: "#FF8A00",
    danger: "#EA4B48",
    white: "#FFFFFF",
  },

  grey: [
    "#F2F2F2",
    "#E6E6E6",
    "#CCCCCC",
    "#B3B3B3",
    "#999999",
    "#808080",
    "#666666",
    "#4D4D4D",
    "#333333",
    "#1A1A1A",
  ],

  greenGrey: [
    "#EDF2EE",
    "#DAE5DA",
    "#B4CCB4",
    "#96B297",
    "#7A997C",
    "#618062",
    "#406B42",
    "#2B572E",
    "#173B1A",
    "#002603",
  ],
};

export const Typography = css`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.$margintop};

  color: ${(props) => props.$textcolor || colors.grey[9]};
  font-family: ${(props) => {
    if (props.$semibold === "true") {
      return "Poppins SemiBold";
    }
    if (props.$medium === "true") {
      return "Poppins Medium";
    } else {
      return "Poppins";
    }
  }};
  ${(props) => props.$textalign && `text-align: ${props.$textalign};`}
  ${(props) => props.$lspacing && `letter-spacing: ${props.$lspacing};`}
  ${(props) =>
    props.$texttransform && `text-transform: ${props.$texttransform};`}
  ${(props) => props.$whitespace && `white-space: ${props.$whitespace};`}
  line-height: ${(props) => props.$lineheight || "150%"};
  font-weight: normal;
  transition: color 0.5s;
`;

export const Body = {
  XXL: styled.p`
    ${Typography}
    font-size: 24px;
  `,
  XL: styled.p`
    ${Typography}
    font-size: 20px;
  `,
  Large: styled.p`
    ${Typography}
    font-size: 18px;
  `,
  Medium: styled.p`
    ${Typography}
    font-size: 16px;
  `,
  Small: styled.p`
    ${Typography}
    font-size: 14px;
  `,
  Tiny: styled.p`
    ${Typography}
    font-size: 12px;
  `,
};

export const Headings = {
  Display: styled.p`
    ${Typography}
    font-size: 72px;
    line-height: 120%;
  `,

  Heading01: styled.p`
    ${Typography}
    font-size: 56px;
    line-height: 120%;
  `,

  Heading02: styled.p`
    ${Typography}
    font-size: 48px;
    line-height: 120%;
  `,

  Heading03: styled.h4`
    ${Typography}
    font-size: 40px;
    line-height: 120%;
  `,

  Heading04: styled.p`
    ${Typography}
    font-size: 36px;
    line-height: 120%;
  `,

  Heading05: styled.p`
    ${Typography}
    font-size: 32px;
    line-height: 38.4px;
  `,
};

export const DifferentText = styled.span`
  ${Typography}
  font-size: ${(props) => props.fontsize || "inherit"};
`;

export const StyledImg = styled.img`
  max-width: 100%;

  display: block;
  pointer-events: none;
`;

export const Page = styled.main`
  width: 100vw;
  height: ${(props) => props.height};

  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

export const SliderButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.brandingColors.white};
  border: 1px solid ${colors.grey[1]};

  &:hover {
    background: ${colors.brandingColors.primary};
    border: transparent;

    & path {
      stroke: ${colors.brandingColors.white};
    }
  }
`;
