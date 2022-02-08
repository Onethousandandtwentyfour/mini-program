<template>
  <view class="navigate-bar" :style="[navigateBarStyle]">
    <view class="nav" :style="[navStyle]">
      <slot />
    </view>
  </view>
</template>
<script>
import { getTopBarHeight } from "@/utils";
const { topBarHeight, safeHeight } = getTopBarHeight();
export default {
  name: "navigate-bar",
  data() {
    return {
      topBarHeight,
    };
  },
  computed: {
    navigateBarStyle() {
      return {
        height: this.topBarHeight + "px",
      };
    },
    navStyle() {
      return {
        height: safeHeight + "px",
        "line-height": safeHeight + "px",
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
