import Image from "next/image";
import Container from "./Container";
import Flex from "./Flex";
import Abouimg from "@/public/Img/ab.png";
import midImge from "@/public/Img/fst.png";
import secImge from "@/public/Img/sec.png";
import thrdImge from "@/public/Img/thrd.png";
import fourImge from "@/public/Img/four.png";
import { GoNorthStar } from "react-icons/go";


export default function About() {
  return (
    <section className=" bg-[#070707] mt-[-10px] pb-36">
      <Container>
        <Flex className={` justify-between pt-12 items-end  md:flex-row flex-col gap-y-8`}>
          <Image src={Abouimg} alt="img" />
         
          <button className=" font-black text-[#E8E8E8] text-[12px] leading-4 tracking-[1px] px-5 py-[13px] border border-[#E8E8E8]  rounded-[100px]  inline-block">
            Nous contacter
          </button>
        </Flex>
        <main className=" mt-[74px]">
          <Flex className={` items-center  justify-center flex-col lg:flex-row flex-wrap lg:justify-between gap-y-[72px]`}>
            <div className="lg:w-[49%] md:w-[80%] w-[95%]">
              <Image src={midImge} alt="mid"/>
              <div className=" flex items-center gap-3 mt-3 ">
              <GoNorthStar className=" text-[#E8E8E8]" />
                <h3 className=" font-black text-[18px] text-[#E8E8E8] ">Sacré Armand</h3>
              </div>
              <div className=" flex items-center flex-wrap gap-2 mt-3">
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Copywriting</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie éditoriale</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Brand content</h5>
              </div>
            </div>
            <div className=" lg:w-[49%] md:w-[80%] w-[95%]">
              <Image src={secImge} alt="mid"/>
              <div className=" flex items-center gap-3 mt-3 ">
              <GoNorthStar className=" text-[#E8E8E8]" />
                <h3 className=" font-black text-[18px] text-[#E8E8E8] ">Smoteo</h3>
              </div>
              <div className=" flex items-center flex-wrap gap-2 mt-3">
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie de marque</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Copywriting</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Design</h5>
              </div>
            </div>
            <div className="lg:w-[49%] md:w-[80%] w-[95%]">
              <Image src={thrdImge} alt="mid"/>
              <div className=" flex items-center gap-3 mt-3 ">
              <GoNorthStar className=" text-[#E8E8E8]" />
                <h3 className=" font-black text-[18px] text-[#E8E8E8] ">Niir</h3>
              </div>
              <div className=" flex items-center gap-2 mt-3 flex-wrap">
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Communication</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie de marque</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie éditoriale</h5>
              </div>
            </div>
            <div className="lg:w-[49%] md:w-[80%] w-[95%]">
              <Image src={fourImge} alt="mid"/>
              <div className=" flex items-center gap-3 mt-3 ">
              <GoNorthStar className=" text-[#E8E8E8]" />
                <h3 className=" font-black text-[18px] text-[#E8E8E8] ">Yokitup</h3>
              </div>
              <div className=" flex items-center flex-wrap gap-2 mt-3">
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie éditoriale</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Stratégie de marque</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Design</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Copywriting</h5>
                <h5 className=" bg-[#E8E8E8] inline-block px-2 py-1 text-[12px] leading-4 rounded-sm">Brand content</h5>
              </div>
            </div>
          </Flex>
        </main>
      </Container>
    </section>
  );
}
