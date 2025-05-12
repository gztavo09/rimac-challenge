import React, { useEffect, useState } from 'react';
import { BackStep } from './BackStep';
import * as Progress from '@radix-ui/react-progress';

interface StepProgressProps {
  step: number,
  backLogin: () => void,
  controlStep: (value:number) => void
}

interface CircleNumberProps {
  number: number;
  isActive: boolean;
}

interface StepperStepProps {
  number: number;
  label: string;
  step: number;
}

export const StepProgress = ({step, backLogin, controlStep}: StepProgressProps) => {
  	const [progress, setProgress] = useState(4);

	useEffect(() => {
		setProgress(step === 1 ? 4 : step * 50);
	}, [step]);

  return (
     <>
      {/* MOBILE PROGRESS */}
      <div className="flex md:hidden justify-center items-center w-full py-6 px-4 border-b border-purple text-[1rem] transition">
        <BackStep backLogin={backLogin} controlStep={controlStep} step={step} />
        <p className="mx-3 text-[0.75em] font-bold w-fit">Paso {step} de 2</p>
        <Progress.Root
          className="relative overflow-hidden bg-purple rounded-full w-full h-[8px] flex-1"
          style={{ transform: 'translateZ(0)' }}
          value={progress}
        >
          <Progress.Indicator
            className="bg-purple-3 rounded-xl w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
      </div>

      {/* DESKTOP STEPPER */}
      <div className="hidden md:flex bg-purple-4 h-[64px] items-center justify-center gap-3 w-full">
        <StepperStep label="Planes y coberturas" step={step} number={1} />
        <div className={`w-[32px] border-b-2 border-dashed ${step === 1 ? 'border-purple-3' : 'border-purple'}`} />
        <StepperStep label="Resumen" step={step} number={2} />
      </div>
    </>
  )
}

const StepperStep = ({ number, label, step }: StepperStepProps) => (
  <div className="flex gap-4 items-center">
    <CircleNumber number={number} isActive={step === number} />
    <span className={`${step === number ? 'text-black font-bold' : 'text-purple'}`}>{label}</span>
  </div>
);

const CircleNumber = ({ number, isActive }: CircleNumberProps) => (
  <div
    className={`text-[0.75em] size-[24px] rounded-full flex items-center justify-center border 
      ${isActive ? 'bg-purple-3 border-purple3 text-white' : 'bg-transparent border-purple text-purple'}
    `}
  >
    {number}
  </div>
);