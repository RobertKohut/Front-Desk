<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="fd-header mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{{$route.name}}</span>
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
import Sidebar from './Sidebar'

export default {
  name: 'Dashboard',
  props: ['title', 'page'],
  components: {
    Sidebar
  }
}
</script>
