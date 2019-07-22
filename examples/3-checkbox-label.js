import React from 'react'
import Checkbox from '../src'

import '../assets/checkbox.less'

class Test extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>sample</h3>
        <Checkbox>sample</Checkbox>
        <h3>默认选中</h3>
        <Checkbox defaultChecked>默认选中</Checkbox>
      </div>
    )
  }
}

export default Test
