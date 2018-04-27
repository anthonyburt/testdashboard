import React from 'react'
import TreeMap from "react-d3-treemap";

class TreemapWidget2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

	render () {

        return (
             <TreeMap
                  height={500}
                  width={800}
                  data={data}
                  valueUnit={"Tests"}
              />
        )
	}

}

export default TreemapWidget2

// Format
// name: name of the file or folder
// type: folder or file
// value: number of bytes of the doc (calculated at folder level by d3)
// children: sub files or sub folders
const data =
    {
        "name": "Test Coverage",
        "children": [
        {
            "name": "api",
            "children": [
                {
                    "name": "portal",
                    "children": [
                        { "name": "Test Suite 1", "value": 15, "link": "https://blog.josequinto.com" },
                        { "name": "Test Suite 2", "value": 38 },
                        { "name": "Test Suite 3", "value": 67 },
                        { "name": "Test Suite 4", "value": 25 }
                    ]
                },
                {
                    "name": "email",
                    "children": [
                        { "name": "Test Suite 1", "value": 15 },
                        { "name": "Test Suite 2", "value": 34 },
                        { "name": "Test Suite 3", "value": 7 },
                    ]
                },
                {
                    "name": "product",
                    "children": [
                        { "name": "Test Suite 1", "value": 35 }
                    ]
                }
            ]
        },
        {
        "name": "selenium",
            "children": [
                { "name": "Checkout", "value": 17 },
                { "name": "Product Page", "value": 48 },
                {
                    "name": "Products",
                    "children": [
                        { "name": "Furniture", "value": 19 },
                        { "name": "TV", "value": 2 },
                        { "name": "Appliances", "value": 13 }
                    ]
                },
                { "name": "Contact Us", "value": 10 },
                { "name": "Aarons Club", "value": 51 },
                { "name": "How It Works", "value": 44 },
                { "name": "Find a Store", "value": 53 },
                { "name": "Pay Online", "value": 32 },
                { "name": "Terms of Service", "value": 2 },
                { "name": "Privacy Policy", "value": 16 }
            ]
        }
    ]
};