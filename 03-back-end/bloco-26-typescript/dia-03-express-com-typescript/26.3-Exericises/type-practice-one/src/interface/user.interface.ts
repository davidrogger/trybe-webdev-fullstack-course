export default interface IUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
};

export interface InewUser {
  name: string;
  email: string;
  password: string;
}