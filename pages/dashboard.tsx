import React from "react";
import { Card } from "@tremor/react";
import {
  GrowthRatesLineChart,
  LineChartSliderExample,
} from "../src/components/organisms/Graphs";
import { UpTimeCard } from "../src/components/organisms/UpTimeCard";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const DashboardWidget: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

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

    return (
        <div className={`${darkMode ? "dark" : '' }`}>
            <div className="flex flex-col w-full min-h-full h-screen dark:bg-[url('/dark_background_gradient.png')] bg-[url('/light_background_gradient.png')] bg-center bg-auto gap-8 p-12">
                <div className='flex flex-col mb-8'>
                    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <DataCarousel />
                </div>
                    <DataBarChart data={barChartData}/>
            </div>
        </div>
    );
}

export default DashboardWidget;
