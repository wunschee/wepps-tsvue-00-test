<template>
  <div class="tab">
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TabBasics extends Vue {
  private message: string = "You loaded this page on " + new Date().toLocaleString();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>