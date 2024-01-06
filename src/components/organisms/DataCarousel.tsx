import React, { Fragment } from 'react'
import { DataTabs } from '../molecules/DataTabs'
import TallyBars from '../molecules/TallyBars'

const DataCarousel = () => {
   // Temp hardcoded data
   const tallyData = [
      {
          source: "Source",
          dataType: "Tallies",
          name: "All Data",
          barData: [
              {
                  name: "Weight Training",
                  value: 1230,
                  href: "",
                  icon: ""
              },
              {
                  name: "Vitamin Intake",
                  value: 751,
                  href: "",
                  icon: ""
              },
              {
                  name: "Skin Routine",
                  value: 471,
                  href: "",
                  icon: ""
              }
          ]
      },
      {
          name: "Vitamin Intake",
          barData: [
              {
                  name: "Steroids",
                  value: 1230,
                  href: "",
                  icon: "",
              },
              {
                  name: "Vitamin C",
                  value: 751,
                  href: "",
                  icon: "",
              },
              {
                  name: "Vitamin D",
                  value: 471,
                  href: "",
                  icon: "",
              }
          ]
      },
      {
          name: "Skin Routine",
          barData: [
              {
                  name: "Face Wash",
                  value: 1230,
                  href: "",
                  icon: "",
              },
              {
                  name: "Exfoliant",
                  value: 751,
                  href: "",
                  icon: "",
              },
              {
                  name: "Moisturizer",
                  value: 471,
                  href: "",
                  icon: "",
              }
          ]
      }
  ]
  return (
      <Fragment>
         <DataTabs />
         <div className='flex flex-col items-center gap-12 2xl:flex-row'>
            {tallyData.map((tally) => (
               <TallyBars key={tally.name} tallyData={tally}/>
            ))}
         </div>
      </Fragment>
  )
}

export default DataCarousel