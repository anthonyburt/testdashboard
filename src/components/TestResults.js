import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactGridLayout from 'react-grid-layout'

import BarGraphPassFail from '../components/BarGraphPassFail'
import PieGraphBrowsers from '../components/PieGraphBrowsers'
import TableResults from '../components/TableResults'


class TestResults extends React.Component {

    constructor() {
        super();
        this.state = {
            ios: 'ios',
            edge: 'edge',
            chrome: 'chrome',
            firefox: 'firefox'
        }
    }


	render () {
	   if (this.props.data.loading) {
			return (<div className='w-100 flex justify-center'>Loading...</div>)
        }

        const layout = [
            {i: 'a', x: 0, y: 0, w: 3, h: 5},
            {i: 'b', x: 3, y: 0, w: 3, h: 5},
            {i: 'c', x: 6, y: 0, w: 3, h: 5},
            {i: 'd', x: 9, y: 0, w: 3, h: 5},
            {i: 'e', x: 3, y: 5, w: 5, h: 10},
            {i: 'f', x: 0, y: 15, w: 10, h: 10},
        ];

		return (
		    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">
                    <PieGraphBrowsers browser={this.state.ios}/>
                </div>
                <div key="b">
                    <PieGraphBrowsers browser={this.state.ios}/>
                </div>
                <div key="c">
                    <PieGraphBrowsers browser={this.state.ios}/>
                </div>
                <div key="d">
                    <PieGraphBrowsers browser={this.state.ios}/>
                </div>
                <div key="e">
                    <BarGraphPassFail browser={this.state.ios}/>
                </div>
                <div key="f">
                    <TableResults allTestResultses={this.props.data.allTestResultses}/>
                </div>
          </ReactGridLayout>
        )
    }
}

const TestListQuery = gql`
	query allTestResultses {
		allTestResultses(orderBy: createdAt_DESC) {
			id
			createdAt
			products {name}
			os
			browser
			testname
			buildNumber
			testStatus
	}
}`


export default graphql(TestListQuery)(TestResults)