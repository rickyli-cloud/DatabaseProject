<template>
  <b-navbar>
    <b-navbar-brand href="#">{{labelMenu}}</b-navbar-brand>
    <b-navbar-nav class="ml-auto" right>
      <b-nav-item href="#">Edit</b-nav-item>
      <b-nav-item href="#">Profile</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import { EventBus } from "@/event-bus.js";
export default {
  name: "Navbar",
  mounted() {
    EventBus.$on("sent", label => {
      this.labelMenu = label;
    });
  },
  data() {
    return {
      labelMenu: "",
    };
  }
};
</script>

