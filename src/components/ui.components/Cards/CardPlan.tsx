import type { Plan } from '../../../types'
import { IconPlanHouse } from '../../../components/icons.components'

interface Props {
  data: Plan,
  onPlanSelected: (data: Plan) => void;
}

export const CardPlan = ({data, onPlanSelected}: Props) => {
  return (
    <>
      <div className='card--box-shadow ease duration-200 w-[288px] rounded-xl min-h-1 cursor-pointer px-8 py-10 relative h-full flex flex-col justify-betwee'
        onClick={() => onPlanSelected(data)}
      > 
        <div>
          <div className='flex justify-between gap-4'>
            <h3 className='text-2xl font-bold
            '>
              {data.name}
            </h3>
            <IconPlanHouse/>
          </div>
          <div className='pb-5 mb-5 border-solid border-b-[1px] border-[#D7DBF5] leading-[1.3] mt-6'>
            <p className='text-xs w-full uppercase font-bold text-purple-2 mb-1'>
              Costo del plan
            </p>
            <b className='text-xl'>${data.price} al mes</b>
          </div>
          
          <ul className='list-disc pl-4 flex flex-col gap-4'>
            {data.description.map((item: any, key: any) => (
              <li className='text-balance' key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <button className='bg-red text-white rounded-[28px] w-full h-[48px] mt-8'>
          Seleccionar plan
        </button>
      </div>
    </>
  )
}
