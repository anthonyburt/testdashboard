import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

class Test extends React.Component {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div>
          Date: <Moment format="YYYY/MM/DD kk:mm" date={this.props.test.createdAt} />
        </div>
        <div className='pt3'>
          Product: {this.props.test.products.name}&nbsp;
        </div>
        <div className='pt3'>
          Build Number: {this.props.test.buildNumber}&nbsp;
        </div>
        <div className='pt3'>
          Testname: {this.props.test.testname}&nbsp;
        </div>
        <div className='pt3'>
          OS: {this.props.test.os}&nbsp;
        </div>
        <div className='pt3'>
          Browser: {this.props.test.browser}&nbsp;
        </div>
        <div className='pt3'>
          Status: {this.props.test.testStatus}&nbsp;
        </div>
      </div>
    )
  }

}

export default Test