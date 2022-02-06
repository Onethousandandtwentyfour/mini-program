<template>
  <view class="navigate-bar" :style="[navigateBarStyle]">
    <view class="nav" :style="[navStyle]">
      <slot />
    </view>
  </view>
</template>
<script>
const { statusBarHeight } = uni.getSystemInfoSync(),
  { height, top } = uni.getMenuButtonBoundingClientRect();
export default {
  name: "navigate-bar",
  data() {
    return {
      statusBarHeight: height + statusBarHeight + (top - statusBarHeight) * 2,
    };
  },
  computed: {
    navigateBarStyle() {
      return {
        height: this.statusBarHeight + "px",
      };
    },
    navStyle() {
      return {
        height: height + (top - statusBarHeight) * 2 + "px",
        "line-height": height + (top - statusBarHeight) * 2 + "px",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.navigate-bar {
  width: 100%;
  position: relative;

  .nav {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
