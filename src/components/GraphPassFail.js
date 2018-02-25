import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'

class GraphPassFail extends React.Component {
	render () {

        const passes = [
          {testrun: 1, results: 20},
          {testrun: 2, results: 4},
          {testrun: 3, results: 20},
          {testrun: 4, results: 50}
        ];

        const fails = [
          {testrun: 1, results: 10},
          {testrun: 2, results: 9},
          {testrun: 3, results: 0},
          {testrun: 4, results: 20}
        ];

        return (

            <VictoryChart

                domainPadding={20}
                theme={VictoryTheme.material}
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
                    colorScale={["green", "red"]}
                >
                    <VictoryBar
                        data={fails}
                        x="testrun"
                        y="results"
                    />
                    <VictoryBar
                            data={passes}
                            x="testrun"
                            y="results"
                        />
                </VictoryStack>
            </VictoryChart>
        )
	}
}

export default GraphPassFail
