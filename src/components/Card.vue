<template>
  <div class="card">
    <h3 class="title">{{ title }}</h3>
    <a :href="url" rel="noopener noreferrer">
      <img :src="image" :alt="title" class="image" />
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  url: string
}>()
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  width: 750px;
}

.card:hover {
  transform: scale(1.02);
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.75rem 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
}

.image {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}
</style>
