class Tv {
  brand: string
  size: string
  resolution: string
  connections: string[]

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
}

const tvSamsung = new Tv('Samsung', '55"', '4k', ['HDMI', 'Ethernet']);

tvSamsung.turnOn();