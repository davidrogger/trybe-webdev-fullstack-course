// eslint-disable-next-line import/extensions
import Notificator from './Notificator';

class ConsoleNotification implements Notificator {
  constructor(private $name: string) {
    this.name = $name;
  }

  public get name(): string {
    return this.$name;
  }

  public set name(value: string) {
    this.$name = value;
  }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}

export default ConsoleNotification;