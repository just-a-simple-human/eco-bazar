import React, {useContext} from 'react'
import styled from 'styled-components'
import {colors, StyledImg, Body, Typography} from '../../default'
import MapPinImg from '../../images/Map Pin.svg'
import DeviderImg from '../../images/Devider.svg'
import Select from '../UI/buttons/Select'
import { MainContext } from '../../context'
import LogoImg from '../../images/HeaderLogo.svg'
import SearchForm from '../UI/inputs/SearchForm'
import WishListAndCartButton from '../UserButtons';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks'
import TelephoneImg from '../../images/Telephone.svg'

const StyledAppBar = styled.header`

  height: 195px;
  min-width: 100vw;
  
  & > :is(:first-child, :last-child){
    justify-content: space-between;
  }

`

const StyledLocation = styled.div`

  height: 18px;
  width: 315px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

`

const StyledLinks = styled.div`

  width: 232px;
  height: 16px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;

`

const SignInSignUpLink = styled(Link)`

  ${Typography}
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.grey[6]};

`

const TelethoneLink = styled.a`

  display: flex;
  width: 139px;
  height: 28px;
  justify-content: space-between;
  align-items: center;

`

const AppBarLine = styled.div`

  height: ${props => props.height};
  padding-inline: calc((100vw - 1320px)/2);

  display: flex;
  align-items: center;

  background: ${props => props.$bg};

  &:nth-child(2) {

    border-top: 1px solid #e5e5e5;

  }

`

function AppBar() {

  const {language, setLanguage} = useContext(MainContext);
  const {currency, setCurrency} = useContext(MainContext);

  function changeLanguage(selectedLanguage) {
    setLanguage(selectedLanguage)
  }
  function changeCurrency(selectedCurrency) {
    setCurrency(selectedCurrency)
  }


  return (

    <StyledAppBar id='start'>

        <AppBarLine height="42px" $bg={colors.brandingColors.white}>
        
            <StyledLocation>
              <StyledImg src={MapPinImg}></StyledImg>
              <Body.Tiny width="292px" $textcolor={colors.grey[6]}>Store Location: Lincoln- 344, Illinois, Chicago, USA</Body.Tiny>
            </StyledLocation>

            <StyledLinks>

              <Select changer={changeLanguage} buttontext={language} selectlist={['Eng', 'Ru']}></Select>

              <Select changer={changeCurrency} width="37px" buttontext={currency} selectlist={['USD', 'RUB']}></Select>

              <StyledImg src={DeviderImg}></StyledImg>

              <SignInSignUpLink to={`/test`} $textcolor={colors.grey[6]}>Sign In / Sign Up</SignInSignUpLink>

            </StyledLinks>
            
            

        </AppBarLine>

        <AppBarLine $bg={colors.brandingColors.white} height="93px">

              <StyledImg src={LogoImg}></StyledImg>

              <SearchForm></SearchForm>

              <WishListAndCartButton/>

        </AppBarLine>

        <AppBarLine $bg={colors.grey[8]} height="60px">

          <NavLinks/>

          <TelethoneLink href='tel:+79884711165'>
            <StyledImg src={TelephoneImg}/>
            <Body.Small $textcolor={colors.brandingColors.white}>(988) 471-1165</Body.Small>
          </TelethoneLink>

        </AppBarLine>

    </StyledAppBar>

  )
}

export default AppBar