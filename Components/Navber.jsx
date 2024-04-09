import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "next/image";
import Logo from "@/public/Img/logo.png";
import Dropdown from "./Dropdown";

export default function Navber() {
  return (
    <nav className=" pb-2 bg-[#070707]">
      <Container>
        <Flex className={` justify-between  items-center pt-6  lg:pt-[52px]`}>
          <Image src={Logo} alt="logo" placeholder="blur" />
          <Dropdown />
        </Flex>
      </Container>
    </nav>
  );
}
