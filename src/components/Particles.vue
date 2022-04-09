<template>
  <div>
    <vue-particles
   class="particles"
      color="#dedede"
      :particleOpacity="1"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="1"
      linesColor="#dedede"
      :lineLinked="true"
      :lineOpacity="0.1"
      :linesDistance="150"
      :moveSpeed="0.5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  name: "Particles",
};
</script>

<style scoped>
.particles{
  min-height: 100vh;
}
</style>
