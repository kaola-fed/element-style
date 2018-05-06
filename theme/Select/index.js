import Select from './src/select.vue';

/* istanbul ignore next */
Select.install = function(Vue) {
    Vue.component(Select.name, Select);
};

export default Select;
