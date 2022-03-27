<template>
  <div>
    <Navbar />
    <Particles />
    <Profile />
    <router-view />
  </div>
</template>

<script>
import Particles from "./components/Particles";
import Profile from "./components/Profile";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
    Particles,
    Profile,
  },
};
</script>

<style>
:root {
  --olive: #808000;
}

vue-particles {
  min-height: 10vh;
}
</style>
