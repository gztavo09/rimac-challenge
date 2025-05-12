import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StepProgress, BackStep } from '../../components/ui.components/Steps';
import { CardOption, CardSummary } from '../../components/ui.components/Cards';
import { ListPlans } from './planes.list';
import { useCotizacionStore } from '../../store/cotizacion.store';
import type { Plan } from '../../types';

const PlanesPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const { user  } = useCotizacionStore();
  const navigate = useNavigate();


  const handleBackLogin = () => navigate('/');

  const handleOptionSelect = (value: number) => {
    setSelectedOption(value);
  };

  const handleControlStep = (value: number) => {
    setStep(value as 1 | 2); // Aseguramos que el valor sea 1 o 2
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setStep(2);
  };

  const options = [
    {
      icon: '/img/card-option-1.webp',
      title: 'Para mí',
      description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
      value: 1,
    },
    {
      icon: '/img/card-option-2.webp',
      title: 'Para alguien más',
      description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
      value: 2,
    },
  ];

  return (
    <>
      <StepProgress backLogin={handleBackLogin} controlStep={handleControlStep} step={step} />
      <div className="w-full max-w-[976px] justify-center items-center flex flex-col px-6 m-auto transition mt-8">
      <div className="hidden md:flex mb-8 w-full  flex-row items-start">
        <BackStep backLogin={handleBackLogin} controlStep={handleControlStep} step={step} />
      </div>
      {step === 1 && (
        <section className="w-full  mx-auto transition">
          <h4 className="text-[28px] md:text-[40px] font-bold leading-tight mb-3 text-left md:text-center">
            {user.name} ¿Para quién deseas <br /> cotizar?
          </h4>
          <p className="text-left md:text-center mb-8">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>

          <div className="flex gap-6 flex-col md:flex-row justify-center mb-8">
            {options.map((item) => (
              <CardOption
                key={item.value}
                {...item}
                selectedOption={selectedOption}
                selectecTypePlan={handleOptionSelect}
              />
            ))}
          </div>
          <ListPlans
            selectedOption={selectedOption}
            onSelectPlan={handlePlanSelect}
          />
        </section>
      )}

      {/* Paso 2: Resumen */}
      {step === 2 && selectedPlan && (
        <>
          <h6 className="font-bold mb-8 text-[32px] md:text-[40px]">Resumen del seguro</h6>
          <CardSummary name={user.name} lastName={user.lastName} plan={selectedPlan} />
        </>
      )}

      </div>
    </>
  );
};

export default PlanesPage;
