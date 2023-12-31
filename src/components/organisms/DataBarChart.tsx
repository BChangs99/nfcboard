import React from 'react'
import { BarChart, Card, Title, Subtitle} from "@tremor/react";

export const DataBarChart = (props) => {
  return (
    <Card className="mt-25">
      <Title>{props.data.title}</Title>
      <Subtitle>
        {props.data.subtitle}
      </Subtitle>
      <BarChart
        className="mt-6"
        data={props.data.chartData}
        index="name"
        categories={props.data.categories}
        colors={props.data.colors}
        yAxisWidth={64}
      />
    </Card>
  )
}
