<template>
  <div
    class="sidebar-container"
    :class="isCollapse ? 'sidebar-container-close' : ''"
  >
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <div class="logo-content">
      <i class="el-icon-s-promotion"></i>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <div v-for="(item, index) in routes" :key="index">
        <el-submenu v-if="item?.children?.length > 0" :index="item.title">
          <template slot="title">
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item
            v-for="(item_child, index_child) in item.children"
            :index="item_child.title"
            :key="index_child"
            @click="handleJump(item_child.path)"
          >
            {{ item_child.title }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.title" @click="handleJump(item.path)">
          {{ item.title }}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.logo-content {
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.sidebar-container-close {
  width: 75px !important;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      routes: [
        { title: "首页", path: "/" },
        {
          title: "工具箱",
          children: [{ title: "画板", path: "/drawingBoard" }],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleJump(path) {
      this.$router.push(path);
    },
  },
};
</script>
