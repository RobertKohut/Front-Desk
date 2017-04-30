import Vue from 'vue'
// import router from '@/router'
let API_URL = process.env.API_URL

export default {
  user: {
    authenticated: false,
    profile: null
  },
  check () {
    let token = localStorage.getItem('id_token')
    if (token !== null) {
      this.user.authenticated = true
      return true
    }
    return false
  },
  login (context, email, password) {
    Vue.http.post(API_URL + 'user/jwt', {
      email: email,
      password: password
    }, {
      emulateJSON: true
    }).then(response => {
      if (!response.data.authenticated) {
        context.error = true
        return false
      }

      // Form reset
      context.error = false
      context.email = ''
      context.password = ''

      localStorage.setItem('id_token', response.data.token)
      Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
      this.user.authenticated = true
      this.user.profile = response.data.data
    }, response => {
      // error callback
      context.error = true
    })
  },

  logout () {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
    this.user.profile = false
  },

  register (context, name, email, password) {
    Vue.http.post('user', {
      name: name,
      email: email,
      password: password
    }, {
      emulateJSON: true
    }).then(
      response => { context.success = true },
      response => {
        context.response = response.data
        context.error = true
      })
  }
}
