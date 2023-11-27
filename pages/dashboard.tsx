import React from 'react';
import { Card } from '@tremor/react';
import {GrowthRatesLineChart, LineChartSliderExample} from '../src/components/organisms/Graphs'; 

const DashboardWidget: React.FC = () => {
    return (
        <Card>
            <GrowthRatesLineChart />
            <LineChartSliderExample />
        </Card>
    );
}

export default DashboardWidget;
