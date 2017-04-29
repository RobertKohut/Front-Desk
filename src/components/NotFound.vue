<template>
  <div>404</div>
</template>

<script>
export default {
  name: 'PageNotFound',
  data () {
    return {
      msg: 'Index'
    }
  },
  created () {
    this.$emit('page', 'Page Not Found')
  }
}
</script>
