import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import IMG from '../../assets/img/clock.png';
import Description from './description';
import InputForm from './input-form';

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--primary-color);
  }
  .ant-checkbox-checked::after {
    border: 1px solid var(--primary-color);
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--primary-color);
  }
  img {
    height: 64px;
    border-radius: 10px;
    padding: 0 0.5rem;
  }
`;

const StyledProduct = styled.div`
  display: flex;
  position: relative;
`;
const ProductItem = () => {
  return (
    <StyledProduct>
      <StyledCheckbox>
        <img src={IMG} alt="ddd" />
      </StyledCheckbox>
      <Description />
      <InputForm />
    </StyledProduct>
  );
};

export default ProductItem;
