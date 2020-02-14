<template>
  <div class="test">
    <p>{{ text }}</p>
    <input v-model="text">
    <button @click="onClick">
      You clicked me {{ count }} times.
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TestBasics extends Vue {
  @Prop() private cnt!: number;
  @Prop() private txt!: string;
  private count: number = this.cnt;
  private text: string = this.txt;

  onClick() {
    this.count++;
    this.text = this.text.split('').reverse().join('');
    this.$emit('messageFromChild', this.count);
    this.$store.dispatch('increment');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>