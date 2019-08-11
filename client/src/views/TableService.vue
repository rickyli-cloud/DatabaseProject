<template>
  <div></div>
</template>
<script>
import { EventBus } from "@/event-bus.js";
export default {
  name: "TableService",
  beforeMount(){
    EventBus.$emit("sent", this.labelMenu);
  },
  data() {
    return {
      labelMenu: "Table Service"
    };
  }
};
</script>