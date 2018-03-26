import React, { Component } from 'react'
import { Modal, Button, Segment, Grid, Table, Dimmer, Icon, Loader} from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'
import momentDuration from 'moment-duration-format'
import ReactJson from 'react-json-view'

class TestSummary extends Component {
    constructor(props) {
    super(props)

        this.state = {
            test_data: [],
        }
    }

    componentDidMount() {
        if(this.props.includeHistory === 'true') {
            axios.get(`api/test`, {
                params: {
                    squad: this.props.testRecord.squad,
                    harness: this.props.harness,
                    status: 'All',
                    testcase: this.props.testRecord.testcase

                }
            })
            .then(res => {
                const test_data = res.data
                this.setState({ test_data })
            })
        }
    }

    render() {

        if (this.props.includeHistory === 'false')  {
            return (
                <Table celled color={this.getStatusColor(this.props.testRecord.result)}>
                    {this.tableHeader()}
                    {this.tableBody(this.props.testRecord)}
                </Table>
            )
        }

        if (this.state.test_data === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        if (this.props.includeHistory === 'true')  {
                    return (

                        this.state.test_data.map((item, index, arr) => (
                            <Segment>
                            <Grid>
                                <Grid.Row columns={1}>
                                    <Grid.Column>
                                      <Table celled color={this.getStatusColor(item.result)}>
                                          {this.tableHeader()}
                                          {this.tableBody(item)}
                                      </Table>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column floated='right'>
                                      <Modal size='large' trigger={
                                          <Button floated ='right' color='purple'>
                                              <Icon name='code' />
                                              Json
                                          </Button>}>
                                          <Modal.Header>JSON response for {item.description}</Modal.Header>
                                              <Modal.Content>
                                                <Grid>
                                                    <Grid.Row >
                                                        <Grid.Column width={16} >
                                                            <ReactJson src={item.responseJson} theme="summerfruit:inverted" />
                                                        </Grid.Column>
                                                      </Grid.Row>
                                                </Grid>
                                              </Modal.Content>
                                          </Modal>
                                      </Grid.Column>
                                 </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Table striped basic='very' celled>
                                            <Table.Body>
                                                {this.testSteps(item.teststeps)}
                                            </Table.Body>
                                        </Table>
                                    </Grid.Column>
                                </Grid.Row>
                              </Grid>
                          </Segment>
                        ))
                    )
                }

        return (
            <div>
                missing history flag
            </div>
        )
    }

    tableHeader() {
        return (
           <Table.Header>
               <Table.Row>
                   <Table.HeaderCell width={2}>Harness</Table.HeaderCell>
                   <Table.HeaderCell width={2}> Date</Table.HeaderCell>
                   <Table.HeaderCell width={2}>Testcase</Table.HeaderCell>
                   <Table.HeaderCell>Result</Table.HeaderCell>
                   <Table.HeaderCell>Duration</Table.HeaderCell>
                   <Table.HeaderCell>Author</Table.HeaderCell>
               </Table.Row>
           </Table.Header>
       )
    }

    tableBody(record) {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{record.harness}</Table.Cell>
                    <Table.Cell>{record.dateofexecution}</Table.Cell>
                    <Table.Cell>{record.testcase}</Table.Cell>
                    <Table.Cell>{record.result}</Table.Cell>
                    <Table.Cell>{this.formatDuration(record.duration)}</Table.Cell>
                    <Table.Cell>{record.author}</Table.Cell>
                </Table.Row>
            </Table.Body>
        )
    }

    testSteps(steps) {
            return (
                steps.map((item, index, arr) => (
                    <Table.Row>
                        <Table.Cell textAlign='center'><Icon name='thumbs up' color='green'/></Table.Cell>
                        <Table.Cell>{item}</Table.Cell>
                    </Table.Row>
            )
        ))
    }

    getStatusColor(result) {
        var color = "pink"
        if (result === 'Passed') {
          color = "green"
        } else if (result === 'Failed') {
          color = "red"
        } else if (result === 'Skipped') {
          color = "yellow"
        } else if (result === 'Inconclusive') {
            color = 'grey'
        }
        return color
    }

    formatDuration(inTime) {
        const converted = moment.duration(inTime,"seconds").format("hh:mm:ss", {trim:false})

        return (
            converted
        )
    }

}

export default TestSummary