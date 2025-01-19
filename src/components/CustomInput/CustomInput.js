import React from 'react';
import { CustomInputWrapper } from './CustomInput.styled';

const CustomInput = ({ placeholder, onChange, value }) => {
  return <CustomInputWrapper type="text" placeholder={placeholder} onChange={onChange} value={value} />;
};

export default CustomInput;
