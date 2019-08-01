﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿# vue-zl-ui

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













