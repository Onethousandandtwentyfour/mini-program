<template>
  <view class="page page-navigate-bar">
    <navigate-bar class="navigate-bar">
      <slot name="nav">
        <view class="nav-bar" @click="back"
          ><text v-if="showLeft" class="iconfont icon-fanhui icon"></text
          ><text class="title">{{ navTitle }}</text></view
        >
      </slot>
    </navigate-bar>
    <view class="content">
      <slot name="default" />
    </view>
  </view>
</template>
<script>
import NavigateBar from "./common/navigate-bar.vue";
export default {
  name: "page-navigate-bar",
  components: { NavigateBar },
  props: {
    navTitle: String,
  },
  data() {
    return {
      showLeft: !!getCurrentPages().length,
    };
  },
  methods: {
    back() {
      if (this.showLeft) {
        uni.navigateBack({ delta: 1 });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.page-navigate-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .navigate-bar {
    flex-shrink: 0;
    width: 100%;
    .nav-bar {
      width: 100%;
      height: 100%;
      padding: 0 4vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .icon {
        font-size: 5vw;
      }
      .title {
        font-size: 4vw;
      }
    }
  }
  .content {
    flex-grow: 1;
    width: 100%;
    position: relative;
  }
}
</style>
