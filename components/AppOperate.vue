<template>
  <div class="operate">
    <div class="switch-fullpage" @click="switchFullPage">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping"></use>
      </svg>
      <div class="text">
        <template v-if="isFullPage">退出全屏</template>
        <template v-else>全屏浏览</template>
      </div>
    </div>
  </div>
</template>

<script>
if (process.BROWSER_BUILD) {
  require("~/assets/js/iconfont.js");
}
export default {
  data () {
    return {
      isFullPage: false
    }
  },
  methods: {
    switchFullPage() {
      // 暂时只考虑chrome浏览器, 后期做兼容
      if (!this.isFullPage) {
        document.documentElement.webkitRequestFullScreen();
      } else {
        document.webkitCancelFullScreen();
      }
      this.isFullPage = !this.isFullPage
    }
  }
};
</script>

<style lang="scss" scoped>
.operate {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  display: flex;
  padding: 0 40px;
  font-size: 14px;
  .switch-fullpage {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    .text {
      margin-left: 2px;
    }
  }
}
</style>
