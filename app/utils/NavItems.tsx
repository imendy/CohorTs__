"use client";

import Link from "next/link";
import React, { FC, useState } from "react";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },

  {
    name: "Courses",
    url: "/courses",
  },

  {
    name: "About",
    url: "/about",
  },

  {
    name: "Policy",
    url: "/policy",
  },

  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className=
                {`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[#37a39a] font-[500]"
                    : "dark:text-white text-black"
                } text-[11px] font-[400] font-Poppins cursor-pointer duration-300 hover:text-[#37a39a] dark:hover:text-[#37a39a] px-4`}
                >
                {i.name}
              </span>
            </Link>
          ))}
      </div>

      {isMobile && (
        <div className="800px:hidden mt-5">
             
          
            {navItemsData &&
              navItemsData.map((i, index) => (
                <Link href="/" key={index} passHref>
                  <span
                    className=
                    {`${
                      activeItem === index
                        ? "dark:text-[#37a39a] text-[#37a39a] font-[500] "
                        : "dark:text-white text-black"
                    } block py-6 text-[18px] font-[400] font-Poppins cursor-pointer duration-300 hover:text-[#37a39a] dark:hover:text-[#37a39a] px-4 `}
                    >
                    {i.name}
                  </span>
                </Link>
              ))}
         
        </div>
      )}
    </>
  );
};

export default NavItems;
