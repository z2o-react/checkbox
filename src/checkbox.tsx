import * as React from 'react'
import classNames from 'classnames'

export interface ICheckboxEventTarget extends ICheckboxProps {
  type: 'checkbox'
  checked: boolean
}

export interface ICheckboxEvent {
  target: ICheckboxEventTarget
}

export interface ICheckboxProps {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  defaultChecked?: boolean
  checked?: boolean
  indeterminate?: boolean
  size?: 'small' | 'medium' | 'large'
  onChange?: (e: ICheckboxEvent) => void
}

export interface ICheckboxState {
  checked?: boolean
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  static defaultProps: ICheckboxProps = {
    prefixCls: 'z2o-checkbox',
    className: '',
    style: {},
    disabled: false,
    defaultChecked: false,
    indeterminate: false,
    size: 'medium',
  }

  constructor(props: ICheckboxProps) {
    super(props)

    const checked = 'checked' in props ? props.checked : props.defaultChecked

    this.state = {
      checked,
    }
  }

  static getDerivedStateFromProps(props: ICheckboxProps, state: ICheckboxState) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      }
    }
    return null
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const { prefixCls, className, style, disabled, children, indeterminate, size } = this.props
    const { checked } = this.state

    const classString = classNames(`${prefixCls}`, className, {
      [`${prefixCls}--checked`]: checked,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--indeterminate`]: indeterminate,
      [`${prefixCls}--${size}`]: size !== 'medium',
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
