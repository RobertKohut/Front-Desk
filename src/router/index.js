import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/components/Index'
import Login from '@/components/views/Login'
import Dashboard from '@/components/views/Dashboard'
import NotFound from '@/components/NotFound'

Vue.use(Router)
Vue.use(Resource)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
Vue.http.options.root = 'http://dev1.robertkohut.com:8080'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Dashboard,
      children: [
        { path: '', name: 'Dashboard', component: Index },
        { path: '/forum', name: 'Forum', component: Index }
      ]
    },
    { path: '*',
      component: Dashboard,
      children: [
        { path: '*', name: 'Page Not Found', component: NotFound }
      ]
    }
  ]
})
