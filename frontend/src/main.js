import Vue from 'vue'

import App from './App'
import store from './config/store'
import router from './config/router'
import msg from './config/msg'
import './config/bootstrap'
Vue.config.productionTip = false

// Temporario
// require('axios').defaults.headers.commom['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkNhcmxvcyBEYW5pZWwiLCJlbWFpbCI6ImNhcmxvc3BvaGxvZEBnbWFpbC5jb20iLCJhZG1pbiI6MCwiaWF0IjoxNjE3MDUwMTAyLCJleHAiOjE2MTczMDkzMDJ9.3jTFWzk0eNX_lrd_7K2ldwDzLUp3iQ0qLqNZLyalJBQ'
// require('axios').defaults.body.commom = {"body":{'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkNhcmxvcyBEYW5pZWwiLCJlbWFpbCI6ImNhcmxvc3BvaGxvZEBnbWFpbC5jb20iLCJhZG1pbiI6MCwiaWF0IjoxNjE3MDY1MTYyLCJleHAiOjE2MTczMjQzNjJ9.wdBpaZVnzD235__mtEz7TWQzVP0q8CUlDh488FUcr-g'}}
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')