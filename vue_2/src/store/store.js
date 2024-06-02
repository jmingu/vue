import { createStore } from 'vuex';
// import * as getters from './getters';
// import * as mutations from './mutations';
import todoApp from './modules/todoApp';

// export const store = createStore({

//   getters,
//   mutations,
// });

export const store = createStore({
  modules: {
    todoApp,
  },
});
