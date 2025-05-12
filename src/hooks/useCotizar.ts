import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCotizacionStore } from '@/store/cotizacion.store';
import { fetchUser } from '@/services';
import type { Values } from '@/types/form.types'; // ajusta el import si es necesario
import type { FormikHelpers } from 'formik';

export const useCotizarUser = () => {
  const [loading, setLoading] = useState(false);
  const {setUser} = useCotizacionStore();
  const navigate = useNavigate();

  const handleSubmit = async (
    { resetForm }: FormikHelpers<Values>
  ) => {
    try {
      setLoading(true);
      const user = await fetchUser();
      if (user) {
        setUser(user);
        navigate('/planes');
        resetForm();
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};
