<template>
  <div class="typed">

  </div>
</template>

<script>
import Typed from "typed.js";
export default {
  methods: {
    load() {
      var options = {
        strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
        typeSpeed: 40
      };

      var typed = new Typed(".typed", options);
    }
  },
  mounted() {
    this.load();
  }
};
</script>

<style lang="scss" scoped>

</style>
