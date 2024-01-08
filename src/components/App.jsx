import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Points, Props } from 'tabs';

export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Points</Tab>
          <Tab>props</Tab>
        </TabList>

        <TabPanel>
          <Points />
        </TabPanel>
        <TabPanel>
          <Props />
        </TabPanel>
      </Tabs>
    </>
  );
};
