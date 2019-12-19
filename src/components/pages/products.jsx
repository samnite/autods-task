import React, { useState } from 'react';
import styled from 'styled-components';
import ProductItem from '../product-item/product-item';
import Button from '../button';
import { base } from '../../base';

const StyledProducts = styled.div`
  display: block;
  border-bottom: 1px solid #e5e5e5;
  max-height: 430px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Products = () => {
  const [count, setCount] = useState(0);
  const incrCount = () => {
    setCount(count + 1);
  };
  const decrCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <StyledProducts>
        {base.map((el, i) => {
          return (
            <ProductItem img={el.img} key={i} onIncrCount={incrCount} onDecrCount={decrCount} />
          );
        })}
      </StyledProducts>
      <Button>Add ({count})</Button>
    </>
  );
};

export default Products;
