<template>
  <div class="header">
    <RouterLink to="/news">news</RouterLink> |
    <RouterLink to="/ask">ask</RouterLink> |
    <RouterLink to="/jobs">jobs</RouterLink>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>
