import React from 'react';
import { Card } from '@tremor/react';
import { GrowthRatesLineChart, LineChartSliderExample } from '../src/components/organisms/Graphs'; 
import { UpTimeCard } from '../src/components/organisms/UpTimeCard';

const DashboardWidget: React.FC = () => {
    return (
        <Card>
            <GrowthRatesLineChart />
            <LineChartSliderExample />
            <UpTimeCard/>
        </Card>
    );
}

export default DashboardWidget;
