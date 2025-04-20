<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <img :src="imageUrl" alt="Random Image" />

    <!-- Open Graph Tags -->
    <meta property="og:title" :content="post.title" />
    <meta property="og:description" :content="post.body" />
    <meta property="og:image" :content="imageUrl" />
    <meta v-if="currentUrl" property="og:url" :content="currentUrl" />
    <meta property="og:type" content="website" />

    <!-- Tombol Share -->
    <div class="share-buttons">
      <button @click="sharePost" class="btn-share">
        <i class="fa fa-share-alt"></i> Share
      </button>
      <a :href="whatsappUrl" target="_blank" class="btn-whatsapp">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const post = ref({})
const imageUrl = 'https://picsum.photos/400/300'
const currentUrl = ref('')
const whatsappUrl = ref('')

const route = useRoute()

onMounted(async () => {
  const postId = route.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await res.json()
  post.value = data

  currentUrl.value = window.location.href
  whatsappUrl.value = `https://wa.me/?text=${encodeURIComponent(`${data.title}\n${data.body}\n${window.location.href}`)}`
})

function sharePost() {
  const shareData = {
    title: post.value.title,
    text: post.value.body,
    url: currentUrl.value,
  }

  if (navigator.share) {
    navigator.share(shareData).catch(console.error)
  } else {
    alert('Web Share API tidak tersedia. Gunakan tombol WhatsApp di bawah.')
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
}
.share-buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
.btn-share,
.btn-whatsapp {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-share {
  background-color: #007bff;
}
.btn-whatsapp {
  background-color: #25D366;
}
</style>

