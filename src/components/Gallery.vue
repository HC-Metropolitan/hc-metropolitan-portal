<template>
  <router-view />

  <section class="gallery">
    <h2>ギャラリー</h2>
    <div class="images">
      <Card
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :image="card.image"
          :url="card.url"
      /><!--      <img v-for="(img, i) in images" :key="i" :src="(img)" alt="Screenshot" />-->
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "./Card.vue";

const images = [
  ['/images/Warehouse.png', '倉庫', 'warehouse'],
  ['/images/Neko.png', 'ネコハウス', 'neko'],
  ['/images/House.png', '家', 'house']
]


// 仮に title や url を画像名から自動生成
const cards = images.map((path) => {
  return {
    title: path[1],
    image: path[0],
    url: `/${path[2]}`
  }
})
</script>

<style scoped>
.gallery {
  margin-top: 2rem;
}

.images {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

img {
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
</style>
