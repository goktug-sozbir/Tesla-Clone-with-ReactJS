/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Fade from "react-reveal/Fade";

const Header = () => {

  const [ burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CheckBoxIcon onClick = {() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Test Driver</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Suppport</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap:no-wrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

 a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
   }
`

const CustomMenu = styled(MenuIcon)`
   cursor: pointer;
`

const BurgerNav = styled.div`
   position: fixed;
   top:0;
   bottom:0;
   right:0;
   background: white;
   width: 300px;
   z-index: 16;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column:
   text-align: start;
   transform: ${props => props.show ? "translateX(100%)" : "translateX(0)"}
   transition: transform 0.2s;
   li {
     padding: 15px 0;
     border-bttom: 1px solid rgba(0, 0, 0, .2)

     a {
          font-weight: 600;
     }
   }
`

const CheckBoxIcon = styled(IndeterminateCheckBoxIcon)`
   cursor: pointer;
`

const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`