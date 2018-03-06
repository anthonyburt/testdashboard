import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryTooltip, VictoryLabel } from 'victory'

class BarGraphPassFail extends React.Component {
	render () {

        const ui = [
          {tribe: 1, results: 550, label:"UI"},
          {tribe: 2, results: 250, label:"UI"},
          {tribe: 3, results: 425, label:"UI"},
          {tribe: 4, results: 25, label:"UI"}
        ];

        const api = [
          {tribe: 1, results: 130, label:"API"},
          {tribe: 2, results: 90, label:"API"},
          {tribe: 3, results: 225, label:"API"},
          {tribe: 4, results: 80, label:"API"}
        ];

        return (

            <VictoryChart
                domainPadding={20}
                animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                }}
            >
                <VictoryLabel text="Test Runs" x={225} y={12} textAnchor="middle" />
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
                    style={{
                        axisLabel: {fontSize: 15, padding: 35}
                    }}
                />
                <VictoryGroup
                    offset={20}
                    colorScale={"qualitative"}
                    style={{
                        data: {
                            fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                        },
                    }}
                >
                    <VictoryBar
                        labelComponent={<VictoryTooltip/>}
                        data={ui}
                        x="tribe"
                        y="results"
                    />
                    <VictoryBar
                    labelComponent={<VictoryTooltip/>}
                        data={api}
                        x="tribe"
                        y="results"
                    />
                </VictoryGroup>
            </VictoryChart>
        )
	}
}

export default BarGraphPassFail
