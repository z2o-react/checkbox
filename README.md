# checkbox

React checkbox component

[![](https://img.shields.io/npm/v/@z2o/checkbox.svg)](https://www.npmjs.com/package/@z2o/checkbox)
[![](https://img.shields.io/npm/dm/@z2o/checkbox.svg)](https://www.npmjs.com/package/@z2o/checkbox)
[![](https://img.shields.io/github/license/z2o-react/checkbox.svg)](https://github.com/z2o-react/checkbox/blob/master/LICENSE)

## Install

```bash
$ npm install @z2o/checkbox
```

## Usage

```javascript
import Checkbox from '@z2o/checkbox'

const c = <Checkbox>default</Checkbox>
React.render(c, container)
```

## Example

online example: [https://z2o-react.github.io/checkbox/](https://z2o-react.github.io/checkbox/)

## API

| name           | type       | default        | description                             |
| -------------- | ---------- | -------------- | --------------------------------------- |
| prefixCls      | string     | `z2o-checkbox` | 自定义类名前缀                          |
| className      | string     | -              | 自定义额外类名                          |
| style          | Object     | -              | 添加额外样式                            |
| checked        | Boolean    | `false`        | 指定当前是否选中                        |
| defaultChecked | Boolean    | `false`        | 初始是否选中                            |
| disabled       | Boolean    | `false`        | 组件禁用状态                            |
| indeterminate  | Boolean    | `false`        | 设置 indeterminate 状态，只负责样式控制 |
| onChange       | (event) => | -              | 变化时回调函数                          |

## License

@z2o/checkbox is released under the MIT license.
