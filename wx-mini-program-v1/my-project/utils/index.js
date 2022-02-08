//状态栏高度
export const getTopBarHeight = ()=>{
    const { statusBarHeight } = uni.getSystemInfoSync(),
  { height, top } = uni.getMenuButtonBoundingClientRect();
  return {
    statusBarHeight,
    topBarHeight: height + statusBarHeight + (top - statusBarHeight) * 2,
    safeHeight:height + (top - statusBarHeight) * 2,//top高度去掉状态栏的高度
  }
}