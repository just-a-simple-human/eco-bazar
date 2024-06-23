import React, { useState } from "react";
import { Body, Headings, colors } from "#common/common.style";
import ShopNowArrow from "#svg/ShopNowArrow";
import Timer from "#ui/Timer/Timer.jsx";
import { Banner, BannerHeading, AccentSaleContainer, SaleBannersContainer, SaleContainer, ShopNowButton } from "./SaleBanners.style";

function SaleBanners() {
  let [days, setDays] = useState();
  let [hours, setHours] = useState();
  let [mins, setMins] = useState();
  let [secs, setSecs] = useState();

  let timerFinishDate = "November, 29, 2024";

  function getTime() {
    const time = Date.parse(timerFinishDate) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  }

  return (
    <SaleBannersContainer>
      <Banner $bg={require("#images/SaleOfMonthBanner.png")}>
        <BannerHeading>
          <Body.Small
            $textcolor={colors.brandingColors.white}
            $texttransform="uppercase"
            $medium="true"
          >
            Best Deals
          </Body.Small>
          <Headings.Heading03
            $textcolor={colors.brandingColors.white}
            $semibold="true"
          >
            Sale of the Month
          </Headings.Heading03>
        </BannerHeading>

        {(() => {
          if (days <= 0 && hours <= 0 && mins <= 0 && secs <= 0) {
            return (
              <Body.Medium $textcolor={colors.brandingColors.white}>
                The countdown is finished!
              </Body.Medium>
            );
          } else {
            return (
              <Timer
                timedata={{
                  days,
                  setDays,
                  hours,
                  setHours,
                  mins,
                  setMins,
                  secs,
                  setSecs,
                  timerFinishDate,
                  getTime,
                }}
              />
            );
          }
        })()}

        <ShopNowButton>
          <Body.Small
            $textcolor={colors.brandingColors.primary}
            $semibold="true"
          >
            Shop Now
          </Body.Small>
          <ShopNowArrow
            width="15"
            height="12.05"
            color={colors.brandingColors.primary}
          />
        </ShopNowButton>
      </Banner>

      <Banner $bg={require("#images/LowFatMeatBanner.png")}>
        <BannerHeading>
          <Body.Small
            $textcolor={colors.brandingColors.white}
            $texttransform="uppercase"
            $medium="true"
          >
            85% Fat Free
          </Body.Small>
          <Headings.Heading03
            $textcolor={colors.brandingColors.white}
            $semibold="true"
          >
            Low-Fat Meat
          </Headings.Heading03>
        </BannerHeading>

        <SaleContainer>
          <Body.Large $textcolor={colors.brandingColors.white}>
            Started at
          </Body.Large>
          <Body.Large
            $textcolor={colors.brandingColors.warning}
            $semibold="true"
          >
            $79.99
          </Body.Large>
        </SaleContainer>

        <ShopNowButton>
          <Body.Small
            $textcolor={colors.brandingColors.primary}
            $semibold="true"
          >
            Shop Now
          </Body.Small>
          <ShopNowArrow
            width="15"
            height="12.05"
            color={colors.brandingColors.primary}
          />
        </ShopNowButton>
      </Banner>

      <Banner $bg={require("#images/FreshFruitBanner.png")}>
        <BannerHeading>
          <Body.Small $texttransform="uppercase" $medium="true">
            Summer Sale
          </Body.Small>
          <Headings.Heading03 $semibold="true">
            100% Fresh Fruit
          </Headings.Heading03>
        </BannerHeading>

        <SaleContainer>
          <Body.Large>Up to</Body.Large>
          <AccentSaleContainer>
            <Body.Large $textcolor="#fcc900" $medium="true">
              64% OFF
            </Body.Large>
          </AccentSaleContainer>
        </SaleContainer>

        <ShopNowButton>
          <Body.Small
            $textcolor={colors.brandingColors.primary}
            $semibold="true"
          >
            Shop Now
          </Body.Small>
          <ShopNowArrow
            width="15"
            height="12.05"
            color={colors.brandingColors.primary}
          />
        </ShopNowButton>
      </Banner>
    </SaleBannersContainer>
  );
}

export default SaleBanners;
