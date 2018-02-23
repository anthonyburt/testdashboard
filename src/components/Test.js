import React from 'react'

class Test extends React.Component {

  render () {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div>
          {this.props.test.id}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.product}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.product}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.os}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.browser}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.buildNumber}&nbsp;
        </div>
        <div className='pt3'>
          {this.props.test.testStatus}&nbsp;
        </div>
      </div>
    )
  }

}

export default Test