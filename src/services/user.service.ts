import { axiosInstance } from './api';
import type { User } from '../types';

export const fetchUser = async (): Promise<User> => {
    const response = await axiosInstance.get<User>('user.json');
    return response.data;
};
