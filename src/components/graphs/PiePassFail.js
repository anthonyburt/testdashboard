import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import axios from 'axios'
import { Dimmer, Loader } from 'semantic-ui-react'

    const testResults = [
        { x: "Success", y: 25 },
        { x: "Failures", y: 25  },
        { x: "Skipped", y: 25 },
        { x: "Inconclusive", y: 25 }
    ]


class PiePassFail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          pie_results: [],
          pie_colors: [],
          fetching_data: true
        }
    }

    componentDidMount() {
        axios.get(`api/stats/pie`, {
            params: {
                tribe: this.props.tribe,
                harness: this.props.harness,
                category: this.props.category
            }
        })
       .then(res => {
            const testResults = []
            const colorResults = []
            const pie_results = res.data;
            pie_results.map((item, index, arr) => {
                if(item._id.result === 'Failed') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#db2828')
                } else if(item._id.result === 'Inconclusive') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#767676')
                } else if(item._id.result === 'Passed') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#21ba45')
                } else if (item._id.result=== 'Skipped') {
                    testResults.push({x:item._id.result, y:item.test_count})
                    colorResults.push('#FBBD08')
                }
            })
            console.log(testResults)
            this.setState({
                pie_results: testResults,
                pie_colors: colorResults,
                fetching_data: false
            })
        })
    }

	render () {

        if( this.state.fetching_data === true ) {
           return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

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
                colorScale={this.state.pie_colors}
                data={this.state.pie_results}
                animate={{
                    duration: 1000,
                    onLoad: { duration: 500 }
                }}
            />
        )
	}

	createColorScale(result) {
        return ["#21ba45", "#db2828", "#FBBD08", "#767676" ]
    }

}




export default PiePassFail
