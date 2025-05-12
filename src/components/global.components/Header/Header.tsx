import React from 'react'
import Logo from '../../../assets/logo.svg'
import Phone from '../../../assets/phone.svg'

export const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 px-8">
        <div className='w-full max-w-[1120px] flex justify-between items-center'>
            <a href='#'><img src={Logo} alt='Rimac Cotiza' /></a>
            <div className="flex items-center gap-2 font-semibold text-text-main">
                <p className='text-xs mr-6 hidden md:block'>¡Compra por este medio!</p>
                <img src={Phone} alt='Rimac Contacto' />
                <p className='text-xl'>(01) 411 6001</p>
            </div>
        </div>
    </header>
    )
}
