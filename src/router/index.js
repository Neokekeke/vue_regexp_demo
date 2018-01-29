import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'

import Reg1 from '../components/reg1.vue'
import Reg2 from '../components/reg2.vue'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children : [
        {
          path : 'reg1',
          name : 'reg1',
          component :  Reg1
        },
        {
          path : 'reg2',
          name : 'reg2',
          component :  Reg2
        },
        {
          path : 'regexper',
          name : 'regexper',
          redirect : 'https://regexper.com/'
        }
      ]
    }
  ]
})
