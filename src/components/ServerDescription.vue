<template>
  <section class="serverDescription">
    <h3>サーバーNEWS</h3>
    <ul>
      <li
          v-for="(news, index) in serverNews"
          :key="index"
      >
        <span class="news-date">{{ news.date }}</span> {{ news.content }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">

const serverNews = [
  {
    "date": "11/10",
    "content": "サーバーOPEN!"
  },
  {
    "date": "11/22",
    "content": "プラグイン導入で新たに資源ワールドと装置ワールドをOPEN!"
  },
  {
    "date": "11/24",
    "content": "総メンバー５人突破！"
  },
  {
    "date": "12/3",
    "content": "メイン広場の建築が完成"
  },
  {
    "date": "12/30",
    "content": "総メンバー10人突破！！"
  },
  {
    "date": "2/7",
    "content": "総メンバー２０人突破！！"
  },
  {
    "date": "3/21",
    "content": "バージョン1.21.4に対応"
  },
  {
    "date": "4/2",
    "content": "総メンバー30人突破！！"
  },
  {
    "date": "4/5",
    "content": "新たにアスレ・PvPワールドをOPEN!"
  }
];

</script>

<style scoped>
.serverDescription {
  border: 1px solid #ccc;
  padding: 16px;
}

.server-news ul {
  list-style: none;
  padding: 0;
}

.server-news li {
  margin-bottom: 8px;
}

.news-date {
  font-weight: bold;
  margin-right: 8px;
}
</style>
