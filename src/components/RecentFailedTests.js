import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import axios from 'axios'
import { Pagination, Grid, Card, List, Icon, Segment, Header } from 'semantic-ui-react'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class RecentFailedTests extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

	render () {

        return (
            <Card>
                <Card.Content>
                <Card.Header>
                    Today's Failed Tests
                </Card.Header>
                </Card.Content>
                <Card.Content>
                   <List>
                      <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>All Stores By Postal Code</List.Header>
                          <List.Description><b>Last Failed: 68 Days Ago</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>Single SKU Without Tax</List.Header>
                          <List.Description><b>
                            Last Failed: Yesterday
                          </b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>Single Sku Products Info</List.Header>
                          <List.Description><b>Last Failed: 4 hours ago</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='settings' />
                        <List.Content>
                          <List.Header as='a'>Multiple Sku Products Info</List.Header>
                          <List.Description><b>Last Failed: Never</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                          <List.Icon name='settings' />
                          <List.Content>
                            <List.Header as='a'>Email Postal code</List.Header>
                            <List.Description><b>Last Failed: Yesterday</b></List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>PDP page for furniture</List.Header>
                          <List.Description><b>Last Failed: Last week</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                          <List.Icon name='settings' />
                          <List.Content>
                            <List.Header as='a'>Single store check</List.Header>
                            <List.Description><b>Last Failed: Three weeks ago</b></List.Description>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>Search for Tvs</List.Header>
                          <List.Description><b>Last Failed: Two weeks ago</b></List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                    <center><Pagination defaultActivePage={1} firstItem={null} lastItem={null} pointing secondary totalPages={3} /></center>
                </Card.Content>
            </Card>
        )
	}

}

export default RecentFailedTests








