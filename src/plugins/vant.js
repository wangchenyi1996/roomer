/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-13 12:05:47
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-15 13:58:27
 */
import Vue from 'vue'

//vant组件库
import {
    Button,
    Swipe,
    SwipeItem,
    Lazyload,
    Dialog,
    Toast,
    Tab,
    Tabs,
    Switch,
    Uploader,
    DropdownMenu,
    DropdownItem,
    Checkbox,
    CheckboxGroup,
    TreeSelect,
    Divider,
    ActionSheet,
    Picker,
    Popup,
    Loading,
    Stepper
} from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload, { preLoad: 1, }).use(Dialog).use(Toast)
    .use(Tab).use(Tabs).use(Switch).use(Uploader).use(DropdownMenu).use(DropdownItem).use(TreeSelect).use(Divider)
    .use(Checkbox).use(CheckboxGroup).use(ActionSheet).use(Picker).use(Popup).use(Loading).use(Stepper)