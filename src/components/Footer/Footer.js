import React from 'react';
import { FooterWrapper } from './Footer.styled';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
  <FooterWrapper>
    <img style={{ width: "350px", height: "50px" }} src={logo} alt="logo" />
    <p>Desarrollado por Diana Itzel</p>
    <p>ALURA LATAM - 2025</p>
  </FooterWrapper>
  );
};

export default Footer;