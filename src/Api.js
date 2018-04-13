export default class Api {
  books = [
    {
      id: 0,
      title: "Magpie Murders",
      author: "Anthony Horowitz",
    },
    {
      id: 1,
      title: "Hunger",
      author: "Roxanne Gay",
    }
  ]

  getBooks() {
    console.log('getting books', this.books);
    return this.books;
  }

  addBook(book) {
    console.log('adding book', book);
    this.books.push(book);
    console.log('books', this.books);
    return this.books;
  }
}
