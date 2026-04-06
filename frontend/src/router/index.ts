import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BooksIndexView from '@/views/BooksIndexView.vue';
import BooksShowView from '@/views/BooksShowView.vue';
import BooksCreateView from '@/views/BooksCreateView.vue';
import CounterView from '@/views/CounterView.vue';
import VariablesView1 from '@/views/VariablesView1.vue';
import VariablesView2 from '@/views/VariablesView2.vue';
import VariablesView3 from '@/views/VariablesView3.vue';
import VariablesView4 from '@/views/VariablesView4.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About' } },
    { path: '/books', name: 'books', component: BooksIndexView, meta: { title: 'Books' } },
    { path: '/books/create', name: 'books.create', component: BooksCreateView, meta: { title: 'Create Book' } },
    { path: '/books/:id', name: 'book', component: BooksShowView, meta: { title: 'Book' } },
    { path: '/counter', name: 'counter', component: CounterView, meta: { title: 'Counter' } },
    { path: '/variables1', name: 'variables1', component: VariablesView1, meta: { title: 'Variables1' } },
    { path: '/variables2', name: 'variables2', component: VariablesView2, meta: { title: 'Variables2' } },
    { path: '/variables3', name: 'variables3', component: VariablesView3, meta: { title: 'Variables3' } },
    { path: '/variables4', name: 'variables4', component: VariablesView4, meta: { title: 'Variables4' } },
  ],
});

export default router;
