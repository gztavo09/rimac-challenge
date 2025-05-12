import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Plan } from '../types';
import { filterAndFormatPlans } from '../utils/filterAndFormatPlans';

interface CotizacionState {
  user: User;
  planes: Plan[];
  planesFiltrados: Plan[];
  setUser: (user: User) => void;
  setPlanes: (planes: Plan[]) => void;
  getPlanesFiltrados: (optionSelected: 1 | 2) => void;
  reset: () => void;
}

export const useCotizacionStore = create<CotizacionState>()(
  persist(
    (set, get) => ({
      user: {
        name: "",
        lastName: "",
        birthDay: ""
      },
      planes: [],
      planesFiltrados: [],
      setUser: (user) => set({ user }),
      setPlanes: (planes) => set({ planes }),
      getPlanesFiltrados: (optionSelected) => {
        const { user, planes } = get();

        if (!user?.birthDay || planes.length === 0) {
          set({ planesFiltrados: [] });
          return;
        }

        const filtrados = filterAndFormatPlans(planes, user.birthDay, optionSelected);
        set({ planesFiltrados: filtrados });
      },
      reset: () => set({ user: undefined, planes: [] }),
    }),
    {
      name: 'cotizacion-store',
    }
  )
);
