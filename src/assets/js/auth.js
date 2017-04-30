import Vue from 'vue'
// import router from '@/router'
let API_URL = process.env.API_URL

export default {
  user: {
    authenticated: false,
    profile: null
  },
  check () {
    let token = this.user.authenticated = true
    if (token !== null) {
      this.user.authenticated = true
    }
  },
  login (context, email, password) {
    Vue.http.get(API_URL + 'users/login', {
      email: email,
      password: password
    }, {
      emulateJSON: true
    }).then(response => {
      context.error = false
      if (response.data.authenticated) {
        localStorage.setItem('id_token', response.data.token)
        Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
        this.user.authenticated = true
        this.user.profile = response.data.data
        return true
      }

      // If authentication fails, return
      context.error = true
    }, response => {
      // error callback
      context.error = true
    })
  },
  register (context, name, email, password) {
    Vue.http.post('api/register', {
      name: name,
      email: email,
      password: password
    }).then(
      response => { context.success = true },
      response => {
        context.response = response.data
        context.error = true
      })
  }
}
