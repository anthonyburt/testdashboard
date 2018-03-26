import React, { Component } from 'react'
import {Button, Grid, Icon, Segment, Dropdown, Loader, Dimmer } from 'semantic-ui-react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import TestResultsAccordion from './TestResultsAccordion'
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
                                     <TestResultsAccordion test_data={this.state.test_data} harness={this.state.harness} squad={this.props.squad} showHistoryButton='true'/>
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

}

export default TestDetails







