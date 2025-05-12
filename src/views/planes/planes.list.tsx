import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { CardPlan } from '../../components/ui.components/Cards';
import type { Plan } from '../../types';
import { usePlans } from '../../hooks';

import 'react-multi-carousel/lib/styles.css';
import { useCotizacionStore } from '../../store/cotizacion.store';

interface Props {
  onSelectPlan: (plan: Plan) => void;
  selectedOption: number;
}

export const ListPlans = ({ onSelectPlan, selectedOption }: Props) => {

  const { getPlanesFiltrados, planesFiltrados } = useCotizacionStore();
  const { loading } = usePlans();

  useEffect(() => {
    getPlanesFiltrados(selectedOption)
  }, [selectedOption])

  
  // const responsive = planesFiltrados.length > 1 ? carouselConfig : carouselConfigLow;

  return (
    <>
      {loading ? (
        <div className="text-center mt-8">Cargando planes...</div>
      ) : planesFiltrados.length === 0 ? (
        <div className="text-center mt-8">No tienes planes disponibles en este momento</div>
      ) : (
        <Carousel
          arrows
          responsive={carouselConfig}
          infinite={false}
          itemClass="px-2 py-6 mr-4"
          dotListClass="mb-[-4px]"
          renderArrowsWhenDisabled
          containerClass="justify-start md:justify-center"
          centerMode={false}
          removeArrowOnDeviceType={
            planesFiltrados.length <= 2
              ? ['mobile', 'tablet', 'tabletLG', 'desktop', 'desktopLarge']
              : []
          }
        >
          {planesFiltrados.map((plan: Plan) => (
            <CardPlan key={plan.name} data={plan} onPlanSelected={onSelectPlan} />
          ))}
        </Carousel>
      )}
    </>
  );
};

// Configuraciones de carrusel
const carouselConfig = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3.3 },
  mobile: { breakpoint: { max: 1024, min: 0 }, items: 1 },
};
