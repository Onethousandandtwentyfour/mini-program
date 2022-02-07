<template>
  <div class="outer">
    <scroll-view class="outer scroll" scroll-y @scroll="scroll">
      <image
        class="shop-bg"
        src="../../static/imgs/banner-1.jpg"
        mode="widthFix"
      />
      <view class="nav-inner"> </view>
      <view class="banner"></view>
      <view class="side-inner" v-show="!sideOuterShow">
        <side></side>
      </view>
      <view class="content">内容内容内容内容内容内容内容内容内容内容</view>
    </scroll-view>
    <view class="nav-outer" v-show="navOuterShow"></view>
    <view class="side-outer" v-show="sideOuterShow">
      <side></side>
    </view>
  </div>
</template>
<script>
import Side from "./side";

const systemInfo = uni.getSystemInfoSync(),
  navBarMax = (systemInfo.windowWidth * 300) / 450,
  sideBarMax = navBarMax + 0.1 * systemInfo.windowWidth;
export default {
  name: "scroll",
  components: { Side },
  data() {
    return {
      navOuterShow: false,
      sideOuterShow: false,
    };
  },
  computed: {},
  methods: {
    scroll(ev) {
      this.navOuterShow = ev.detail.scrollTop > navBarMax;
      this.sideOuterShow = ev.detail.scrollTop > sideBarMax;
    },
  },
};
</script>
<style lang="scss" scoped>
.outer {
  .scroll {
    .shop-bg {
      width: 100%;
      display: block;
    }

    .banner {
      width: 100%;
      height: 10vw;
      background: deepskyblue;
    }

    .content {
      width: 100%;
      height: 200vh;
      background: linear-gradient(0deg, deeppink, deepskyblue);
    }
  }
  .nav-outer,
  .nav-inner {
    width: 100%;
    height: 20vw;
    position: relative;
    top: 0;
    left: 0;
  }

  .nav-outer {
    position: absolute;
    background: rgba(255, 0, 0, 0.8);
  }
  .side-outer,
  .side-inner {
    width: 100%;
    height: calc(100% - 20vw);
    position: absolute;
    left: 0;
    pointer-events: none;
  }
  .side-inner {
    top: calc(100vw * 300 / 450 + 20vw + 10vw);
  }
  .side-outer {
    top: 20vw;
  }
}
</style>
