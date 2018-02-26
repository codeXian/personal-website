<template>
  <div class="header">
    <div class="header-background"></div>
    <typed></typed>
    <app-operate></app-operate>
  </div>
</template>

<script>
import Typed from "./Typed.vue"
import AppOperate from "./AppOperate";
export default {
  components: {
    Typed,
    AppOperate
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  .header-background {
    position: absolute;
    background-image: url('~assets/images/header-bg.jpg');
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-size: cover;
    background-position-x: 50%;
  }
}
</style>
