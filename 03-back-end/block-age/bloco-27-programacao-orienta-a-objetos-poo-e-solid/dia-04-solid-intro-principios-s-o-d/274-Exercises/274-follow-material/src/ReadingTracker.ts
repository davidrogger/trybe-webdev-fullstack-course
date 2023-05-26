/* eslint-disable import/extensions */
import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;

  constructor(readingGoal: number, email: string) {
    this.notificator = new EmailNotification(email);
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    this.progressNotification();
  }

  progressNotification(): void {
    switch (true) {
      case this.booksRead >= this.readingGoal:
        this.notificator.sendNotification('Congratulations! You\'ve reached your reading goal!');
        break;
      default:
        this.notificator.sendNotification('There are still some books to go!');
    }
  }
}

const readTracker = new ReadingTracker(20, 'email@mail');
  readTracker.trackReadings(12);
  readTracker.trackReadings(9);