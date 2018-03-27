import React, { Component } from 'react'
import { Modal, Button, Segment, Grid, Table, Dimmer, Icon, Loader } from 'semantic-ui-react'
import axios from 'axios'
import moment from 'moment'
import momentDuration from 'moment-duration-format'
import ReactJson from 'react-json-view'
import deepDiff from 'deep-diff-object'

const lastPassed = JSON.parse('{"user_id" : "XXCDBWN","password" :"ABCDBWN" ,"date_of_join" : "15/10/2010" ,"education" :"B.C.A." , "profession" : "DEVELOPER","interest" : "MUSIC","community_name" :["MODERN MUSIC", "CLASSICAL MUSIC","WESTERN MUSIC"],"community_moder_id" : ["MR. BBB","MR. JJJ","MR MMM"],"community_members" : [500,200,1500],"friends_id" : ["MMM123","NNN123","OOO123"],"ban_friends_id" :["BAN123","BAN456","BAN789"]}')

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
                                                <Table celled>
                                                    <Table.Header>
                                                       <Table.Row>
                                                           <Table.HeaderCell>Last Passed Response</Table.HeaderCell>
                                                           <Table.HeaderCell>Diff</Table.HeaderCell>
                                                           <Table.HeaderCell>Current Test Response</Table.HeaderCell>
                                                       </Table.Row>
                                                   </Table.Header>
                                                   <Table.Body>
                                                       <Table.Row>
                                                           <Table.Cell verticalAlign='top'><ReactJson src={item.responseJson} theme="summerfruit:inverted" /></Table.Cell>
                                                           <Table.Cell verticalAlign='top'>{this.compareJson(lastPassed, item.responseJson)}</Table.Cell>
                                                           <Table.Cell verticalAlign='top'><ReactJson src={lastPassed} theme="summerfruit:inverted" /></Table.Cell>
                                                       </Table.Row>
                                                   </Table.Body>
                                               </Table>
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

    compareJson(lastPassed, jsonNew) {


        {console.log(lastPassed)}
        {console.log(jsonNew)}
        const result = deepDiff(lastPassed, jsonNew);
        {console.log(result)}

        return (
            <div>
                <ReactJson src={result} theme="chalk" />
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
                    <Table.Row key={index}>
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