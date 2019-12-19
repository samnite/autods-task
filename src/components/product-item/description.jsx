import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    margin-bottom: 0;
    font-size: 15px;
    color: var(--color-black);
  }
  p {
    margin: 0;
  }
`;

const StyledIds = styled.div`
  display: flex;
  color: #b7b7b7;
  p {
    margin-right: 16px;
    font-size: 13px;
  }
`;

const Description = () => {
  return (
    <StyledDescription>
      <h4>consequat excepteur excepteur</h4>
      <StyledIds>
        <p>Sell ID: ER36656685</p>
        <p>SKU: ER36656685</p>
      </StyledIds>
    </StyledDescription>
  );
};

export default Description;
