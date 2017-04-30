import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Auth from '@/assets/js/auth'
import Index from '@/components/Index'
import Login from '@/components/views/Login'
import Dashboard from '@/components/views/Dashboard'
import NotFound from '@/components/NotFound'

Vue.use(Router)
Vue.use(Resource)

if (localStorage.getItem('id_token')) {
  Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
}

// If left unspecified, send all request to the ENV API_URL.
Vue.http.options.root = process.env.API_URL

// TODO: Test 401 response
// Present login screen if response from API is 401 (unauthorized)
Vue.http.interceptors.push(function (request, next) {
  // Ignore the request, we're more interested in the response
  next(function (response) {
    if (response.status === 401) {
      Auth.logout()
    }
  })
})

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
