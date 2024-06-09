<template>
  <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    let vm = this;
    fetchNewsList()
      .then(function (response) {
        console.log(response);
        vm.users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
