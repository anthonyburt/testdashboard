import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'

class PieGraphBrowsers extends React.Component {

    renderBrowser(param) {
        switch(param) {
            case 'ios':
                return '../images/ios-logo.png'
            case "edge":
                return '../images/ms_edge.png'
            case "chrome":
                return '../images/chrome.png'
            case "firefox":
                return '../images/firefox.png'
            default:
                return '404'
        }
    }

	render () {

	    var imageFile= this.renderBrowser(this.props.browser)
	    var randomPassNumber = Math.floor(Math.random() * 100) + 1
	    var remainderFail =  100-randomPassNumber

        return (
        <div>
            <div className="flex justify-center">
                <img alt="browser" src={require(imageFile)} style={{maxWidth: 100, maxHeight: 50}} />
            </div>
            <VictoryPie
                style={{
                    data: {
                        fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                    },
                    labels: { fill: "white", fontSize: 15 }
                }}
                colorScale={["green", "red"]}
                startAngle={-90}
                endAngle={90}
                labelRadius={70}
                data={[
                    { x: randomPassNumber + "%", y: randomPassNumber },
                    { x: remainderFail + "%", y: remainderFail }
                ]}
            />
        </div>
        )
	}
}


export default PieGraphBrowsers
