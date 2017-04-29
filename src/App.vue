<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-upgraded">
    <router-view :title="title"></router-view>
  </div>
</template>

<script>
window.document.app = {}
export default {
  name: 'app',
  data () {
    return {
      title: 'Front Desk',
      page: ''
    }
  }
}

</script>
