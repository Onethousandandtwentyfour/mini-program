<template>
  <view class="page page-tabber">
    <view class="content">
      <slot />
    </view>
    <tabbar class="tabber" :current="current" />
  </view>
</template>
<script>
import tabbar from "./common/tabbar.vue";
export default {
  name: "page-tabber",
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  components: { tabbar },
};
</script>
<style lang="scss" scoped>
.page-tabber {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    flex-grow: 1;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .tabber {
    flex-shrink: 0;
    width: 100%;
  }
}
</style>
