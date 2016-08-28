//创建返回键
export const naviGoBack = (navigator) => {
  if (navigator && navigator.getCurrentRoutes().lenght > 1 ) {
    navigator.pop();
    return true;
  }
  return false;
}
