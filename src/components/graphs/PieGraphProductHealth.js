import React from 'react'
import { VictoryPie } from 'victory'

import img_ios from '../images/ios-logo.png'
import img_edge from '../images/ms_edge.png'
import img_chrome from '../images/chrome.png'
import img_firefox from '../images/firefox.png'

class PieGraphProductHealth extends React.Component {

    renderBrowser(param) {
        switch(param) {
            case 'ios':
                return img_ios
            case "edge":
                return img_edge
            case "chrome":
                return img_chrome
            case "firefox":
                return img_firefox
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
                <VictoryPie
                    style={{
                        data: {
                            fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                        },
                        labels: { fill: "white", fontSize: 15 }
                    }}
                    colorScale={["green", "red"]}
                    labelRadius={70}
                    data={[
                        { x: randomPassNumber + "%", y: randomPassNumber },
                        { x: remainderFail + "%", y: remainderFail }
                    ]}
                    animate={{
                        duration: 1000,
                        onLoad: { duration: 500 }
                    }}
                />
        </div>
        )
	}
}


export default PieGraphProductHealth
