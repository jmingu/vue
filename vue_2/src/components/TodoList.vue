<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <li
        v-for="(todoItem, index) in storedTodoItems"
        v-bind:key="todoItem"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  // props: ['propsdata'],
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem', // 자동으로 인자가 들어간다.
      toggleComplete: 'toggleOneItem',
    }),
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeItem', todoItem, index);
    //   this.$store.commit('removeOneItem', { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem, index);
    //   this.$store.commit('toggleOneItem', { todoItem, index });
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    ...mapGetters(['storedTodoItems']),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
