import LogoAlter from '@/assets/logo_alter.svg'

export const Footer = () => {
    return (
        <footer className="mt-24 flex justify-center py-5 px-8 text-xs text-center bg-black-main relative z-10">
            <div className='flex flex-col md:flex-row w-full max-w-[1120px]  justify-between items-center'>
                <img src={LogoAlter} alt='rimac_alter' />
                <p className='text-[#F8F9FF] text-sm'>© 2025 RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>
    )
}
