<template>
  <div>
    
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
