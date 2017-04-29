<template>
  <div class="fd-sidenav mdl-layout__drawer">
    <span class="mdl-layout-title">{{this.$parent.title}}</span>
    <nav class="mdl-navigation">
      <router-link to="/" class="mdl-navigation__link"><i class="material-icons" role="presentation">home</i>Home</router-link>
      <router-link to="forum" class="mdl-navigation__link"><i class="material-icons" role="presentation">forum</i>Forum</router-link>
      <router-link to="404" class="mdl-navigation__link"><i class="material-icons" role="presentation">forum</i>404</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['title']
  }
</script>
