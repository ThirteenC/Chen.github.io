<template>
  <div class="header-content">
    <div class="switch">
      <i class="el-icon-s-fold"></i>
    </div>
    
  </div>
</template>
<style lang="scss" scoped>
.header-content {
  width: calc(100vw - 210px);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .switch {
    font-size: 25px;
    cursor: pointer;
  }
}
</style>