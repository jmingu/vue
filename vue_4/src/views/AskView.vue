<template>
  <div v-for="(item, index) in ask" :key="index">
    {{ item.title }}
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    let vm = this;
    fetchAskList()
      .then(function (response) {
        console.log(response);
        vm.ask = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
