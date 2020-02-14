<template>
  <div class="about">
    <h1>This is an about page</h1>
    <test-basics :cnt="cnt" :txt="txt" @messageFromChild="childMessageReceived"/>
    <test-basics :cnt="cnt" :txt="txt"/>
    <tab-basics/>
    Counter Value from Vue(x) Store:<br/>
    {{ counter }}
  </div>
</template>

<script>
// @ is an alias to /src
import TestBasics from '@/components/TestBasics.vue';
import TabBasics from '@/components/TabBasics.vue';

export default {
  name: 'About',

  data() {
    return {
      cnt: 5,
      txt: "Hello Vuerld!"
    }
  },

  components: {
    TestBasics,
    TabBasics
  },

  computed: {
    counter: function() { return this.$store.getters.getCounter }
  },
  
  methods: {
    childMessageReceived(cnt) {
      console.log('Message From Child', cnt)
    }
  }
}
</script>