import React from 'react'
import { Tab, TabGroup, TabList } from '@tremor/react';

export const DataTabs = () => {
  return (
      <TabGroup className=''>
         <TabList className="mt-8 mb-8">
            <Tab>All Data</Tab>
            <Tab>Weight Training</Tab>
            <Tab>Face Routine</Tab>
         </TabList>
      </TabGroup>
  )
}
