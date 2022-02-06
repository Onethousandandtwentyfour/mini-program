<template>
  <view class="tabbar flex-row-center" :style="[isIosStyle]">
    <template v-for="(tab, index) of tabbar.list">
      <view
        :key="tab.path"
        class="tab"
        :class="[tabSelected(index)]"
        @click="jump(index)"
      >
        <text class="iconfont icon" :class="'icon-' + tab.icon"></text>
        <view class="text">{{ tab.text }}</view>
      </view>
    </template>
  </view>
</template>
<script>
const systemInfo = uni.getSystemInfoSync();
export default {
  name: "tabbar",
  props: {
    current: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tabbar: {
        list: [
          {
            path: "/pages/index/index",
            icon: "icontabbarhomeup",
            text: "首页",
          },
          {
            path: "/pages/integral/index",
            icon: "basesalesintegralSpecial",
            text: "积分",
          },
          {
            path: "/pages/order-records/index",
            icon: "order",
            text: "订单",
          },
          {
            path: "/pages/mine/index",
            icon: "wode",
            text: "我的",
          },
        ],
      },
    };
  },
  computed: {
    isIos() {
      return systemInfo.system.toUpperCase().includes("IOS");
    },
    isIosStyle() {
      return this.isIos
        ? {
            "padding-bottom": "16px",
          }
        : {};
    },
    tabSelected() {
      return (index) => {
        return this.current == index ? "select" : "normal";
      };
    },
  },
  methods: {
    jump(index) {
      if (this.current != index) {
        uni.redirectTo({
          url: this.tabbar.list[index].path,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  position: relative;
  overflow: hidden;
  background: rgb(255, 255, 255);

  &.flex-row-center {
    padding: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &::after {
    content: "";
    width: 300%;
    height: 1px;
    background-color: #dfe6e9;
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: left center;
    transform: scale(calc(1 / 3));
  }

  .tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    &.normal {
      --tab-color: #0984e3;
    }
    &.select {
      --tab-color: #fdcb6e;
    }

    .icon {
      font-size: 6vw;
      color: var(--tab-color);
    }
    .text {
      margin-top: 1vw;
      font-size: 2vw;
      color: var(--tab-color);
    }
  }
}
</style>
