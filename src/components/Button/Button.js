import React from 'react';
import { ButtonWrapper } from './Button.styled';

const Button = ({ placeholder, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{placeholder}</ButtonWrapper>;
};

export default Button;
