import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
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
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: var(--primary-color);
  }
  img {
    height: 60px;
    padding: 0 8px;
  }
`;

const StyledProduct = styled.div`
  padding: 1rem;
  display: flex;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
`;
const ProductItem = ({ img, onIncrCount, onDecrCount }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      onIncrCount();
    } else {
      onDecrCount();
    }
  };

  return (
    <StyledProduct style={{ backgroundColor: isChecked ? '#f2f2f2' : '#fff' }}>
      <StyledCheckbox onChange={onChange}>
        <img src={img} alt="Item" />
      </StyledCheckbox>
      <Description />
      <InputForm />
    </StyledProduct>
  );
};

export default ProductItem;
