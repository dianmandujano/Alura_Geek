import React from 'react';
import { HeaderWrapper } from './Header.styled';
import logo from "../../assets/logo.png";

const Header = () => {
  return <HeaderWrapper><img style={{ alignSelf: "center", width: "300px", height: "300px", objectFit: "contain" }} src={logo} alt="logo" /></HeaderWrapper>;
};

export default Header;
