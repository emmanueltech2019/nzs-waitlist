"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
// import Navbar from "@/components/Navbar"
import Apple from "@/assets/icons/Apple.svg";
import Andriod from "@/assets/icons/Andriod.svg";
import nigeria from "@/assets/images/nigeria.svg";
import WaitListTag from "@/assets/images/waitlist-tag.png";
import playBtn from "@/assets/icons/playBtn.svg";
import Image2 from "@/assets/images/user2.png";
import GetStarted from "@/components/buttons/GetStarted";
import Navbar from "@/components/Navbar";
// import SignIn from "@/components/buttons/SignIn"
// import SignUp from "@/components/buttons/SignUp"
import logoTitle from "@/assets/images/logoTitle.png";
import Modal from "@/components/Modal";
import { useState } from "react";

// constant Styles
const icon1Styles =
  "w-[34.8px] h-[34.8px] flex justify-center items-center rounded-[3.63px] border-[0.36px] border-[----foreground-green] bg-[#F0FFF5]";
const bgImg = "bg-bgImage2 bg-cover bg-center h-screen";
const logo =
  "https://res.cloudinary.com/wise-solution-inc/image/upload/v1729911544/fulllogo_full_green_1_gg1urs.png";
const url2 =
  "https://res.cloudinary.com/wise-solution-inc/image/upload/v1734015423/image_23_no4d5q.png";
const Home = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${bgImg} relative overflow-x-hidden overflow-y-hidden`}>
      {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}

      {/* <Navbar/> */}
      <div
        className={`logo-header flex gap-[8px] items-center fixed top-10 left-20`}
      >
        <div className={`logo w-[35.05px] xl:w-[35.53px]`}>
          <Image src={logo} width={250} height={250} alt="logo-image" />
        </div>
        <div className={`logo-title w-[122.94px] xl:w-[145.37px]`}>
          <Image src={logoTitle} width={100} height={100} alt="logoTItle" />
        </div>
      </div>

      <section className="hero-section flex flex-col lg:flex-row gap-[34px] items-center text-center align-center justify-center  py-20">
        <div
          className={`${bgImg}  overflow-x-hidden overflow-y-hidden flex flex-col space-y-1  text-center mt-10 m-auto w-[50vw]`}
        >
          {/* <Image
            src={url2}
            width={700}
            height={500}
            className="w-screen h-screen"
            alt="logo-image"
          /> */}
          <div className="">
            <Image
              src={Image2}
              width={400}
              height={400}
              className="w-full"
              alt="logo-image"
            />
            <h1 className="text-[55px] mt-10">
              You’ve Joined the{" "}
              <span className="text-[#FFA800]">Waitlist!</span>
            </h1>
            <p className="text-[25px] text-justify	">
              You're now one step closer to enjoying seamless product sales,
              efficient order tracking, and access to essential service
              centers—all in one app. Stay tuned for exclusive updates as we
              prepare to transform your business experience. 🚀
            </p>
            <div
              className={`text-[20.05px] my-5 text-center mx-auto leading-[19.58px] px-[20px] py-[13px] rounded-[19.94px] hover:shadow-lg text-[--icon-green] bg-white w-fit px-10 transition-all duration-200`}
            >
              3.5k+ have joined Naijazone!
            </div>
            <div className="flex md:gap-[36.97px] mx-auto w-fit pt-0 justify-between md:justify-start mb-[25.57px] lg:mb-0">
              <h2 className="flex items-center gap-2 text-black text-sm font-normal">
                Available on App Stores soon
                <span className={icon1Styles}>
                  <Image
                    src={Apple}
                    alt="apple icon"
                    className="w-[19.58px] object-cover"
                  />
                </span>
                <span className={icon1Styles}>
                  <Image
                    src={Andriod}
                    alt="andriod icon"
                    className="w-[19.58px] object-cover"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
