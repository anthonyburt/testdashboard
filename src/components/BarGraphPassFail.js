import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTooltip, VictoryLabel } from 'victory'

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
                animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                }}
            >
                <VictoryLabel text="Tribe Health" x={225} y={30} textAnchor="middle"/>
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
                    style={{
                        data: {
                            fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                        },
                    }}
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
