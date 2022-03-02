<template>
  <NavBar />
<div class="uk-container uk-container-large"> 
  <router-view />
</div>
</template>

<script setup>
  import NavBar from "./components/NavBar.vue";
</script>