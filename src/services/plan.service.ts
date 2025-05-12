import { axiosInstance } from './api';
import type { Plan } from '../types';

export const fetchPlanes = async (): Promise<Plan[]> => {
    const response = await axiosInstance.get<{ list: Plan[] }>('plans.json');
    return response.data.list;
};
