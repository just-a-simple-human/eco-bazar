import styled from "styled-components";
import BackgroungImg from "#images/Breadcrumbs.png";
import { Typography } from "#common/common.style";
import { Link } from "react-router-dom";

export const BreadcrumbsContainer = styled.section`
  width: 100vw;
  height: 120px;
  padding-inline: calc((100vw - 1320px) / 2);

  display: flex;
  align-items: center;

  background-image: url(${BackgroungImg});
`;

export const Location = styled.nav`
  width: fit-content;
  height: 24px;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BreadcrumbContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Breadcrumb = styled(Link)`
  ${Typography}
  font-size: 16px;
`;