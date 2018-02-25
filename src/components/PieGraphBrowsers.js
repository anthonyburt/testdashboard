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
                <img alt="browser" src={require('../images/ios-logo.png')} width="100" height="50" />
            </div>
            <VictoryPie
                colorScale={["green", "red"]}
                startAngle={-90}
                endAngle={90}
                data={[
                    { x: " ", y: randomPassNumber },
                    { x: " ", y: remainderFail }
                ]}
            />
        </div>
        )
	}
}


export default PieGraphBrowsers
