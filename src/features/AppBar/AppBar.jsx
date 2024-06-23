import React from "react";
import { colors, StyledImg, Body } from "#common/common.style";
import {
  AppBarContainer,
  AppBarLine,
  StyledLocation,
  StyledLinks,
  SelectContainer,
  SignInSignUpLink,
  TelethoneLink
} from "./AppBar.style.js"
import MapPinImg from "#images/Map Pin.svg";
import DeviderImg from "#images/Devider.svg";
import Select from "#ui/b/Select/Select.jsx";
import LogoImg from "#images/HeaderLogo.svg";
import TelephoneImg from "#images/Telephone.svg";
import SelectArrow from "#images/SelectArrow.svg";
import UserButtons from "./components/UserButtons/UserButtons.jsx";
import NavLinks from "./components/NavLinks/NavLinks.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, changeLanguage } from "#store/appConfigSlice.js";


function AppBar() {

  const language = useSelector(state => state.appConfig.language)
  const currency = useSelector(state => state.appConfig.currency)

  const dispatch = useDispatch()

  return (
    <AppBarContainer id="start">
      <AppBarLine height="42px" $bg={colors.brandingColors.white}>
        <StyledLocation>
          <StyledImg src={MapPinImg}></StyledImg>
          <Body.Tiny width="292px" $textcolor={colors.grey[6]}>
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </Body.Tiny>
        </StyledLocation>

        <StyledLinks>
          <SelectContainer $textcolor={colors.grey[6]}>
            <Select
              changer={language => dispatch(changeLanguage(language))}
              buttontext={language}
              selectList={["Eng", "Ru"]}
            />
            <StyledImg src={SelectArrow} />
          </SelectContainer>

          <SelectContainer width="37px" $textcolor={colors.grey[6]}>
            <Select
              changer={currency => dispatch(changeCurrency(currency))}
              buttontext={currency}
              selectList={["USD", "RUB"]}
            />
            <StyledImg src={SelectArrow} />
          </SelectContainer>

          <StyledImg src={DeviderImg}></StyledImg>

          <SignInSignUpLink to={`/test`} $textcolor={colors.grey[6]}>
            Sign In / Sign Up
          </SignInSignUpLink>
        </StyledLinks>
      </AppBarLine>

      <AppBarLine $bg={colors.brandingColors.white} height="93px">
        <StyledImg src={LogoImg}></StyledImg>

        <SearchForm />

        <UserButtons />
      </AppBarLine>

      <AppBarLine $bg={colors.grey[8]} height="60px">
        <NavLinks />

        <TelethoneLink href="tel:+79884711165">
          <StyledImg src={TelephoneImg} />
          <Body.Small $textcolor={colors.brandingColors.white}>
            (988) 471-1165
          </Body.Small>
        </TelethoneLink>
      </AppBarLine>
    </AppBarContainer>
  );
}

export default AppBar;
