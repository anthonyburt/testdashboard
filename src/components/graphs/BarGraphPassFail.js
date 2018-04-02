import React from 'react'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryTooltip, VictoryLabel } from 'victory'
import { Loader, Dimmer, Icon } from 'semantic-ui-react'

class BarGraphPassFail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          bargraph_data: [],
          api: [],
          selenium: []
        }
    }

    componentDidMount() {
        axios.get(`api/stats/totaltestruns`)
          .then(res => {
            const bargraph_data = res.data;
            this.setState({ bargraph_data });
            this.setState({ api: this.state.bargraph_data.map((item) =>  item.data[0].v) })
            this.setState({ selenium: this.state.bargraph_data.map((item) =>  item.data[1].v) })
          })
    }

	render () {

        if( this.state.selenium[0] === undefined || this.state.api === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        return (

            <VictoryChart
                domainPadding={20}
                animate={{
                    duration: 1000,
                    onLoad: { duration: 1000 }
                }}
            >
                <VictoryLabel text="Test Runs" x={225} y={12} textAnchor="middle" />
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    tickValues={[1, 2]}
                    tickFormat={["E-comm", "Payments"]}
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

                        data={this.state.selenium[0]}
                        labelComponent={<VictoryTooltip/>}
                        x="tribe"
                        y="test_count"
                    />
                    <VictoryBar
                        labelComponent={<VictoryTooltip/>}
                        data={this.state.api[0]}
                        x="tribe"
                        y="test_count"
                    />
                </VictoryGroup>
            </VictoryChart>


        )
	}
}

export default BarGraphPassFail
