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
  return (
    <Card>
      <GrowthRatesLineChart />
      <LineChartSliderExample />
      <UpTimeCard />
    </Card>
  );
};

export default DashboardWidget;
