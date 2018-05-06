# Element style

`Element UI`的自定义样式

对于ElementUI原有组件中需要修改的样式，在`theme/kaola.css`中覆盖原有样式即可

当前对应依赖版本：`vue@2.5.2`、`element-ui@2.0.8`

需要安装sass-loader依赖

因为饿了么组件升级，select的计算属性不兼容，所以select需要修改组件，使用时直接全局注册即可

import ElSelect from 'element-kaola/Select/index';
//全局注册组件
Vue.component('el-select', ElSelect);