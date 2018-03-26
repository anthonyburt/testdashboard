import React, { Component } from 'react'
import {Button, Grid, Icon, Modal, Segment, Dropdown, Accordion, Loader, Dimmer, Label } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ReactJson from 'react-json-view'

import 'react-datepicker/dist/react-datepicker.css'
import Comments from './Comments'
import TestSummary from './TestSummary'
import TestSteps from './TestSteps'
import LastRunSummary from './LastRunSummary'
import LineGraphStatusCounts from './graphs/LineGraphStatusCounts'
import PiePassFail from './graphs/PiePassFail'

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
            endDate: moment().add(7, 'd'),
            modal_visible : false
        }

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeHarness = this.handleChangeHarness.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    show() {
        this.setState({ modal_visible: true })
    }

    hide() {
        this.setState({ modal_visible: false })
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

    componentWillReceiveProps(nextProps) {
    axios.get(`api/test`, {
                params: {
                    squad: nextProps.squad,
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

        if( this.state.test_data === undefined ) {
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
                  <TestSummary testRecord={this.state.test_data[i]} includeHistory='false' harness={this.state.harness}/>
                  <div>
                      <Modal  size='large' trigger={
                          <Button floated ='right' color='purple'>
                              <Icon name='code' />
                              Json
                          </Button>}>
                          <Modal.Header>JSON response for {this.state.test_data[i].description}</Modal.Header>
                              <Modal.Content>
                                <Grid>
                                    <Grid.Row >
                                        <Grid.Column width={16} >
                                            <ReactJson src={this.state.test_data[i].responseJson} theme="summerfruit:inverted" />
                                        </Grid.Column>
                                      </Grid.Row>
                                </Grid>
                              </Modal.Content>
                          </Modal>
                  </div>
                  <div>
                    <Modal  size='large' trigger={
                        <Button floated ='right' color='black'>
                            <Icon name='history' />
                            History
                        </Button>}>
                        <Modal.Header>{this.state.test_data[i].description}</Modal.Header>
                            <Modal.Content>
                              <Grid centered>
                                  <Grid.Row>
                                      <Grid.Column width={8} >
                                          <LineGraphStatusCounts />
                                      </Grid.Column>
                                  </Grid.Row>
                                  <Grid.Row>
                                    <TestSummary testRecord={this.state.test_data[i]} includeHistory='true' harness={this.state.harness} />
                                    </Grid.Row>
                              </Grid>
                            </Modal.Content>
                        </Modal>
                    </div>
                    <TestSteps testSteps={this.state.test_data[i].teststeps}/>
                </div>
            ),
            key: `content-${i}`,
          },
        }))

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

    getStatusColor(result) {
        var color = "pink";

        if (result === 'Passed') {
          color = "green";
        } else if (result === 'Failed') {
          color = "red";
        } else if (result === 'Skipped') {
          color = "yellow";
        } else if (result === 'Inconclusive') {
            color = 'grey'
        }
        return color;

    }
}

export default TestDetails







