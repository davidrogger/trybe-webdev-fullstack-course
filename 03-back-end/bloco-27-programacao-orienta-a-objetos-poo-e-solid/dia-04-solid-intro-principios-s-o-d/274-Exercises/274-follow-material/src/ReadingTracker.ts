export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    console.log(this.progressNotification());
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
  readTracker.trackReadings(12);
  readTracker.trackReadings(9);