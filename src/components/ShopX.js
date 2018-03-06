import React, { Component } from 'react'
import {  Grid, Icon, Table, Segment, Accordion } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import PieGraphBrowsers from './PieGraphBrowsers'

export default class ShopX extends Component {
  state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

  render() {
      const { activeIndex } = this.state;

      return (
        <div>
            <Helmet bodyAttributes={{style: 'background-color : #fcfcfc'}}/>
            <Grid centered >
                <Grid.Row >
                    <Grid.Column width={8} floated='left'>
                        <Segment.Group >
                            <Segment color='grey' inverted>Selenium</Segment>
                                <Segment>
                                    <Segment>
                                    <Grid>
                                        <Grid.Row >
                                            <Grid.Column width={6} >
                                                <PieGraphBrowsers />
                                            </Grid.Column>
                                            <Grid.Column width={10} >
                                                <Table selectable>
                                                    <Table.Header>
                                                        <Table.Row>
                                                            <Table.HeaderCell></Table.HeaderCell>
                                                            <Table.HeaderCell>Last Ran</Table.HeaderCell>
                                                            <Table.HeaderCell>Duration</Table.HeaderCell>
                                                            <Table.HeaderCell>Failture Rate</Table.HeaderCell>
                                                         </Table.Row>
                                                    </Table.Header>
                                                    <Table.Body>
                                                        <Table.Row>
                                                            <Table.Cell>
                                                                <Icon name='apple' />
                                                            </Table.Cell>
                                                            <Table.Cell>8 hours ago</Table.Cell>
                                                            <Table.Cell>00:54:22</Table.Cell>
                                                            <Table.Cell>0%</Table.Cell>
                                                        </Table.Row>

                                                        <Table.Row warning>
                                                            <Table.Cell>
                                                                <Icon name='firefox' />
                                                            </Table.Cell>
                                                            <Table.Cell >8 hours ago</Table.Cell>
                                                            <Table.Cell>00:54:22</Table.Cell>
                                                            <Table.Cell>
                                                                <Icon name='attention' />6%
                                                            </Table.Cell>
                                                        </Table.Row>

                                                        <Table.Row warning>
                                                            <Table.Cell>
                                                                <Icon name='chrome' />
                                                            </Table.Cell>
                                                            <Table.Cell>8 hours ago</Table.Cell>
                                                            <Table.Cell>00:54:22</Table.Cell>
                                                            <Table.Cell >
                                                                <Icon name='attention' />12%
                                                            </Table.Cell>
                                                            </Table.Row>

                                                        <Table.Row>
                                                            <Table.Cell>
                                                                <Icon name='internet explorer' />
                                                            </Table.Cell>
                                                            <Table.Cell>8 hours ago</Table.Cell>
                                                            <Table.Cell>00:54:22</Table.Cell>
                                                            <Table.Cell>0</Table.Cell>
                                                        </Table.Row>

                                                    </Table.Body>
                                                </Table>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                    </Segment>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    <Grid.Column width={8} floated='left'>
                    <Segment.Group >
                        <Segment color='grey' inverted>API</Segment>
                            <Segment>
                            <Segment>
                                <Grid>
                                    <Grid.Row >
                                        <Grid.Column width={6} >
                                            <PieGraphBrowsers />
                                        </Grid.Column>
                                        <Grid.Column width={10} >
                                            <Table selectable>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell></Table.HeaderCell>
                                                        <Table.HeaderCell>Last Ran</Table.HeaderCell>
                                                        <Table.HeaderCell>Duration</Table.HeaderCell>
                                                        <Table.HeaderCell>Failture Rate</Table.HeaderCell>
                                                     </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Products
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>0%</Table.Cell>
                                                    </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Pricing
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>0%</Table.Cell>
                                                    </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Stores
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell >0%</Table.Cell>
                                                        </Table.Row>

                                                    <Table.Row>
                                                        <Table.Cell>
                                                            Checkout
                                                        </Table.Cell>
                                                        <Table.Cell>8 hours ago</Table.Cell>
                                                        <Table.Cell>00:54:22</Table.Cell>
                                                        <Table.Cell>100%</Table.Cell>
                                                    </Table.Row>

                                                </Table.Body>
                                            </Table>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Segment>
                        </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Segment.Group >
                        <Segment>
                        <Grid.Column width={16} >
                            <Accordion fluid styled>
                               <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                 <Icon name='dropdown' />
                                 What is a dog?
                               </Accordion.Title>
                               <Accordion.Content active={activeIndex === 0}>
                                 <p>
                                   A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                                   {' '}welcome guest in many households across the world.
                                 </p>
                               </Accordion.Content>
                           </Accordion>
                        </Grid.Column>
                        </Segment>
                    </Segment.Group>
                </Grid.Row>

            </Grid>
            </div>
        )
    }
}
