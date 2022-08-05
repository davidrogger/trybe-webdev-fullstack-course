import { ConnectionTimeoutError } from "redis";

export interface COnnector {
  getCount(token: string): number | Promise<number>;

  incrementCount(token: string): void;

  closeCOnnection(): void;

  clearCount(token: string): void;

  firstCount(token: string): void;
}


export interface ConnectorConstructor {
  host: string;
  port: number;
  database?: string;
  user?: string;
  password?: string;
}