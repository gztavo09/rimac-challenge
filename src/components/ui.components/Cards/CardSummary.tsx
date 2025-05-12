import React from 'react';
import type { Plan } from '../../../types';
import { IconUsers } from '../../../components/icons.components';

interface Props {
  name: string | null,
  lastName: string | null,
  plan: Plan | null
}


export const CardSummary:React.FC<Props> = ({name, lastName, plan}) => {
  return (
    <>
		<div className=' w-full rounded-3xl min-h-1 px-8 py-6 card--box-shadow h-full flex flex-col justify-betwee mx-auto
		'>
			<p className='text-[10px] uppercase font-bold mb-2'>Precios calculados para:</p>
			<div className='w-full border-solid border-b-[1px] border-violet pb-4 mb-4 flex items-center gap-3'>
				<IconUsers/>
				<strong>{name} {lastName}</strong>
			</div>
			<div className='text-[14px] flex flex-col items-start gap-4'>
				<div className='flex flex-col gap-1'>
					<b className='text-[16px]'>Responsable de pago</b>
					<span className='text-[14px]'>DNI: 44488888</span>
					<span className='text-[14px]'>Celular: 5130216147</span>
				</div>
				<div className='flex flex-col gap-1'>
					<b className='text-[16px]'>Plan elegido</b>
					<span className='text-[14px]'>{plan?.name}</span>
					<span className='text-[14px]'>Costo del Plan: ${plan?.price} al mes</span>
				</div>
			</div>
		</div>
	</>
  )
}
