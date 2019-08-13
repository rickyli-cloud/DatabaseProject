<template>
  <div>
<FreeTransform 
    :x="0"
    :y="0"
    :scale-x="1"
    :scale-y="1"
    :width="100"
    :height="100"
    :angle="0"
    :offset-x="0"
    :offset-y="0"
    @update="update($event)"
>
    <div class="element" :style="{width: `100px`,height: `100px`}">
        <img src="..."/>
    </div>

</FreeTransform>
    <CanvasDisplay />
  </div>
</template>
<script>
import FreeTransform from '../../node_modules/vue-free-transform'
import CanvasDisplay from "@/components/CanvasDisplay.vue";
import { EventBus } from "@/event-bus.js";
export default {
  name: "TableService",
  mounted() {
    EventBus.$emit("sent", this.labelMenu);
  },
  components: {
    CanvasDisplay,
    FreeTransform
  },
  data() {
    return {
      labelMenu: "Table Service",
    
    };
  }
};
</script>
