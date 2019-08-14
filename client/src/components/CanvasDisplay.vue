<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <div id="layoutBoard">
            <vue-draggable-resizable
              :w="100"
              :h="100"
              @dragging="onDrag"
              @resizing="onResize"
              :parent="true"
              id="circle"
              @keyup.ctrl = "scaleEvenly"
            ></vue-draggable-resizable>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import VueDraggableResizable from "vue-draggable-resizable";
export default {
  name: "CanvasDisplay",
  components: {
    VueDraggableResizable
  },
  methods: {
    getCoordMouse(event) {
      console.log(event.clientX); // x coordinate
      console.log(event.clientY); // y coordinate
    },
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },
    scaleEvenly: function() {
      console.log("crt pressed");
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  }
};
</script>
<style>
#circle {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
}
#square {
  width: 100px;
  height: 100px;
  background: red;
}
#layoutBoard{
  height: 1000px; 
  width: 1000px; 
  border: 1px solid black; 
  position: relative;
}
</style>

