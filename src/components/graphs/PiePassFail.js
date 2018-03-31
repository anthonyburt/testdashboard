import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
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
          success: [],
          failures: [],
          skipped: [],
          inconclusive: []
        }
    }

    componentDidMount() {

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
                            parent: { maxWidth: "50%" }
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
