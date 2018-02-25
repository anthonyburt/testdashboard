import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTooltip } from 'victory'

class BarGraphPassFail extends React.Component {
	render () {

        const fails = [
          {tribe: 1, results: 20, label:"fails"},
          {tribe: 2, results: 4, label:"fails"},
          {tribe: 3, results: 20, label:"fails"},
          {tribe: 4, results: 50, label:"fails"}
        ];

        const passes = [
          {tribe: 1, results: 10, label:"passes"},
          {tribe: 2, results: 9, label:"passes"},
          {tribe: 3, results: 0, label:"passes"},
          {tribe: 4, results: 20, label:"passes"}
        ];

        return (

            <VictoryChart
                domainPadding={20}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={["Shop X", "Checkout", "OA", "Order Mgmt"]}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={(x) => (`${x}`)}
                />
                <VictoryStack
                    colorScale={["red", "green"]}
                >
                    <VictoryBar
                        labelComponent={<VictoryTooltip/>}
                        data={fails}
                        x="tribe"
                        y="results"
                    />
                    <VictoryBar
                    labelComponent={<VictoryTooltip/>}
                        data={passes}
                        x="tribe"
                        y="results"
                    />
                </VictoryStack>
            </VictoryChart>
        )
	}
}

export default BarGraphPassFail
