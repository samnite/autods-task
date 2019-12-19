import React from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import DropField from './drop-field/drop-field';
import Products from './products';

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
    margin-right: 8px;
    font-size: 13px;
    padding: 12px 12px;
    color: #5a5859;
  }
  .ant-tabs-tab {
  }
`;
const StyledExtra = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-color);
`;

const { TabPane } = Tabs;
const operations = <StyledExtra>How do i get the source products ID</StyledExtra>;

const MainPage = () => {
  return (
    <StyledTabs tabBarExtraContent={operations}>
      <TabPane tab="Manual Add" key="1">
        <Products />
      </TabPane>
      <TabPane tab="Add from CSV" key="2">
        <DropField />
      </TabPane>
    </StyledTabs>
  );
};

export default MainPage;
