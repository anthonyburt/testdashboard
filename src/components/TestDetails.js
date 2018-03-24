import React, { Component } from 'react'
import { Button, Icon, Grid,  Segment, Dropdown, Table, Accordion, Loader, Dimmer, Label } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css'
import Comments from './Comments'

    const optionsTestHarness = [
        { key: 1, text: 'UI', value: 'Selenium' },
        { key: 2, text: 'API', value: 'API' }
    ]

    const optionsTestStatus = [
        { key: 1, text: 'All', value: 'All' },
        { key: 2, text: 'Passed', value: 'Passed' },
        { key: 3, text: 'Failed', value: 'Failed' },
        { key: 4, text: 'Skipped', value: 'Skipped' },
        { key: 5, text: 'Inconclusive', value: 'Inconclusive' }
    ]

class TestDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
          test_data: [],
          harness: 'API',
          test_status: 'All',
          startDate: moment().subtract(30, 'd'),
          endDate: moment().add(7, 'd')
        }

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeHarness = this.handleChangeHarness.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        })
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    handleChangeHarness = (e, { value }) => this.setState({ harness: value })

    handleChangeStatus = (e, { value }) => this.setState({ test_status: value })

    handleSearch = () => this.updateTestResults()

    componentDidMount() {
        axios.get(`api/test`, {
            params: {
                squad: this.props.squad,
                harness: this.state.harness,
                status: this.state.test_status,
                startdate: moment(this.state.startDate).format('MM-DD-YYYY'),
                enddate: moment(this.state.endDate).format('MM-DD-YYYY')
            }
        })
          .then(res => {
            const test_data = res.data
            this.setState({ test_data })
        })
    }

    render() {

        if( this.state.test_data === undefined) {
            return (
                <Dimmer inverted active>
                    <Loader size='tiny'>Loading</Loader>
                </Dimmer>
            )
        }

        const rootPanels = _.times(this.state.test_data.length, i => ({
          title: {
            content: <Label color={this.getStatusColor(this.state.test_data[i].result)}>
                        {this.state.test_data[i].dateofexecution}
                        <div>{this.state.test_data[i].description}</div>
                      </Label>,
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
                   <Table fixed size='small' celled basic='very' striped compact='very'>
                     <Table.Body>
                        {this.generateStepRows(this.state.test_data[i].teststeps)}
                    </Table.Body>
                    </Table>
                </div>
            ),
            key: `content-${i}`,
          },
        }))

        {console.log(this.state.test_data)}

        return (
            <Grid.Column width={16} >
                <Segment.Group >
                    <Segment color='blue' inverted>Test Details</Segment>
                        <Segment>
                            <Segment>
                            <Grid columns={2} verticalAlign='top'>
                                <Grid.Column width={3}>
                                    <div>Harness</div>
                                        <Dropdown
                                            key='dropDownTestHarness'
                                            onChange={this.handleChangeHarness}
                                            options={optionsTestHarness}
                                            placeholder='Choose an option'
                                            selection
                                            value={this.state.harness}
                                        />
                                        <div>Status</div>
                                        <Dropdown
                                            key='dropDownTestStatus'
                                            onChange={this.handleChangeStatus}
                                            options={optionsTestStatus}
                                            placeholder='Choose an option'
                                            selection
                                            value={this.state.test_status}
                                        />
                                        <div>
                                        Start Date
                                        <DatePicker
                                            selected={this.state.startDate}
                                            selectsStart
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            onChange={this.handleChangeStart}
                                            placeholderText="Start Date"
                                        />
                                        End Date
                                        <DatePicker
                                            selected={this.state.endDate}
                                            selectsEnd
                                            startDate={this.state.startDate}
                                            endDate={this.state.endDate}
                                            onChange={this.handleChangeEnd}
                                            placeholderText="End Date"
                                        />
                                        </div>
                                        <div className='test-details-search'>
                                            <Button
                                                color='black' icon labelPosition='left'
                                                onClick={this.handleSearch}
                                            >
                                                <Icon size='large' name='find' />
                                                Search
                                            </Button>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                     <Accordion fluid styled exclusive={false} panels={rootPanels}/>
                              </Grid.Column>
                            </Grid>
                        </Segment>
                    </Segment>
                </Segment.Group>
            </Grid.Column>
        )
    }

     updateTestResults() {

            axios.get(`api/test`, {
                        params: {
                            squad: this.state.squad,
                            harness: this.state.harness,
                            status: this.state.test_status,
                            startdate: moment(this.state.startDate).format('MM-DD-YYYY'),
                            enddate: moment(this.state.endDate).format('MM-DD-YYYY')
                        }
                    })
                      .then(res => {
                        const test_data = res.data
                        this.setState({ test_data })
                    })


    }

    getStatusColor(result) {

        var color = "pink";

        if (result === 'Passed') {
          color = "green";
        } else if (result == 'Failed') {
          color = "red";
        } else if (result === 'Skipped') {
          color = "yellow";
        } else if (result === 'Inconclusive') {
            color = 'grey'
        }
        return color;

    }

    generateStepRows(steps) {
        return (

                steps.map((item, index, arr) => (
                    <Table.Row key={index}>
                        <Table.Cell>{item}</Table.Cell>
                    </Table.Row>
                ))

        )
    }

    generateStepRowsWithFailure(steps) {
        const { value } = this.state.value

        return (
            <div>
            {
                steps.map((item, index, arr) => {
                    if (arr.length - 1 === index) {
                        {console.log("in here")}
                        <Table.Row>
                            <Table.Cell>{item}</Table.Cell>
                        </Table.Row>
                    } else {
                           {console.log("not in here")}
                        <Table.Row>
                            <Table.Cell color='red'>{item}</Table.Cell>
                        </Table.Row>
                    }
                })
            }
            </div>
        )
    }

}

export default TestDetails






