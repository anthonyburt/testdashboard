import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Moment from 'react-moment'
import 'moment-timezone'

class TableResults extends React.Component {

    render () {
        return (
            <ReactTable
                data={this.props.allTestResultses}
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

export default TableResults
