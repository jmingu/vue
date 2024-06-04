// import Vue from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';

// Vue.use(VueRouter)

// export const router = new VueRouter({
//   routes: [
//     {
//       // url 주소
//       path: '/news',
//       // url 주소로 갔을 때 표시될 컴포넌트
//       component: NewsView,
//     },
//     {
//       path: '/ask',
//       component: AskView,
//     },
//     {
//       path: 'jobs',
//       component: JobsView,
//     },
//   ],
// });

const routes = [
  { path: '/news', component: NewsView },
  { path: '/ask', component: AskView },
  { path: '/jobs', component: JobsView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
