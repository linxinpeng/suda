<template>
  <div id="app">
    <lt-menu-bar v-if="layout"></lt-menu-bar>
    <router-view></router-view>
    <lt-footer v-if="footerVisible"></lt-footer>
  </div>
</template>

<script>
import LtMenuBar from '@/components/MenuBar'
import LtFooter from '@/components/footer'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  
  computed: {
    layout() {
      return ['Login'].indexOf(this.$route.name) < 0;
    },
    footerVisible() {
      return ['Register','Login','ForgetPassword'].indexOf(this.$route.name) < 0 && this.$route.path.indexOf('/user') != 0;
    }
  },
  components:{
    LtMenuBar,
    LtFooter,
  }
}
</script>
<style lang="scss">
.container {
  width: 1170px;
  margin: auto;
}
body {
  background: #ffffff;
}
</style>
