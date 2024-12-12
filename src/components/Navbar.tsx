"use client";
import Image from 'next/image'
import Link from 'next/link'
import logoTitle from '@/assets/images/logoTitle.png'





// constant styles
const TbtnIonstyle = "w-[26.91px] h-[3.84px] bg-black rounded-full leading-none"

const logo = 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1729911544/fulllogo_full_green_1_gg1urs.png'

// returned JSX.Elements
const Navbar = ({  }) => {
    return (
        <header className='pt-[35.17px] pl-[90] fixed top-0 left-0 flex justify-between relative'>
            <Link href='/'>
                <div className={`logo-header flex gap-[8px] items-center`}>
                    <div className={`logo w-[35.05px] xl:w-[35.53px]`}>
                        <Image src={logo} width={250} height={250} alt='logo-image' />
                    </div>
                    <div className={`logo-title w-[122.94px] xl:w-[145.37px]`}>
                        <Image src={logoTitle} width={100} height={100} alt='logoTItle' />
                    </div>
                </div>
            </Link>

           


        </header>
    )
}

export default Navbar;