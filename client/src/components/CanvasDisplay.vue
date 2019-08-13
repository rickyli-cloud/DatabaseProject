<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col></b-col>
        <b-col>
          <canvas id="myCanvas" width="1000" height="800"></canvas>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "CanvasDisplay",
  methods: {
    getCoordMouse(event) {
      console.log(event.clientX); // x coordinate
      console.log(event.clientY); // y coordinate
    }
  }
};
</script>
<style>
#myCanvas {
  border: 1px solid #000000;
  background-color: #32a852;
}
</style>

