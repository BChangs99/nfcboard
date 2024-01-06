import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";

export default function TallyBars(props) {
   
   return (
      <Card className="max-w-5xl hover:shadow-2xl">
         <Title>{props.tallyData.name}</Title>
         <Flex className="mt-4">
            <Text>
            <Bold>{props.tallyData.source}</Bold>
            </Text>
            <Text>
            <Bold>{props.tallyData.dataType}</Bold>
            </Text>
         </Flex>
         <BarList data={props.tallyData.barData} className="mt-2" />
      </Card>
   )
};