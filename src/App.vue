<template>
  <RouterView/>
  <sign />
</template>

<script setup>
import sign from "./components/hero.vue";
import { RouterView } from "vue-router";
// import login from "./components/login.vue";
</script>
