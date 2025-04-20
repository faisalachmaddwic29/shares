<template>
  <div>
    <h1>Daftar Postingan</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <!-- Link ke halaman detail berdasarkan id -->
        <router-link :to="`/detail/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  try {
    // Mengambil data postingan menggunakan fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    posts.value = data
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>
