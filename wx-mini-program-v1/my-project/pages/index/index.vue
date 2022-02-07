<template>
  <page-tabbar :current="0" class="index">
    <scroll-view scroll-y class="sv-box">
      <image
        src="../../static/imgs/main-1.jpg"
        mdoe="widthFix"
        class="main-img"
        @click="order"
      />
    </scroll-view>
  </page-tabbar>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  onLoad() {},
  methods: {
    //去点单
    order() {
      uni.navigateTo({
        url: "/pages/order/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  .sv-box {
    width: 100%;
    height: 100%;
    .main-img {
      width: 100%;
      height: calc(100vw * 3223 / 1000);
    }
  }
}
</style>
