import React, { useState } from 'react';
import { Tabs, Typography } from 'antd';
import AddFromCsv from './pages/add-from-csv';

const { TabPane } = Tabs;
const operations = <p>How do i get the source products ID</p>;

const Navigation = () => {
  const [current, setCurrent] = useState('manual');
  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          <AddFromCsv />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navigation;
