import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ImageGallery, Points, Props, Todo } from 'tabs';

export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Todo</Tab>
          <Tab>ImageGallery</Tab>
          <Tab>Points</Tab>
          <Tab>props</Tab>
        </TabList>

        <TabPanel>
          <Todo />
        </TabPanel>

        <TabPanel>
          <ImageGallery />
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
