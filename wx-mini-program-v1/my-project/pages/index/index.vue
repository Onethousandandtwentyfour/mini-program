<template>
  <page-tabbar :current="0" class="index">
    <scroll-view scroll-y class="sv-box">
      <image
        :src="require('../../assets/imgs/main-1.jpg')"
        mdoe="widthFix"
        class="main-img"
        @click="order"
      />
    </scroll-view>
    <!-- <swiper class="swiper" circular autoplay>
      <template v-for="elem of banner.list">
        <swiper-item :key="elem.path" class="swiper-item">
          <image class="banner" :src="elem.path" mode="widthFix" />
        </swiper-item>
      </template>
    </swiper> -->
  </page-tabbar>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      banner: {
        list: [
          {
            path: require("../../assets/imgs/banner-1.jpg"),
          },
          {
            path: require("../../assets/imgs/banner-2.jpg"),
          },
          {
            path: require("../../assets/imgs/banner-3.jpg"),
          },
        ],
      },
    };
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
    .swiper {
      width: 100%;
      height: calc(100vw * 300 / 450);
      .swiper-item {
        .banner {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
