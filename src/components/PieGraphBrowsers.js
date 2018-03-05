import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'

import img_ios from '../images/ios-logo.png'
import img_edge from '../images/ms_edge.png'
import img_chrome from '../images/chrome.png'
import img_firefox from '../images/firefox.png'

class PieGraphBrowsers extends React.Component {

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

        return (
            <div>
                <VictoryPie
                    labelComponent={<VictoryTooltip/>}
                    padAngle={3}
                    innerRadius={100}
                    style={{
                        data: {
                            fillOpacity: 0.9, stroke: "#000000", strokeWidth: 2
                        },
                    }}
                    colorScale={["#999999", "#E85D0C", "#0078D7", "#F2B50F"]}
                    data={[
                        { x: "20" + "%", y: "20", label: "apple"},
                        { x: "20" + "%", y: "20", label: "firefox"},
                        { x: "20" + "%", y: "20", label: "edge"},
                        { x: "40" + "%", y: "40", label: "chrome" },
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


export default PieGraphBrowsers
