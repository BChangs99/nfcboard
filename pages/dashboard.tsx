import React from 'react';
import { Card, Tab, TabGroup, TabList } from '@tremor/react';
import { UpTimeCard } from '../src/components/organisms/UpTimeCard'; 
import { DataBarChart } from '../src/components/organisms/DataBarChart'; 
import TallyBars from '../src/components/organisms/TallyBars';
import Header from '../src/components/molecules/Header';

const DashboardWidget: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    // Hardcoded data for now
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

    const barChartData = {
        title: "Total Tallies",
        subtitle: "Tallies tracked across all data",
        categories: ["Weight Training", "Vitamin Intake", "Skin Routine", "Cardio"],
        colors: ["blue", "orange", "green", "red"],
        chartData: [
            {
              name: "January",
              "Weight Training": 1230,
              "Vitamin Intake": 751,
              "Skin Routine": 471,
              "Cardio": 471,
            },
            {
              name: "February",
              "Weight Training": 2000,
              "Vitamin Intake": 594,
              "Skin Routine": 733,
              "Cardio": 621,
            },
            {
              name: "March",
              "Weight Training": 2400,
              "Vitamin Intake": 893,
              "Skin Routine": 123,
              "Cardio": 1238,
            },
            {
              name: "April",
              "Weight Training": 2500,
              "Vitamin Intake": 123,
              "Skin Routine": 345,
              "Cardio": 948,
            },
          ]
    }



    // ToDo compenentize this into navbar, first row content, and second row main content
    return (
        <div className={`${darkMode ? "dark" : '' }`} >
            <div className={`flex flex-col w-screen h-screen dark:bg-black gap-8 p-12`}>
                <div className='flex flex-col mb-8'>
                    <Header toggleDarkMode={toggleDarkMode} />
                    <TabGroup>
                        <TabList className="mt-8 mb-8">
                            <Tab>All Data</Tab>
                            <Tab>Weight Training</Tab>
                            <Tab>Face Routine</Tab>
                        </TabList>
                    </TabGroup>
                    <div className='flex flex-row gap-12'>
                        {tallyData.map((tally) => (
                            <TallyBars tallyData={tally}/>
                        ))}
                    </div>
                </div>
                    <DataBarChart data={barChartData}/>
            </div>
        </div>
    );
}

export default DashboardWidget;
