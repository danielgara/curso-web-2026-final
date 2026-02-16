import { defineStore } from 'pinia';
import type { BookInterface } from '@/interfaces/BookInterface.js';

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as BookInterface[],
  }),
});
