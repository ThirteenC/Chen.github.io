<template>
  <div class="app-wrapper">
    <nav-menu></nav-menu>
    <div class="main-container">
      <nav-header></nav-header>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, NavMenu, NavHeader } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { mapState } from "vuex";

export default {
  name: "Layout",
  components: {
    AppMain,
    NavMenu,
    NavHeader
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({}),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}


.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
