// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/css/reset.css'
import { Header,Aside,Button,Main,Footer,Container,Collapse,CollapseItem,Dropdown,DropdownMenu,DropdownItem,Submenu,Menu,MenuItem,MenuItemGroup,Table,
  TableColumn, } from 'element-ui';

Vue.use(Header).use(Aside).use(Button).use(Main).use(Footer).use(Container).use(Collapse).use(CollapseItem).use(Dropdown).use(DropdownMenu).use(DropdownItem).use(Menu).use(Submenu)
.use(MenuItem).use(MenuItemGroup).use(Table).use(TableColumn).use(VueI18n);
Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'zh-CN',  // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
  messages: {
   'zh-CN': require('../src/js/zh'),  // 中文语言包
   'en-US': require('../src/js/en')  // 英文语言包
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
