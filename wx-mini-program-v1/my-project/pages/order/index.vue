<template>
  <page-navidate-bar class="order" nav-title="点单">
    <scroll class="sv-box"></scroll>
  </page-navidate-bar>
</template>
<script>
import Scroll from "./scroll";
export default {
  name: "order",
  components: { Scroll },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.order {
  .sv-box {
    width: 100%;
    height: 100%;
  }
}
</style>
