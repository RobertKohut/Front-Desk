<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="fd-header mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{{$route.name}}</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="#" v-on:click="logout">Logout</a>
        </nav>
      </div>
    </header>
    <sidebar />
    <main class="fd-content mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Auth from '@/assets/js/auth.js'
import Sidebar from './Sidebar'

export default {
  name: 'Dashboard',
  props: ['title', 'page'],
  components: {
    Sidebar
  },
  methods: {
    logout: function (event) {
      event.preventDefault()
      Auth.logout()
    }
  },
  mounted: function () {
    // A redraw of the router-vew will cause the view to initialize without MDL
    // Update all of the MDL handlers
    window.componentHandler.upgradeDom()
  }
}
</script>
