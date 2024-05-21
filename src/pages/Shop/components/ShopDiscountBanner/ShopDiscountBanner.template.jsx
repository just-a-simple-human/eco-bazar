import React, { useState } from "react";
import { Body, Headings, colors } from "#common/common.style";
import ShopNowArrow from "#svg/ShopNowArrow";
import Timer from "#ui/Timer";
import { Discount, DiscountBanner, DiscountCircle, DiscountHeading, DiscountInfo, ShopNowButton } from "./ShopDiscountBanner.style";

function ShopDiscountBanner() {
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
    <DiscountBanner>
      <Discount>
        <DiscountInfo>
          <DiscountHeading>
            <Body.Small
              $textcolor={colors.brandingColors.white}
              $texttransform="uppercase"
              $lineheight="100%"
              $lspacing="0.28px"
              $medium
            >
              Best Deals
            </Body.Small>
            <Headings.Heading03
              as={"h2"}
              $textcolor={colors.brandingColors.white}
              $semibold
            >
              Sale of the Month
            </Headings.Heading03>
          </DiscountHeading>
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
        </DiscountInfo>
        <ShopNowButton>
          <Body.Small $textcolor={colors.brandingColors.white} $semibold>
            Shop Now
          </Body.Small>
          <ShopNowArrow
            width="15"
            height="12.05"
            color={colors.brandingColors.primary}
          />
        </ShopNowButton>
      </Discount>
      <DiscountCircle>
        <Body.XXL $textcolor={colors.brandingColors.white} $semibold>
          56%
        </Body.XXL>
        <Body.Small
          $textcolor="rgba(259, 259, 259, 0.8)"
          $texttransform="uppercase"
          $lineheight="100%"
          $lspacing="0.28px"
          $medium
        >
          Off
        </Body.Small>
      </DiscountCircle>
    </DiscountBanner>
  );
}

export default ShopDiscountBanner;
