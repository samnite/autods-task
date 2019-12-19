import React from 'react';
import { Tabs, Typography } from 'antd';
import styled from 'styled-components';
import AddFromCsv from './pages/add-from-csv';
import ManualAdd from './pages/manual-add';

const StyledTabs = styled(Tabs)`
  .ant-tabs-ink-bar {
    border-bottom: 2px solid var(--primary-color);
  }
  .ant-tabs-tab-active {
    color: #333;
  }
`;
const StyledExtra = styled.p`
  color: var(--secondary-color);
`;

const { TabPane } = Tabs;
const operations = <StyledExtra>How do i get the source products ID</StyledExtra>;

const Navigation = () => {
  return (
    <div>
      <StyledTabs tabBarExtraContent={operations}>
        <TabPane tab="Manual Add" key="1">
          <ManualAdd />
        </TabPane>
        <TabPane tab="Add from CSV" key="2">
          <AddFromCsv />
        </TabPane>
      </StyledTabs>
    </div>
  );
};

export default Navigation;
