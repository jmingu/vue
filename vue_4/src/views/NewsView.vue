<template>
  <div v-for="(user, index) in users" :key="index">{{ user.title }}</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    let vm = this;
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
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
