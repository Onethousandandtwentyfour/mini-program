<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
@import "./assets/fonts/iconfont.css";
@import "./assets/style/reset.css";
/*每个页面公共css */
.page,
.outer {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
