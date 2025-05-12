import type { Plan } from '../types';
import { getAgeFromBirthDate } from './getAgeFromBirthDate';

export const filterAndFormatPlans = (
  plans: Plan[],
  userBirthDay: string,
  selectedOption: number
): Plan[] => {
    const userAge = getAgeFromBirthDate(userBirthDay);
    const filtered = plans.filter((plan) => plan.age <= userAge);
    if (selectedOption === 2) {
        return filtered.map((plan) => ({
        ...plan,
        price: parseFloat((plan.price * 0.95).toFixed(2)),
        }));
    }

    return filtered;
};
