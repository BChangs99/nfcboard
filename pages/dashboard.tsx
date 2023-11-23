import React from 'react';
import { Card, Button } from '@tremor/react';

const DashboardWidget: React.FC = () => {
    return (
        <Card>
            <div> 
                <h2>Dashboard Widget</h2>
            </div>
            <Card>
                <p>Some dashboard content...</p>
                <Button variant="primary">Action</Button>
            </Card>
        </Card>
    );
}

export default DashboardWidget;
