// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/css/reset.css'
import { Header,Aside,Button,Main,Footer,Container,Collapse,CollapseItem,Dropdown,DropdownMenu,DropdownItem,Submenu,Menu,MenuItem,MenuItemGroup,Table,
  TableColumn, } from 'element-ui';

Vue.use(Header).use(Aside).use(Button).use(Main).use(Footer).use(Container).use(Collapse).use(CollapseItem).use(Dropdown).use(DropdownMenu).use(DropdownItem).use(Menu).use(Submenu)
.use(MenuItem).use(MenuItemGroup).use(Table).use(TableColumn);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
