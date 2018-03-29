import React from 'react'
import { VictoryPie, VictoryTooltip, VictoryChart } from 'victory'
import axios from 'axios'

    const testResults = [
        { x: "25%", y: "25%", label: "Success" },
        { x: "25%", y: "25%", label: "Failures" },
        { x: "25%", y: "25%", label: "Skipped" },
        { x: "25%", y: "25%", label: "Inconclusive" }
    ]


class PiePassFail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          linegraph_status: [],
          success: [],
          failures: [],
          skipped: [],
          inconclusive: []
        }
    }

    componentDidMount() {
        axios.get(`api/stats/linegraphstatus`)
           .then(res => {
             const linegraph_status = res.data;
             this.setState({ linegraph_status });
             this.setState({ failures: this.state.linegraph_status.map((item) =>  item.data[0].v) })
             this.setState({ inconclusive: this.state.linegraph_status.map((item) =>  item.data[1].v) })
             this.setState({ success: this.state.linegraph_status.map((item) =>  item.data[2].v) })
             this.setState({ skipped: this.state.linegraph_status.map((item) =>  item.data[3].v) })
           })
    }

	render () {

        return (

                    <VictoryPie

                        width={300}
                        height={250}
                        labelComponent={<VictoryTooltip/>}
                        padAngle={3}
                        innerRadius={100}
                        style={{
                            data: {
                                fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                            },
                            parent: { maxWidth: "2%" }
                        }}
                        colorScale={["#21ba45", "#db2828", "#FBBD08", "#767676" ]}
                        data={testResults}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 500 }
                        }}
                    />

        )
	}
}


export default PiePassFail
