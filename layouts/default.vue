<template>
  <div>
    <!-- Header Global -->
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Konten Halaman Dinamis -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer Global -->
    <footer>
      <p>&copy; 2025 My Nuxt SPA App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

main {
  padding: 20px;
}
</style>
