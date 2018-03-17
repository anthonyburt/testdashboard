import React from 'react'
import {  Statistic, Icon } from 'semantic-ui-react'
import moment from 'moment'
import momentDuration from 'moment-duration-format'

class Home extends React.Component {


    formatDuration(inTime) {
       const converted = moment.duration(inTime,"seconds").format("hh:mm:ss", {trim:false})

       return (
           <div key="time">{converted}</div>
       )
   }

    render () {

        return (
            <Statistic.Group widths='four'>
                <Statistic color='violet'>
                    <Statistic.Value>{this.props.overall_stats.map((item,i) => item.total_tests)}</Statistic.Value>
                    <Statistic.Label>Tests Processed</Statistic.Label>
                </Statistic>
                <Statistic color='orange'>
                    <Statistic.Value>{this.props.overall_stats.map((item,i) => this.formatDuration(item.total_duration))}</Statistic.Value>
                    <Statistic.Label>Time Spent</Statistic.Label>
                </Statistic>
                <Statistic color='green'>
                    <Statistic.Value>
                        <Icon name='thumbs up' />
                        {this.props.overall_stats.map((item,i) => item.total_passes)}
                    </Statistic.Value>
                    <Statistic.Label color='teal'>Success</Statistic.Label>
                </Statistic>
                <Statistic color='red'>
                    <Statistic.Value>
                        <Icon name='thumbs down' />
                        {this.props.overall_stats.map((item,i) => item.total_fails)}
                    </Statistic.Value>
                    <Statistic.Label>Failures</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        )
    }
}


export default Home