import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    "primary": "#607d8b",
    "secondary": "#e91e63",
    "accent": "#82B1FF",
    "error": "#FF5252",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FFC107"
  },

})

var vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

