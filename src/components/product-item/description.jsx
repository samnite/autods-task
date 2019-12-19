import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
`;

const Description = () => {
  return (
    <StyledDescription>
      <h4>Lorem ipsum dolor sit.</h4>
      <p>Lorem ipsum dolor.</p>
    </StyledDescription>
  );
};

export default Description;
