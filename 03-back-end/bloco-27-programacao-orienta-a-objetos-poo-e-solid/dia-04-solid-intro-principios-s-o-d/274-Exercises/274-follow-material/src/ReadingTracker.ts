type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  private wishlist: Book[];

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    console.log(this.progressNotification());
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  progressNotification(): string {
    switch (true) {
      case this.booksRead >= this.readingGoal:
        return 'Congratulations! You\'ve reached your reading goal!';
      default:
        return 'There are still some books to go!';
    }
  }
}

const readTracker = new ReadingTracker(20);
  readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
  readTracker.showWishlist();
  readTracker.trackReadings(12);
  readTracker.trackReadings(9);