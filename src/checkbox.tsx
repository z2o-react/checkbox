import * as React from 'react'
import classNames from 'classnames'

export interface ICheckboxEventTarget extends ICheckboxProps {
  type: 'checkbox'
  checked: boolean
}

export interface ICheckboxEvent {
  target: ICheckboxEventTarget
  preventDefault(): void
  stopPropagation(): void
}

export interface ICheckboxProps {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  disabled: boolean
  checked: boolean
  indeterminate: boolean
  onChange?: (e: ICheckboxEvent) => void
}

export interface ICheckboxState {
  checked: boolean
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  static defaultProps = {
    prefixCls: 'z2o-checkbox',
    className: '',
    style: {},
    disabled: false,
    defaultChecked: false,
    indeterminate: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: 'checked' in props ? props.checked : props.defaultChecked,
    }
  }

  static getDerivedStateFromProps(props, state) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      }
    }
    return null
  }

  handleChange = e => {
    const { disabled, onChange } = this.props
    if (disabled) {
      return
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      })
    }
    onChange &&
      onChange({
        ...e,
        target: {
          ...this.props,
          type: 'checkbox',
          checked: e.target.checked,
        },
      })
  }

  render() {
    const { prefixCls, className, style, disabled, children, indeterminate } = this.props
    const { checked } = this.state

    const classString = classNames(`${prefixCls}`, className, {
      [`${prefixCls}--checked`]: checked,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--indeterminate`]: indeterminate,
    })

    return (
      <label className={classString} style={style}>
        <span className={`${prefixCls}__input`}>
          <input
            type='checkbox'
            disabled={disabled}
            className={`${prefixCls}__original`}
            checked={checked}
            onChange={this.handleChange}
          />
          <span className={`${prefixCls}__inner`}></span>
        </span>
        {children && <span className={`${prefixCls}__text`}>{children}</span>}
      </label>
    )
  }
}
