import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 315px;
  width: 626px;
  background: #f2f2f2;
  border-radius: 4px;
  img {
    margin-bottom: 13px;
    height: 40px;
    border-radius: 2px;
  }
  h4 {
    color: var(--secondary-color);
    font-weight: bold;
    font-size: 13px;
  }
  p {
    color: #5a5859;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
  }
`;

export const StyledAside = styled.div`
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 14px;
  h4 {
    font-weight: bold;
    font-size: 13px;
    color: #5a5859;
    margin-bottom: 9px;
  }
  p {
    font-size: 13px;
    color: #5a5859;
    margin-bottom: 8px;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 13px;
    margin-bottom: 8px;
    li::before {
      content: '\u25AA';
      color: #c4c4c4;
      margin-right: 5px;
    }
  }
  a {
    font-size: 13px;
    color: var(--secondary-color);
  }
`;

export const StyledHr = styled.hr`
  margin-top: 32px;
  padding: 0;
  border: 1px solid #e5e5e5;
`;
