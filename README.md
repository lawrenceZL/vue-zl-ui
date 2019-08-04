﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿# vue-zl-ui

> 基于Vue的ui组件

## Build Setup

``` bash
# 安装依赖
npm install

# 项目运行：localhost:8080
npm run dev

# 编译项目
npm run build

```

&nbsp;

## Modal组件
参数/事件 | 说明 | 类型 | 默认值
--- | --- | --- | ---
isShow | 是否显示弹框| Boolean |false |
free | 是否自定义弹框格式| Boolean | false |
titleShow |是否显示title| Boolean | true |
footerShow| 是否显示footer| Boolean | true |
cancelText| 左边按钮的文字| String | ‘取消’ |
confirmText| 右边按钮显示的文字| String | ‘确认’ |
title| 标题内容| String | ‘这是一个标题’ |
modalBlur| 点击旁边遮罩层触发| Function | 无 |
close| 点击关闭图标触发| Function | 无 |
onOk| 点击确认按钮触发| Function | 无 |
onCancel| 点击取消按钮触发| Function | 无 |

&nbsp;

## LeftRightSelect组件
参数/事件 | 说明 | 类型 | 默认值
--- | --- | --- | ---
list | 所有选择的数据| Array |无 |
index | 初始显示数据的index| Number | 0 |
loop |是否支持循环选择| Boolean | false |
selectClick| 点击左右选择触发，返回包括方向，当前选择对象等信息| Function | 无 |


&nbsp;
## SearchBar组件
参数/事件 | 说明 | 类型 | 默认值
--- | --- | --- | ---
placeholder | input框内的文字说明，可选填| String |无 |
defaultValue | 输入框默认值| String | 无 |
textInput | 输入框内容改变时触发，支持原生输入框的change事件，同时返回输入框value| Function | 无 |
inputBlur | 输入框失去焦点时触发，支持原生输入框的blur事件，同时返回输入框value| Function | 无 |
inputFocus | 输入框获取焦点时时触发，支持原生输入框的focus事件，同时返回输入框value| Function | 无 |
onSearch | 点击搜索图标时触发时触发，同时返回输入框value| Function | 无 |

&nbsp;

## TabBar组件
参数/事件 | 说明 | 类型 | 默认值
--- | --- | --- | ---
select | 选择默认选中的tab，可选0，1，2| String |'0' |
tabnum | 选择tab的数量，目前支持2和3| String | '2' |
text1 | 第一个tab的文字| String | 'tab1' |
text2 | 第二个tab的文字| String | 'tab2' |
text3 | 第三个tab的文字，只有在tabnum为3时才生效| String | 'tab3' |
tabClick |点击tab触发事件，返回一个包含index和item的对象| Function | 无 |

``` bash
ui组件待逐步完善
@CopyRight lawenceZL
```














