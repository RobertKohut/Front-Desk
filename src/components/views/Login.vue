<template>
  <div class="fd-login-container">
    <div class="mdl-grid">
      <form action='#'>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="email" v-model="email">
          <label class="mdl-textfield__label" for="sample3">Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="password" id="password" v-model="password">
          <label class="mdl-textfield__label" for="sample3">Password</label>
        </div>
        <button v-on:click="login" class="login-btn mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import Auth from '@/assets/js/auth.js'
  export default {
    name: 'Login',
    data () {
      return {
        email: null,
        password: null,
        error: false
      }
    },
    methods: {
      login: function (event) {
        event.preventDefault()
        if (this.email && this.password) {
          Auth.login(this, this.email, this.password)
        }
      }
    }
  }
</script>

<style>
  .fd-login-container {
    background: rgba(21,12,12,0.0);
    padding: 20px 0;
    max-width: 320px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 10%;
  }

  .fd-login-container .mdl-grid {
    max-width: 90%;
  }

  .mdl-textfield {
    width: 100%;
  }

  .login-btn {
    margin-top: 20px;
    width: 100%;
  }
</style>
