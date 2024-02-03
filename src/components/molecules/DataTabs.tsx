import React from 'react'
import { Tab, TabGroup, TabList } from '@tremor/react';

export const DataTabs = () => {
  return (
      <TabGroup className=''>
         <TabList className="mt-8 mb-8">
            <Tab className="text-white">All Data</Tab>
            <Tab className="text-white">Weight Training</Tab>
            <Tab className="text-white">Face Routine</Tab>
         </TabList>
      </TabGroup>
  )
}
