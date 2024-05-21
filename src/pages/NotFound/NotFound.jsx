import React from "react";
import { Body, Headings, Page, StyledImg, colors, Typography } from "#common/common.style";
import Breadcrumbs from "#components/Breadcrumbs";
import styled from "styled-components";
import NotFoundImg from "#images/NotFoundImg.png";
import { Link } from "react-router-dom";

const NotFoundMessage = styled.div`
  width: 612px;
  margin-top: 80px;
  margin-bottom: 80.97px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackToHomeButton = styled(Link).attrs({ to: "/" })`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 163px;
  height: 45px;
  border-radius: 43px;
  margin-top: 24px;

  ${Typography}
  color: ${colors.brandingColors.white};
  font-family: "Poppins SemiBold";
  font-size: 14px;

  background-color: ${colors.brandingColors.primary};

  &:hover {
    background-color: ${colors.brandingColors.hardPrimary};
  }
`;

function NotFoundPage() {
  const breadcrumb = [{ title: "404 Error Page", href: null }];

  return (
    <Page height="852px">
      <Breadcrumbs breadcrumbWay={breadcrumb} />
      <NotFoundMessage>
        <StyledImg src={NotFoundImg} />
        <Headings.Heading03
          $margintop="32px"
          $textcolor={colors.grey[9]}
          $semibold="true"
        >
          Oops! page not found
        </Headings.Heading03>
        <Body.Medium
          $margintop="20px"
          $textcolor={colors.grey[5]}
          $textalign="center"
        >
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </Body.Medium>
        <BackToHomeButton>Back To Home</BackToHomeButton>
      </NotFoundMessage>
    </Page>
  );
}

export default NotFoundPage;
