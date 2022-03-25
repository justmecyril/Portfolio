<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <Particles/>
    <Timer class="timer-position"/>
  
  </div>
</template>

<script>
import Particles from "./components/Particles";
import Timer from "./components/Timer";

export default {
  name: "App",
  components: {
    Particles,
    Timer
  }
};
</script>

<style>
#app {
  font-family: "Rajdhani", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 50px; */
}

.timer-position {
  top: 0;
}
vue-particles {
  min-height: 10vh;
}
</style>
