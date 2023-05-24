import jwt from 'jsonwebtoken';
import { IUserToken } from '../interface/token.interface';

export const jwtGenerator = (payload: IUserToken): string => {
  return jwt.sign({ payload }, 'secret');
};

export const jwtVerify = (token: string) => {
  return jwt.verify(token, 'secret');
};
