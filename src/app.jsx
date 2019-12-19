import React from 'react';
import Header from './components/layout/header';
import Navigation from './components/navigation';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <StyledContainer>
      <Header />
      <Navigation />
    </StyledContainer>
  );
};

export default App;
