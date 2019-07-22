import React from 'react'
import Checkbox from '../src'

import '../assets/checkbox.less'

class Test extends React.Component {
  state = {
    checked: true,
    disabled: false,
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked })
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled })
  }

  handleChange = e => {
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h3>受控的 Checkbox</h3>
        <Checkbox
          onChange={this.handleChange}
          checked={this.state.checked}
          disabled={this.state.disabled}
        >
          sample
        </Checkbox>
        <div style={{ marginTop: '20px' }}>
          <button style={{ marginRight: '10px' }} onClick={this.toggleChecked}>
            {!this.state.checked ? 'Check' : 'Uncheck'}
          </button>
          <button onClick={this.toggleDisable}>
            {!this.state.disabled ? 'disabled' : 'Enable'}
          </button>
        </div>
      </div>
    )
  }
}

export default Test
