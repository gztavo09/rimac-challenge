import { useEffect, useState } from 'react';
import { fetchPlanes } from '../services';
import { useCotizacionStore } from '../store/cotizacion.store';

export const usePlans = () => {
  const [loading, setLoading] = useState(true);
  const {setPlanes} = useCotizacionStore();

  useEffect(() => {
    const loadPlans = async () => {
      try {
        setLoading(true);
        const response = await fetchPlanes();
        if (response) {
          setPlanes(response);
        }
      } catch (error) {
        console.error('Error al obtener planes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, [setPlanes]);

  return { loading };
};
