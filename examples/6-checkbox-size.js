import React from 'react'
import Checkbox from '../src'

import '../assets/checkbox.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>small</h3>
        <Checkbox size='small'>small</Checkbox>
        <h3>medium</h3>
        <Checkbox>medium</Checkbox>
        <h3>large</h3>
        <Checkbox size='large'>large</Checkbox>
      </div>
    )
  }
}

export default Test
