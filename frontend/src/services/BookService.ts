import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore.js';
import type { CreateBookDTO } from '@/dtos/CreateBookDTO.js';

export default class BookService {
  public static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  public static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }

  public static getUniqueBookCategories(): string[] {
    const books = BookService.getBooks();
    const categories = books.map((book) => book.category);
    const uniqueCategories = new Set(categories);
    return Array.from(uniqueCategories);
  }

  public static createBook(book: CreateBookDTO): void {
    const id = useBookStore().books.length + 1;
    useBookStore().books.push({ id, ...book });
  }
}
