import React from 'react'
import Checkbox from '../src'

import '../assets/checkbox.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>indeterminate</h3>
        <Checkbox indeterminate />
      </div>
    )
  }
}

export default Test
