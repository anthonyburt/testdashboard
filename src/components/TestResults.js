import React from 'react'
import { Link } from 'react-router-dom'
import Test from '../components/Test'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Moment from 'react-moment'
import 'moment-timezone'

class TestResults extends React.Component {
	render () {
	   if (this.props.data.loading) {
			return (<div className='w-100 flex justify-center'>Loading...</div>)
        }

        const data1  = [{
                         name: 'Tanner Linsley',
                         age: 26,
                         friend: {
                         name: 'Jason Maurer',
                         age: 23
                         }
                     }]

		return (
		    <div className='w-100 flex justify-center'>
			    <div className='w-20' >
			    {this.props.data.allTestResultses.map((test) =>
			        <Test key={test.id} test={test} refresh={() => this.props.data.refetch()} />
			    )}
				</div>
				<div div className='w-60'>
					<ReactTable
						data={this.props.data.allTestResultses}
						columns={columns}
						defaultSorted={[
                            {
                                id: "createdAt",
                                desc: true
                            }
                        ]}
                        defaultPageSize={5}
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