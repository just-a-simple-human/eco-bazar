import styled from "styled-components";
import { colors, Typography } from "#common/common.style";
import { Link } from "react-router-dom";

export const AppBarContainer = styled.header`
  height: 195px;
  min-width: 100vw;

  & > :is(:first-child, :last-child) {
    justify-content: space-between;
  }
`;

export const StyledLocation = styled.div`
  height: 18px;
  width: 315px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLinks = styled.div`
  width: 232px;
  height: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
`;

export const SignInSignUpLink = styled(Link)`
  ${Typography}
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.grey[6]};
`;

export const TelethoneLink = styled.a`
  display: flex;
  width: 139px;
  height: 28px;
  justify-content: space-between;
  align-items: center;
`;

export const AppBarLine = styled.div`
  height: ${(props) => props.height};
  padding-inline: calc((100vw - 1320px) / 2);

  display: flex;
  align-items: center;

  background: ${(props) => props.$bg};

  &:nth-child(2) {
    border-top: 1px solid #e5e5e5;
  }
`;

export const SelectContainer = styled.div`
  width: ${(props) => props.width || "35px"};
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Typography}

  position: relative;

  & > img {
    transition: inherit;
  }

  &:not(:has(ul[hidden])) > img {
    transform: translateY(1.5px);
  }

  & > ul {
    left: 0;
  }
`;