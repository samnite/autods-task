import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const StyledForm = styled(Form)`
  margin: 15px 0;
  position: absolute;
  right: 0;
`;

const StyledInput = styled(Input)`
  width: 160px;
  &::placeholder {
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: var(--color-black);
  }
`;

const InputForm = () => {
  const [select, setSelect] = useState('Select source site');
  const handleInput = e => {
    // Need for task
    console.log(e.target.value);
  };
  const handleSelect = value => {
    setSelect(value);
    // Need for task
    console.log(value);
  };
  return (
    <StyledForm layout="inline">
      <Form.Item>
        <StyledInput placeholder="Enter Source ID" onChange={handleInput} />
      </Form.Item>
      <Form.Item>
        <Select value={select} style={{ width: '160px', color: '#727272' }} onChange={handleSelect}>
          <Option value="amazon">Amazon</Option>
          <Option value="ebay">Ebay</Option>
          <Option value="alliexpress">AlliExpress</Option>
        </Select>
      </Form.Item>
    </StyledForm>
  );
};

export default InputForm;
