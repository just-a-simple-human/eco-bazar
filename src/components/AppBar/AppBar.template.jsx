import React, { useContext } from "react";
import { colors, StyledImg, Body } from "#common/common.style";
import {
  AppBarContainer,
  AppBarLine,
  StyledLocation,
  StyledLinks,
  SelectContainer,
  SignInSignUpLink,
  TelethoneLink
} from "./AppBar.style"
import MapPinImg from "#images/Map Pin.svg";
import DeviderImg from "#images/Devider.svg";
import Select from "#ui/b/Select";
import { MainContext } from "#context";
import LogoImg from "#images/HeaderLogo.svg";
import TelephoneImg from "#images/Telephone.svg";
import SelectArrow from "#images/SelectArrow.svg";
import UserButtons from "./components/UserButtons/UserButtons.template";
import NavLinks from "./components/NavLinks/NavLinks.template";
import SearchForm from './components/SearchForm/SearchForm.template';


function AppBar() {
  const { language, setLanguage } = useContext(MainContext);
  const { currency, setCurrency } = useContext(MainContext);

  function changeLanguage(selectedLanguage) {
    setLanguage(selectedLanguage);
  }
  function changeCurrency(selectedCurrency) {
    setCurrency(selectedCurrency);
  }

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
              changer={changeLanguage}
              buttontext={language}
              selectList={["Eng", "Ru"]}
            />
            <StyledImg src={SelectArrow} />
          </SelectContainer>

          <SelectContainer width="37px" $textcolor={colors.grey[6]}>
            <Select
              changer={changeCurrency}
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
