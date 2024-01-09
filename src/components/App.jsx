import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Points, Props, Todo } from 'tabs';

export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Todo</Tab>
          <Tab>Points</Tab>
          <Tab>props</Tab>
        </TabList>

        <TabPanel>
          <Todo />
        </TabPanel>
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
