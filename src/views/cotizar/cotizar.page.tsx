import React from 'react'
import './cotizar.style.scss';
import ImageFamily from '@/assets/rimac_family.png'
import { CotizarForm } from './cotizar.form';

const CotizarPage = () => {
    return (
		<>
			<div className="">
				<div className="cotizar__blur cotizar__blur--green cotizar__blur--right"></div>
				<div className="cotizar__blur cotizar__blur--purple cotizar__blur--left"></div>
			
				<div className=" w-full max-w-[976px] justify-center items-center flex flex-col md:flex-row px-6 m-auto transition mt-8">
					<div className="w-full md:w-1/2">
						<img src={ImageFamily} className='hidden md:block' alt='Rimac family' />
					</div>
					<div className="w-full md:w-1/2 z-10 relative">
						<div className='flex flex-col'>
							<div className='flex flex-col max-w-[352px] w-full m-auto'>
								<div className='flex flex-row'>
									<div className='flex flex-col gap-4'>
										<p className='cotizar__tag--background inline-block w-fit capitalize font-bold text-xs md:text-sm px-2 py-1 rounded-[4px]'>Seguro Salud Flexible</p>
										<h1 className='cotizar__title'>Creado para ti y tu familia</h1>
									</div>
									<img src={ImageFamily} className='block md:hidden resize w-[136px]' alt='Rimac family' />
								</div>
								<div className='w-full h-[1px] bg-[#CCD1EE] my-6'></div>
								<p className='text-sm mb-6 pr-9'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
								<CotizarForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
        
    )
}

export default CotizarPage