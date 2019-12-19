import React from 'react';
import Button from '../../button';
import { StyledGrid, StyledField, StyledAside, StyledHr } from './components';
import dropImg from '../../../assets/img/drop.svg';

const Field = () => {
  return (
    <>
      <StyledGrid>
        <StyledField>
          <img src={dropImg} alt="Drop Icon" />
          <h4>Drop CSV File</h4>
          <p>Or select file from your computer</p>
        </StyledField>
        <StyledAside>
          <h4>CSV Format</h4>
          <p>
            The file must be a CSV file with the and should include the next fields as the names of
            the columns:
          </p>
          <ul>
            <li>Product ID</li>
            <li>title</li>
            <li>price</li>
          </ul>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Visit help section</a>
        </StyledAside>
      </StyledGrid>
      <StyledHr />
      <Button>Next</Button>
    </>
  );
};

export default Field;
