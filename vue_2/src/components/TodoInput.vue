<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />

    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"> </i>
    </span>
    <AlertModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>
          경고
          <i class="closeModaBtn fas fa-times" @click="showModal = false"></i>
        </h3>
      </template>
      <template #body>
        <h3>값이 비었습니다.</h3>
      </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
  components: {
    AlertModal,
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      // 저장로직 실행
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModaBtn {
  color: #42b983;
}
</style>
