import React from "react";
import {
  Body,
  DifferentText,
  Headings,
  colors,
} from "#common/common.style";
import {
  WelcomeBlockCotainer,
  WelcomeBlockContent,
  WelcomeBlockHeading,
  WelcomeBlockOffer,
  ShopNowButton,
  StyledWelcomeBlockImg
} from "./WelcomeBlock.style"
import WelcomeBlockImg from "#images/WelcomeBlockImg.png";
import DeliveryTruckIcon from "#images/DeliveryTruckIcon.svg";
import HeadphonesIcon from "#images/HeadphonesIcon.svg";
import ShoppingBagIcon from "#images/ShoppingBagIcon.svg";
import PackageIcon from "#images/PackageIcon.svg";
import ShopNowArrow from "#svg/ShopNowArrow";
import Features from "./components/Features/Features.jsx";

const currentFeatures = [
  {
    icon: DeliveryTruckIcon,
    title: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    icon: ShoppingBagIcon,
    title: "100% Secure Payment",
    description: "We ensure your money is save",
  },
  {
    icon: PackageIcon,
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

function WelcomeBlock() {
  return (
    <WelcomeBlockCotainer>
      <WelcomeBlockContent>
        <WelcomeBlockHeading>
          <Body.Small
            $lspacing="0.28px"
            $textcolor={colors.brandingColors.primary}
            $texttransform="uppercase"
            $medium="true"
            $lineheight="100%"
          >
            Welcome to shopery
          </Body.Small>
          <Headings.Display
            as={"h1"}
            $textcolor={colors.grey[9]}
            $semibold="true"
          >
            Fresh & Healthy Organic Food
          </Headings.Display>
        </WelcomeBlockHeading>
        <WelcomeBlockOffer>
          <Headings.Heading05 height="38px">
            Sale up to{" "}
            <DifferentText
              $textcolor={colors.brandingColors.warning}
              $texttransform="uppercase"
              $semibold="true"
            >
              30% OFF
            </DifferentText>
          </Headings.Heading05>
          <Body.Small $textcolor={colors.grey[5]} $whitespace="nowrap">
            Free shipping on all your order. We deliver, you enjoy
          </Body.Small>
        </WelcomeBlockOffer>
        <ShopNowButton to={`/shop`} $semibold="true">
          Shop now
          <ShopNowArrow />
        </ShopNowButton>
      </WelcomeBlockContent>
      <StyledWelcomeBlockImg src={WelcomeBlockImg} />
      <Features featuresList={currentFeatures} />
    </WelcomeBlockCotainer>
  );
}

export default WelcomeBlock;
