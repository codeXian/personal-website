<template>
  <div class="typed-container">
    <div id="typed"></div>
  </div>
</template>

<script>
import Typed from "typed.js";
export default {
  methods: {
    load() {
      const typed = new Typed("#typed", {
        strings: [
           "I'm a web developer.",
           "I'm codexian.",
        ],
        typeSpeed: 60,
        backSpeed: 60,
        cursorChar: "_",
        onComplete: self => {
          document.getElementsByClassName("typed-cursor")[0].innerHTML = "";
        }
      });
    }
  },
  mounted() {
    this.load();
  }
};
</script>

<style lang="scss">
.typed-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  #typed {
    color: #000;
    font-family: Futura, sans-serif;
    font-size: 3em;
    display: inline-block;
    font-weight: 700;
  }
  .typed-cursor {
    font-family: Futura, sans-serif;
    font-size: 3em;
    font-weight: 700;
  }
}
</style>
