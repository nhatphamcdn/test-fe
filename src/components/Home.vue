<template>
  <div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {},
  created() {},
  updated() {},
  components: {
    Sidebar,
  },
  methods: {},
};
</script>