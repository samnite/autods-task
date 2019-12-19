import React from 'react';
import { Button as Btn } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Btn)`
  width: 143px;
  height: 45px;
  float: right;
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 16px;
  background-color: var(--primary-color);
  color: #fff;
  &:hover,
  &:focus {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    color: #fff;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
