<template>
  <div>
    <div class="fd-grid mdl-grid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Index'
    }
  },
  created () {
    this.$emit('page', 'Home')
  }
}
</script>
