<!-- App.vue -->
<template>
  <header>
    <Header/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>
<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
