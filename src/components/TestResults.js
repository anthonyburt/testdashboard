import React from 'react'
import { Link } from 'react-router-dom'
import Test from '../components/Test'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class TestResults extends React.Component {
    render () {
         if (this.props.data.loading) {
            return (<div>Loading</div>)
          }
          return (
            <div className='w-100 flex justify-center'>
                <div className='w-50' >
                {this.props.data.allTestResultses.map((test) =>
                      <Test key={test.id} test={test} refresh={() => this.props.data.refetch()} />
                )}
                </div>
            </div>
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