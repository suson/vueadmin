<template>
  <div>
    <left-content/>
    <right-content/>
  </div>
</template>

<script>
import LeftContent from './LeftContent'
import RightContent from './RightContent'
export default {
  name: 'desktop',
  components: { LeftContent,RightContent },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App..........'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
