import React from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import axios from 'axios'
import { Grid, Card, List, Icon, Segment, Header } from 'semantic-ui-react'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class RecurringFailures extends React.Component {
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
                    Recurring Failures
                    <div className="recurringthreshhold">current threshold: 5% of runs</div>
                </Card.Header>
                </Card.Content>
                <Card.Content>
                   <List>
                      <List.Item>
                        <List.Icon name='settings' />
                        <List.Content>
                          <List.Header as='a'>Basic Product Info</List.Header>
                          <List.Description><b>20%</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>Email Postal Code</List.Header>
                          <List.Description><b>50%</b></List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='browser' />
                        <List.Content>
                          <List.Header as='a'>Single Sku Products Info</List.Header>
                          <List.Description><b>13%</b></List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                </Card.Content>
            </Card>
        )
	}

}

export default RecurringFailures








