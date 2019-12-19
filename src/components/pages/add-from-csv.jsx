import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
`;

const AddFromCsv = () => {
  return (
    <StyledGrid>
      <div>1 block</div>
      <div>2 block</div>
    </StyledGrid>
  );
};

export default AddFromCsv;
