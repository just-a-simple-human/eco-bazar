import React from "react";
import { Body, StyledImg, colors } from "#common/common.style";
import { Feature, FeatureInfo, FeaturesContainer } from "./Features.style";

function Features({ featuresList }) {
  return (
    <FeaturesContainer>
      {featuresList.map((element, index) => (
        <Feature key={index}>
          <StyledImg src={element.icon}/>
          <FeatureInfo>
            <Body.Medium $textcolor={colors.grey[9]} $semibold="true">
              {element.title}
            </Body.Medium>
            <Body.Small $textcolor={colors.grey[4]}>
              {element.description}
            </Body.Small>
          </FeatureInfo>
        </Feature>
      ))}
    </FeaturesContainer>
  );
}

export default Features;
