<template>
  <div class="dashboard-container">home</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data() {
    return {
      currentRole: "adminDashboard",
    };
  },
  computed: {
    ...mapGetters([]),
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.dashboard-container {
}
</style>
