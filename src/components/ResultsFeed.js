import React, { Component } from 'react'
import { Table, Message, Accordion, Loader, Dimmer, Label, Icon } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

import TestResultsTable from './TestResultsTable'
import Comments from './Comments'

class ResultsFeed extends Component {
    constructor(props) {
        super(props)

        this.state = {
          test_data: [],
        }
    }

    componentDidMount() {
        axios.get(`api/test/`)
          .then(res => {
            const test_data = res.data
            this.setState({ test_data })
        })
    }

     getStatusColor(result) {
           const color = result === "Passed" ? "green" : "red"

           return color;
       }


    render() {

        if( this.state.test_data === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        const panels = _.times(this.state.test_data.length, i => ({
          title: {
            content: <Label color={this.getStatusColor(this.state.test_data[i].result)}
                content={this.state.test_data[i].description} />,
            key: `title-${i}`,
          },
          content: {
            content: (
                <div>
                  <Table celled color={this.getStatusColor(this.state.test_data[i].result)}>
                      <Table.Header>
                          <Table.Row>
                              <Table.HeaderCell>Harness</Table.HeaderCell>
                              <Table.HeaderCell>Date</Table.HeaderCell>
                              <Table.HeaderCell>Testcase</Table.HeaderCell>
                              <Table.HeaderCell>Result</Table.HeaderCell>
                              <Table.HeaderCell>Message</Table.HeaderCell>
                              <Table.HeaderCell>Duration</Table.HeaderCell>
                              <Table.HeaderCell>Author</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>
                      <Table.Body>
                          <Table.Row>
                              <Table.Cell>{this.state.test_data[i].harness}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].dateofexecution}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].testcase}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].result}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].message}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].duration}</Table.Cell>
                              <Table.Cell>{this.state.test_data[i].author}</Table.Cell>
                          </Table.Row>
                      </Table.Body>
                  </Table>
                  <Comments />
                </div>
            ),
            key: `content-${i}`,
          },
        }))

        {console.log(this.state.test_data)}

        return (
             <Accordion fluid styled exclusive={false} panels={panels}/>
        )
    }

}

export default ResultsFeed



