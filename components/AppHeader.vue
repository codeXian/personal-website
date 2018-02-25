<template>
  <div class="header">
    <div class="header-background"></div>
    <typed></typed>
  </div>
</template>

<script>
import Typed from "./Typed.vue";
export default {
  components: {
    Typed
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  position: relative;
  .header-background {
    position: absolute;
    background-image: url('~assets/images/header-bg.jpg');
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position-x: 50%;
  }
}
</style>
