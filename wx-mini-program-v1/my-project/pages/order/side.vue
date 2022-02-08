<template>
  <scroll-view class="side" scroll-y :style="[boxStyle]">
    <template v-for="(side, index) of options">
      <view
        class="side-item"
        :class="index == selectedIndex ? 'selected' : ''"
        :key="side.id"
        @click="selectedIndex = index"
      >
        <image
          class="icon"
          :src="'../../static/icons/' + side.icon + '.png'"
          mode="widthFix"
        />
        <view class="text">{{ side.name }}</view>
      </view>
    </template>
  </scroll-view>
</template>
<script>
import { getTopBarHeight } from "@/utils";
const { topBarHeight } = getTopBarHeight();
export default {
  name: "side",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  computed: {
    boxStyle() {
      return {
        "--top-bar-height": topBarHeight,
      };
    },
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.side {
  width: 20vw;
  height: calc(
    100vh - var(--top-bar-height) * 1px - var(--nav-bar-height) -
      var(--footer-bar-height)
  );
  background: #ffffff;
  pointer-events: painted;

  .side-item {
    font-size: 4vw;
    line-height: 6vw;
    padding: 3vw 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: background-color 0.3s linear;

    &.selected {
      background-color: #f1f2f6;
    }

    .icon {
      width: 10vw;
      height: 10vw;
    }
  }
}
</style>
