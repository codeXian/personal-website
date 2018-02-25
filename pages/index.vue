<template>
  <div class="index">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>
