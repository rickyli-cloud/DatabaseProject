<template>
  <div>
    <CanvasDisplay />
  </div>
</template>
<script>

import CanvasDisplay from "@/components/CanvasDisplay.vue";
import { EventBus } from "@/event-bus.js";
export default {
  name: "TableService",
  mounted() {
    EventBus.$emit("sent", this.labelMenu);
  },
  components: {
    CanvasDisplay,
  },
  data() {
    return {
      labelMenu: "Table Service",
    
    };
  }
};
</script>
