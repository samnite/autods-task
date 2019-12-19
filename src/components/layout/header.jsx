import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const StyledHeader = styled.div`
  position: relative;
  h1 {
    color: #5a5859;
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
  }
`;
const StyledIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  svg {
    color: #b7b7b7;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledIcon>
        <Icon type="close" viewBox="0 0 1024 1024" />
      </StyledIcon>
      <h1>23 Untracked products in my store</h1>
    </StyledHeader>
  );
};

export default Header;
//
