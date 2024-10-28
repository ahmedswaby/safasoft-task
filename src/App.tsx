import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function App() {
  return (
    <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab disabled className="disabled:opacity-50">
          Tab 2
        </Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  )
}