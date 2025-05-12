import React from 'react'
import { IconCheck } from '@/components/icons.components'

interface Props {
  icon: string,
  title: string,
  description: string,
  value: number,
  selectecTypePlan: (value:number) => void;
  selectedOption: number | null
}

export const CardOption:React.FC<Props> = ({icon, title, description, value, selectecTypePlan, selectedOption}) => {
  return (
    <>
      <div className={`text-[1rem] ease duration-200 rounded-3xl relative card--box-shadow min-h-1 px-4 py-8 cursor-pointer
        w-full md:max-w-[256px] border-[3px] border-transparent
        ${selectedOption=== value ? ' !border-black-main' : ''}
      `}
        onClick={()=> selectecTypePlan(value)}
      >
        <div className={`absolute right-[1em] top-[1em] size-[24px] rounded-full border-solid border-[1px] border-purple flex
        items-center justify-center
            ${selectedOption=== value ? 'bg-[#389E0D] border-[#389E0D]' : null}
          `}>
          <IconCheck color={selectedOption=== value ? 'white' :'transparent'}/>
        </div>
        <div className='flex gap-2 mb-2 flex-row
          md:flex-col items-start
        '>
          <img src={icon} alt={title} className='size-[32px] md:size-[48px]'/>
          <h6 className='font-bold text-xl'>
            {title}
          </h6>
        </div>
        <p className='text-xs'>{description}</p>
      </div>
    </>
  )
}
