import React from 'react'
import { Link } from 'react-router-dom'
import Test from '../components/Test'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Moment from 'react-moment'
import 'moment-timezone'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory'
import Gridz from '../components/Gridz'


class TestResults extends React.Component {
	render () {
	   if (this.props.data.loading) {
			return (<div className='w-100 flex justify-center'>Loading...</div>)
        }

        const data2012 = [
          {quarter: 1, earnings: 13000},
          {quarter: 2, earnings: 16500},
          {quarter: 3, earnings: 14250},
          {quarter: 4, earnings: 19000}
        ];

        const data2013 = [
          {quarter: 1, earnings: 15000},
          {quarter: 2, earnings: 12500},
          {quarter: 3, earnings: 19500},
          {quarter: 4, earnings: 13000}
        ];

        const data2014 = [
          {quarter: 1, earnings: 11500},
          {quarter: 2, earnings: 13250},
          {quarter: 3, earnings: 20000},
          {quarter: 4, earnings: 15500}
        ];

        const data2015 = [
          {quarter: 1, earnings: 18000},
          {quarter: 2, earnings: 13250},
          {quarter: 3, earnings: 15000},
          {quarter: 4, earnings: 12000}
        ];

		return (
		    <div className='w-100 flex justify-center'>
		        <Gridz></Gridz>
                <div className=''>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                    >
                        <VictoryAxis
                          // tickValues specifies both the number of ticks and where
                          // they are placed on the axis
                          tickValues={[1, 2, 3, 4]}
                          tickFormat={["Shop X", "Checkout", "OA", "Order Mgmt"]}
                        />
                        <VictoryAxis
                          dependentAxis
                          // tickFormat specifies how ticks should be displayed
                          tickFormat={(x) => (`${x / 1000}`)}
                        />
                        <VictoryStack>
                            <VictoryBar
                                data={data2012}
                                x="quarter"
                                y="earnings"
                            />
                            <VictoryBar
                                data={data2013}
                                x="quarter"
                                y="earnings"
                            />
                            <VictoryBar
                                data={data2014}
                                x="quarter"
                                y="earnings"
                            />
                            <VictoryBar
                                data={data2015}
                                x="quarter"
                                y="earnings"
                            />
                        </VictoryStack>
                    </VictoryChart>
                </div>
				<div className=''>
					<ReactTable
						data={this.props.data.allTestResultses}
						columns={columns}
						defaultSorted={[
                            {
                                id: "createdAt",
                                desc: true
                            }
                        ]}
                        defaultPageSize={10}
                            style={{
                            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        className="-striped -highlight"
					/>
				</div>

			</div>
        )
    }
}

const columns = [{
        Header: 'Date',
        accessor: 'createdAt',
        Cell: props => <Moment format="MMMM DD, YYYY @ hh:mm a" date={props.value} />,
        width: 300,
    }, {
        Header: 'Build #',
        accessor: 'buildNumber',
        width: 100
    }, {
  	    Header: 'Product',
  	    accessor: 'products.name',
  	    width: 100,
    }, {
  	    Header: 'OS',
  	    accessor: 'os',
  	    width: 100,
    }, {
        Header: 'Browser',
        accessor: 'browser',
        width: 100,
    }, {
        Header: 'Test',
        accessor: 'testname',
        width: 100,
    }, {
        Header: 'Status',
        accessor: 'testStatus',
        maxwidth: 100
  }]

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