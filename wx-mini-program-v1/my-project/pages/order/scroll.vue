<template>
  <view class="outer scroll">
    <image
      class="shop-bg"
      src="../../static/imgs/banner-1.jpg"
      mode="widthFix"
    />
    <view class="nav-outer">
      <view class="outer nav-inner">
        <view class="option">菜品</view>
        <view class="option">评价</view>
      </view>
    </view>
    <template v-if="true">
      <view class="side-outer">
        <side :options="sideData"></side>
      </view>
      <view class="content">
        <view class="inner">
          <template v-for="parent of productData">
            <view class="group" :key="parent.id">{{ parent.name }}</view>
            <template v-for="child of parent.product">
              <view class="product-outer" :key="child.id">
                <image
                  :src="'../../static/imgs/' + child.icon + '.jpg'"
                  class="img"
                  mode="widthFix"
                />
              </view>
            </template>
          </template>
        </view>
      </view>
    </template>
    <template v-else> 店鋪信息 </template>
  </view>
</template>
<script>
import Side from "./side";
import { productData } from "./mock";
export default {
  name: "scroll",
  components: { Side },
  data() {
    return {
      productData,
    };
  },
  computed: {
    sideData() {
      return this.productData.map((item) => {
        const newItem = Object.assign({}, item);
        delete newItem.product;
        return newItem;
      });
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.scroll {
  overflow: scroll;
  background-color: #ffffff;
  --nav-bar-height: 14vw;
  --footer-bar-height: 20vw;

  .shop-bg {
    width: 100%;
    display: block;
  }

  .nav-outer {
    width: 100%;
    height: var(--nav-bar-height);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #ffffff;

    .nav-inner {
      padding: 0 2vw 0 5vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: "";
        width: 500%;
        height: 1px;
        background-color: #666;
        position: absolute;
        left: 0;
        bottom: 0;
        transform-origin: left center;
        transform: scale(0.2);
      }

      .option {
        font-size: 4vw;
        padding-right: 8vw;
      }
    }
  }

  .side-outer {
    width: 100%;
    height: 0;
    position: sticky;
    top: var(--nav-bar-height);
    left: 0;
    pointer-events: none;
  }

  .content {
    width: 100%;
    padding-left: 20vw;
    background-color: #f1f2f6;

    .inner {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      --box-width: calc(100% - 10vw);

      .group {
        width: var(--box-width);
        text-align: left;
        font-size: 4vw;
        line-height: 16vw;
      }

      .product-outer {
        width: var(--box-width);
        height: 0;
        padding-top: calc(var(--box-width) * 300 / 450);
        position: relative;
        border-radius: 5vw;
        overflow: hidden;
        .img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
</style>
