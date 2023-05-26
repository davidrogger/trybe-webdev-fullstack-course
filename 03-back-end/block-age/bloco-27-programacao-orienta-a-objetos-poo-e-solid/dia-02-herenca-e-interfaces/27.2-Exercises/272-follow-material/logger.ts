interface Logger {
  log(value: string): void;
}

class ConsoleLogger implements Logger{
  log(value: string): void {
    console.log(value);
  }
}

class ConsoleLogger2 implements Logger {
  log(value: string): void {
    console.log('Logger2:' + value);
  }
}

interface Database  {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {};
  save(key: string, value: string): void {
    this.logger.log(`Saving value ${value} into the key ${key}`);
  }
}

const console1 = new ConsoleLogger();
const console2 = new ConsoleLogger2();

const data = new ExampleDatabase();
const data2 = new ExampleDatabase(console2);

data.save('batata', 'frita');