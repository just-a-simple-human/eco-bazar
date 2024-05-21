import React from "react";
import HomeImg from "#images/Home.svg";
import BreadcrumbsArrow from "#svg/BreadcrumbsArrow";
import { Breadcrumb, BreadcrumbContainer, BreadcrumbsContainer, Location } from "./Breadcrumbs.style";
import { StyledImg } from "#common/common.style";
import { colors } from "#common/common.style";



function Breadcrumbs({ breadcrumbWay }) {
  return (
    <BreadcrumbsContainer>
      <Location>
        <Breadcrumb to={`/`}>
          <StyledImg src={HomeImg} />
        </Breadcrumb>
        {breadcrumbWay.map((element, index) => (
          <BreadcrumbContainer key={Math.random()}>
            <BreadcrumbsArrow />
            <Breadcrumb
              to={element.href}
              $textcolor={
                index === -0 ? colors.brandingColors.primary : colors.grey[4]
              }
            >
              {element.title}
            </Breadcrumb>
          </BreadcrumbContainer>
        ))}
      </Location>
    </BreadcrumbsContainer>
  );
}

export default Breadcrumbs;
