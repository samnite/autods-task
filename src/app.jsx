import React from 'react';
import styled from 'styled-components';
import Header from './components/layout/header';
import MainPage from './components/pages/main-page';

const StyledContainer = styled.div`
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const App = () => {
  return (
    <StyledContainer>
      <Header />
      <MainPage />
    </StyledContainer>
  );
};

export default App;
