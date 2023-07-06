import { getData } from './utils/fetchClient';
import { User } from './types/User';

export const getUsers = () => getData<User[]>('users');
