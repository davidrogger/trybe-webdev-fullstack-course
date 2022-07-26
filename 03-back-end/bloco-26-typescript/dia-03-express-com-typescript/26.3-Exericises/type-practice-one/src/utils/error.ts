export default class ErrorCustom extends Error {
  status: number;
  constructor(status: number, message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}