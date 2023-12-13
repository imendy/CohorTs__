import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] ml-8 1000px:top-[unset] 1500px:h-[620px] 1500px:w-[620px] 1000px:h-[520px] 1000px:w-[520px] 1100px:h-[620px] 1100px:w-[620px]  h-[50vh] w-[50vh] hero-animations rounded-full"></div>
      <div className="1000px:w-[50%] flex 1000px:min-h-screen items-center justify-start pt-[70px] 1000px:pt-[0] z-10">
        <Image
          src="/banner-img-1.png"
          width={500}
          height={500}
          alt="r"
          priority
          className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]  1000px:ml-[120px] ml-8"
        />
      </div>
      <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[8px] text-center 1000px:ml-64 mt-[150px]">
        <h2 className="dark:text-white text-[#000000c7] text-[32px] px-3 w-full 1000px:text-[50px] font-[600] font-Josefin py-2 1000px:leading-[75px]">
          Find your perfect <span className="text-[#37a39a]">Cohort</span>
        </h2>
        <br />
        <p className="dark:text-white text-[#000000c7] font-[500] font-Josefin text-[14px]  1500px:!w-[55%] 1100px:!w-[75%] mx-4">
          <span className="text-[#37a39a]">Cohorts</span> is an ELearning
          platform for students to learn and get help from teachers
        </p>
        <br />
        <br />
        <div className="1500px:!w-[55%] 1100px:!w-[75%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses"
            className="bg-transparent border dark:border-none dark:bg-[#575757] pl-3 focus:outline-none outline-none dark:placeholder:text-[#ffffffdd] rounded-[15px] p-2 w-full h-full text-[#000000c7] dark:text-white text-[15px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#37a39a] rounded-r-[10px]">
            <BiSearch className="text-[#ffffff] size={22}" />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:!w-[55%] 1100px:!w-[75%] w-[90%] flex items-center">
        <Image
          src="/client-3.jpg"
          width={40}
          height={40}
          alt="r"
          className="rounded-full"
        />
           <Image
          src="/client-1.jpg"
          width={40}
          height={40}
          alt="r"
          className="rounded-full ml-[-20px]"
        />
            <Image
          src="/client-2.jpg"
          width={40}
          height={40}
          alt="r"
          className="rounded-full ml-[-20px]"
        />
          <p className="dark:text-white text-[#000000c7] ml-3 font-[500] font-Josefin text-[14px] 1000px:pl-3">
            100+ People already trusted us.{" "}
            <Link href={"/courses"} className="text-[#37a39a]">
              View Courses
            </Link>
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
