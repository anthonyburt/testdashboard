import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactGridLayout from 'react-grid-layout'

import GraphPassFail from '../components/GraphPassFail'
import TableResults from '../components/TableResults'


class TestResults extends React.Component {
	render () {
	   if (this.props.data.loading) {
			return (<div className='w-100 flex justify-center'>Loading...</div>)
        }

        const layout = [
          {i: 'a', x: 0, y: 0, w: 3, h: 10},
          {i: 'b', x: 1, y: 0, w: 10, h: 5},
          {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];

		return (
		    <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
		        <div key="a">
                    <GraphPassFail/>
                </div>
				<div key="b">
				    {/*<TableResults/>*/}
				</div>
			<div key="c">grid 3</div>
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