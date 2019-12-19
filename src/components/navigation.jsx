import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import Field from './pages/field/field';
import Products from './pages/products';

const StyledTabs = styled(Tabs)`
  font-weight: 500;
  font-size: 13px;
  .ant-tabs-ink-bar {
    border-bottom: 2px solid var(--primary-color);
  }
  .ant-tabs-tab-active {
    font-size: 13px;
    color: #5a5859;
    margin: 0;
  }
  .ant-tabs-tab,
  .ant-tabs-tab:hover {
    margin: 0;
    font-size: 13px;
    padding: 12px 12px;
    color: #5a5859;
  }
`;
const StyledExtra = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-color);
`;

const { TabPane } = Tabs;
const operations = <StyledExtra>How do i get the source products ID</StyledExtra>;

const Navigation = () => {
  return (
    <div>
      <StyledTabs tabBarExtraContent={operations}>
        <TabPane tab="Manual Add" key="1">
          <Products />
        </TabPane>
        <TabPane tab="Add from CSV" key="2">
          <Field />
        </TabPane>
      </StyledTabs>
    </div>
  );
};

export default Navigation;
