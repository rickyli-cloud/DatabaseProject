<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      loading: true,
      error: false
    };
  },
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["initialLoad"])
  },
  async mounted() {
    try {
      // await this.initialLoad();
      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = true;
    }
  }
};
</script>

<style>
</style>
