"use client"
import * as motion from "framer-motion/client"
import Image from "next/image"
import Apple from "@/assets/icons/Apple.svg"
import Andriod from '@/assets/icons/Andriod.svg'
import nigeria from '@/assets/images/nigeria.svg'
import WaitListTag from '@/assets/images/waitlist-tag.png'
import dashedArrow from '@/assets/images/dashedArrow.svg'
import logoTitle from '@/assets/images/logoTitle.png'
import Modal from "@/components/Modal"
import { useEffect, useState } from "react"
import axios from "@/utils/axios";


// constant Styles
const icon1Styles = "w-[34.8px] h-[34.8px] flex justify-center items-center rounded-[3.63px] border-[0.36px] border-[----foreground-green]"
const bgImg = "bg-bgImage bg-cover bg-center h-screen"
const logo = 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1729911544/fulllogo_full_green_1_gg1urs.png'

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("waitlist")
        .then((res)=>{
          console.log(res)
          setCount(res.data.flength)
        }).catch(()=>{
      
        })
          
      }, [])
    return (
        <div className={`${bgImg} relative overflow-x-hidden overflow-y-hidden`}>
                        {showModal && <Modal onClose={() => setShowModal(false)} />}

            {/* <Navbar/> */}
            <div className={`logo-header flex gap-[8px] items-center fixed top-10 left-20`}>
                    <div className={`logo w-[35.05px] xl:w-[35.53px]`}>
                        <Image src={logo} width={250} height={250} alt='logo-image' />
                    </div>
                    <div className={`logo-title w-[122.94px] xl:w-[145.37px]`}>
                        <Image src={logoTitle} width={100} height={100} alt='logoTItle' />
                    </div>
                </div>

            <section className="hero-section flex flex-col lg:flex-row gap-[34px] lg:items-center ml-16">
                <motion.div initial={{ opacity: 0, scale: 0.5 }}    
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-title pl-[--padding-x] pr-[--padding-x] flex-1">
                   

                    <div>
                        <p className="text-black text-[15px] mt-20  font-semibold mb-5">Do you want to...</p>
                        <h1 className="text-black text-[35px] lg:text-[58px] leading-[52.5px] lg:leading-[87px] font-semibold mb-5">
                            <div>Simplify <span className="text-[--foreground-orange]">All </span></div>
                            <div>Your Bulk Sales</div>
                            <div>& Purchases</div>
                        </h1>

                        <p className="text-base lg:text-lg mb-8 max-w-[475.62px]">Are you frustrated by the lack of reliable information on essential services in your area? We tackle these challenges head-on, providing a seamless experience for both vendors and consumers.</p>
<div className="flex space-x-5">
                    <div className={`text-[20.05px] border-4 border-[#FFA800] leading-[19.58px] px-[22px] py-[13px] rounded-[19.94px] hover:shadow-lg text-white bg-[--icon-green] w-fit px-10 transition-all duration-200`} onClick={() => setShowModal(true)}>Join the waitlist</div>
                    <div className={`text-[20.05px] leading-[19.58px] px-[20px] py-[13px] rounded-[19.94px] hover:shadow-lg text-[--icon-green] bg-white w-fit px-10 transition-all duration-200`}><span className="font-extrabold text-[25px] px-5"> {count}</span> have joined Naijazone!</div>

</div>

                    </div>
                    <div className="flex md:gap-[36.97px] pt-10 justify-between md:justify-start mb-[25.57px] lg:mb-0">
                        <h2 className="flex items-center gap-2 text-black text-sm font-normal">Available on App Stores soon
                            <span className={icon1Styles}><Image src={Apple} alt="apple icon" className="w-[19.58px] object-cover" /></span>
                            <span className={icon1Styles}><Image src={Andriod} alt="andriod icon" className="w-[19.58px] object-cover" /></span>
                        </h2>
                        
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-image flex-[1.5]">
                    <div className="nigeria-img">
                        <Image src={nigeria} alt="nigeria" className={`w-full object-cover`} />
                    </div>
                    <div className="iPhone16-img -mt-[80%] lg:-mt-[50%] xl:-mt-[81%] overflow-hidden">
                        <Image src={WaitListTag} className={`w-full object-cover h-screen `} alt="Waitlist" />
                    </div>
                </motion.div>
                
            </section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="dashedArrow absolute -left-0 bottom-0 w-[128.68px] lg:w-[433.21px] -translate-x-1/3 md:-translate-x-0 lg:translate-x-[60%] -translate-y-full lg:-translate-y-1/2">
                <Image src={dashedArrow} alt="dashed arrow" className={`object-cover`} />
            </motion.div>
        </div>
    )
}
export default Home