import React from 'react';
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
    font-family: 'Inter', sans-serif;
    color: var(--color-black);
  }
`;

const InputForm = () => {
  const handleInput = e => {
    console.log(e.target.value);
  };
  const handleChange = value => {
    console.log(value);
  };
  return (
    <StyledForm layout="inline">
      <Form.Item>
        <StyledInput placeholder="Enter Source ID" onChange={handleInput} />
      </Form.Item>
      <Form.Item>
        <Select
          value="Select source site"
          style={{ width: '160px', color: '#727272' }}
          onChange={handleChange}
        >
          <Option value="amazon">Amazon</Option>
          <Option value="ebay">Ebay</Option>
          <Option value="alliexpress">AlliExpress</Option>
        </Select>
      </Form.Item>
    </StyledForm>
  );
};

export default InputForm;
