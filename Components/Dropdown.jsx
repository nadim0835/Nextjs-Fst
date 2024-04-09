"use client";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Dropdown() {
  const [dropdown, setdropdown] = useState(false);
 
  //
  return (
    <div>
      <div
        onClick={() => setdropdown(!dropdown)}
        className=" h-[44px] w-[44px] border border-[#EDF738] rounded-[50%]  flex justify-center items-center cursor-pointer "
      >
        <HiOutlineMenuAlt4 className=" text-[#EDF738] text-[16px]" />
      </div>
      {
        <div
          className={`absolute lg:right-[8rem] right-2 duration-300 cursor-pointer   ${
            dropdown ? "lg:top-[7rem] top-[5rem]" : "top-[-590px]"
          } bg-[#070707] lg:bg-transparent  z-50`}
        >
          <ul>
            <li className=" text-[15px] leading-[28px] py-[13px] px-4 border border-[#EDF738] w-[272px]   text-[#EDF738] text-right ">
              Home{" "}
            </li>
            <li className="  text-[15px] leading-[28px] py-[13px] px-4 border border-[#EDF738] w-[272px]  text-[#EDF738] text-right ">
              About{" "}
            </li>
            <li className=" text-[15px] leading-[28px] py-[13px] px-4 border border-[#EDF738] w-[272px]  text-[#EDF738] text-right ">
              Contact{" "}
            </li>
          </ul>
        </div>
      }
    </div>
  );
}
