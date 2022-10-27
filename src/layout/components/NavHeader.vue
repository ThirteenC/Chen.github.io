<template>
  <div class="fixed-header" :class="isCollapse ? 'close-fixed-header' : ''">
    <div class="switch" v-if="false">
      <i
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="handleChange()"
      >
      </i>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("setting", ["isCollapse"]),
  },
  methods: {
    ...mapMutations("setting", ["SET_ISCOLLAPSE"]),
    handleChange() {
      this.SET_ISCOLLAPSE(!this.isCollapse);
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed-header {
  width: calc(100vw - 210px);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: #fff;
  .switch {
    font-size: 25px;
    cursor: pointer;
  }
}
.close-fixed-header {
  width: calc(100vw - 100px);
}
</style>