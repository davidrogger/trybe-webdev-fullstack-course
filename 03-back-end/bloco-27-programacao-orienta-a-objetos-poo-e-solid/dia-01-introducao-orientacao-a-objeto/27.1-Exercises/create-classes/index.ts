class Tv {
  private brand: string
  private size: string
  private resolution: string
  private connections: string[]
  private _connectedTo?: string

  constructor(
    brand: string,
    size: string,
    resolution: string,
    connections: string[]
    ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(`TV: ${this.brand} ${this.size}, resolution ${this.resolution}`);
    console.log(this.connections);
  }

  setter(connected: string): void {
    if (this.connections.some((connection: string) => connection === connected)) {
      this._connectedTo = connected
      console.log(`Connected to ${this._connectedTo}`);
    } else {
      console.log('Sorry connection unavailable!');
    }
  }
}

const tvSamsung = new Tv('Samsung', '55"', '4k', ['HDMI', 'Ethernet']);

tvSamsung.turnOn();

tvSamsung.setter('HDMI')