import midimg from "@/public/Img/mid.png";
import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import Logo from "@/public/Img/logo.png";
import Sav from "@/public/Img/svg.png";
import Dropdown from "./Dropdown";

export default function Banner() {
  return (
    <section className=" pb-[100px] bg-[#070707] transform translate-y-[-8px]">
      <Container>
        <main className=" relative">
          <Flex
            className={` items-center pt-[70px] lg:pt-[60px] gap-y-20 lg:flex-row flex-col`}
          >
            <div className=" flex gap-12 items-center">
              <p className=" text-[13px] leading-[22px] text-[#EDF738] after:content-['']  after:w-6 after:h-[1px]  after:bg-[#EDF738] relative after:absolute after:transform after:top-[53%] after:translate-y-[-50%] after:translate-x-[50%]">
                act
              </p>
              <p className="text-[13px] leading-[22px] text-[#EDF738]">
                together
              </p>
            </div>
            <Image src={midimg} alt="midiamge" />
            <div className=" flex  items-center gap-2">
              <p className=" text-[13px] leading-[22px] text-[#EDF738]">
                create
              </p>
              <div className=" h-[1px] bg-[#EDF738] w-6 ">

              </div>
              <p className=" whitespace-nowrap	 text-[13px] leading-[22px] text-[#EDF738]">
                your story
              </p>
              <Image
                className=" lg:ml-3  lg:static absolute right-0 bottom-0 lg:mt-[8rem]"
                src={Sav}
                alt="sav"
              />
            </div>
          </Flex>
          <div className=" lg:absolute right-[25%] mt-[3.5rem] lg:mt-0 lg:ml-0 bottom-[-4.75rem] ml-[1.75rem]">
            <h5 className=" text-[12px] leading-4 text-[#EDF738]">
              (h muet) \ipɛʁealist\
            </h5>
            <h3 className=" text-[#EDF738] text-[18px] leading-7 w-[200px]">
              Agence spécialisée en stratégie de marque et brand content
            </h3>
          </div>
        </main>
      </Container>
    </section>
  );
}
