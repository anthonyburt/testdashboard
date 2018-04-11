import React, { Component } from 'react'
import {Button, Grid, Icon, Segment, Dropdown, Accordion, Loader, Dimmer, Label } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import Comments from './Comments'
import TestSummary from './TestSummary'
import TestSteps from './TestSteps'
import ModalJson from './ModalJson'
import ModalHistory from './ModalHistory'


    const optionsCategoryUI = [
        { key: 1, text: 'All', value: 'All'},
        { key: 2, text: 'Shop X', value: 'Shop X' },
        { key: 3, text: 'Checkout', value: 'Checkout' },
        { key: 4, text: 'Order Assist', value: 'Order Assist' },
        { key: 5, text: 'Order Management', value: 'Order Management' },
    ]

    const optionsCategoryAPI = [
        { key: 1, text: 'All', value: 'All'},
        { key: 2, text: 'Address', value: 'Address' },
        { key: 3, text: 'Direct', value: 'Direct' },
        { key: 4, text: 'Email', value: 'Email' },
        { key: 5, text: 'Pricing', value: 'Pricing' },
        { key: 6, text: 'Product', value: 'Product' },
        { key: 7, text: 'Store', value: 'Store' },
        { key: 8, text: 'Salesforce', value: 'Salesforce' },
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
            category: 'All',
            test_status: 'All',
            startDate: moment().subtract(30, 'd'),
            endDate: moment().add(7, 'd'),
            fetching_data: true,
        }

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeHarness = this.handleChangeService.bind(this);
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

    handleChangeService = (e, { value }) => this.setState({ category: value })

    handleChangeStatus = (e, { value }) => this.setState({ test_status: value })

    handleSearch = () => this.updateTestResults()



    render() {



        const rootPanels = _.times(this.state.test_data.length, index => ({
          title: {
            content: <Label color={this.getStatusColor(this.state.test_data[index].result)}>
                        {this.state.test_data[index].dateofexecution}
                        <div>{this.state.test_data[index].description}</div>
                      </Label>,
            key: `title-${index}`,
          },
          content: {
            content: (
                <div>
                    <TestSummary testRecord={this.state.test_data[index]} includeHistory='false' tribe={this.props.tribe} harness={this.props.harness}/>
                    <div>
                        <ModalJson testRecord={this.state.test_data[index]}/>
                    </div>
                    <div>
                        <ModalHistory tribe={this.props.tribe} harness={this.props.harness} testRecord={this.state.test_data[index]} />
                    </div>
                        <TestSteps testSteps={this.state.test_data[index].teststeps}/>
                </div>
            ),
            key: `content-${index}`,
          },
        }))

        return (

            <Grid.Column key={this.state.harness} width={16} >
                <Segment.Group >
                    <Segment color='blue' inverted>Test Details</Segment>
                        <Segment>
                            <Segment>
                            <Grid columns={2} verticalAlign='top'>
                                <Grid.Column width={3}>
                                    <div>Category</div>
                                        <Dropdown
                                            key='dropDownService'
                                            onChange={this.handleChangeService}
                                            options={this.getCategoriesForHarness(this.props.harness)}
                                            placeholder='Choose a service'
                                            selection
                                            value={this.state.category}
                                        />
                                    <div>Status</div>
                                        <Dropdown
                                            key='dropDownTestStatus'
                                            onChange={this.handleChangeStatus}
                                            options={optionsTestStatus}
                                            placeholder='Choose a status'
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
                                            <Icon size='large' name='search' />
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
                tribe: this.props.tribe,
                category: this.state.category,
                harness: this.props.harness,
                status: this.state.test_status,
                startdate: moment(this.state.startDate).format('MM-DD-YYYY'),
                enddate: moment(this.state.endDate).format('MM-DD-YYYY')
            }
        })
          .then(res => {
            const test_data = res.data
            this.setState({
                test_data,
                fetching_data: false
            })
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

    getCategoriesForHarness(harness) {
        if(harness==='API') {
            return optionsCategoryAPI
        } else if (harness==='Selenium') {
            return optionsCategoryUI
        }
    }
}

export default TestDetails







