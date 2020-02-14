<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },

  components: {
    HelloWorld
  }
}
</script>
