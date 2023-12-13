"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import avatar from "../../public/assests/avatar.png";
import { useSession } from "next-auth/react";
import { useLogoutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();

  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

  const [logout, setLogout] = useState(false)

  const {} = useLogoutQuery(undefined, {
      skip: !logout ? true : false,
  })

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({
          email: data?.user?.email,
          name: data?.user?.name,
          avatar: data?.user?.image,
        });
      }
    }

    if(data === null) {
      if(isSuccess) {
        toast.success('Login successful!')
      }
     
    }

    if(data === null) {
      setLogout(true)
    }
  }, [data, user]);

  

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 85) {
  //       setActive(true);
  //     } else {
  //       setActive(false);
  //     }
  //   });
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 85) {
          setActive(true);
        } else {
          setActive(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto h-full py-2">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link
                href={"/"}
                className={`text-[18px] font-Poppins font-[600] text-black dark:text-white`}
              >
                Cohor
                <span className="text-[#37a39a]">Ts</span>
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={22}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>

              {user ? (
                <div>
                  <Link href={"/profile"}>
                    <Image
                      // src={user?.avatar?.url || avatar}
                      src={user.avatar ? user.avatar.url : avatar}
                      alt=""
                      width={20}
                      height={20}
                      // Add height property
                      className="rounded-full cursor-pointer w-[22px] h-[22px]"
                      style={{border: activeItem === 5 ? '2px solid #37a39a' : 'none'}}
                    />
                  </Link>
                </div>
              ) : (
                <HiOutlineUserCircle
                  size={22}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {openSidebar && (
          <div
            className="800px:hidden fixed top-0 left-0 w-full dark:bg-[unset] z-[99999] h-screen bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className=" fixed top-0 right-0 w-[70%] bg-white dark:bg-slate-900 dark:bg-opacity-90 z-[999999999] h-screen">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={22}
                className="cursor-pointer dark:text-white text-black ml-5 my-2"
                onClick={() => setOpen(true)}
              />
              <br />
              <br />
              <p className="text-[11.5px] px-2 pl-5 text-black dark:text-white">
                Copyright © 2023 Cohor
                <span className="text-[#37a39a]">Ts,</span> All rights reserved.
              </p>
            </div>
          </div>
        )}
      </div>

      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={Login}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              activeItem={activeItem}
              setRoute={setRoute}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
