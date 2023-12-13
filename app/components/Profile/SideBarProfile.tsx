import React, { FC } from "react";
import Image from "next/image";
import avatarDefault from "../../../public/assests/avatar.png";
import {RiLockPasswordLine} from 'react-icons/ri'
import {SiCoursera} from 'react-icons/si'
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logoutHandler: any;
};

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logoutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1
            ? "dark:bg-slate-800 bg-[#37a39a] rounded-t-lg"
            : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          // src={user?.avatar?.url || avatar}
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
          }
          alt=""
          width={20}
          height={20}
          // Add height property
          className="rounded-full cursor-pointer w-[22px] h-[22px]"
        />

        <h5 className="pl-4 800px:block hidden text-gray-800 dark:text-gray-200 text-[11px] font-Josefin font-semibold">
          {`${user.name}'s Account`}
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-2 py-3 cursor-pointer ${
          active === 2
            ? "dark:bg-slate-800 bg-[#37a39a] rounded-r-full text-white"
            : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} color="rgb(229 231 235 / var(--tw-text-opacity))"  className="mt-4 dark:text-gray-900 " />  
        <h5 className="pl-4 800px:block hidden text-gray-800 mt-4 dark:text-gray-200 text-[11px] font-Josefin font-semibold">Change Password</h5> 

      </div>

      <div
        className={`w-full flex items-center px-2 py-3 cursor-pointer ${
          active === 3
            ? "dark:bg-slate-800 bg-[#37a39a] rounded-r-full text-white"
            : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} color="rgb(229 231 235 / var(--tw-text-opacity))"  className="mt-4 dark:text-gray-900 " />  
        <h5 className="pl-4 800px:block hidden text-gray-800 mt-4 dark:text-gray-200 text-[11px] font-Josefin font-semibold">Enrolled Courses</h5> 

      </div>

     {
      user.role === "admin" && (
        <Link
        className={`w-full flex items-center px-2 py-3 cursor-pointer ${
          active === 6
            ? "dark:bg-slate-800 bg-[#37a39a] rounded-r-full text-white"
            : "bg-transparent"
        }`}
        href={"/admin"}
      >
        <MdOutlineAdminPanelSettings size={20} color="rgb(229 231 235 / var(--tw-text-opacity))"  className="mt-4 dark:text-gray-900 " />  
        <h5 className="pl-4 800px:block hidden text-gray-800 mt-4 dark:text-gray-200 text-[11px] font-Josefin font-semibold">Admin Dashboard</h5> 

      </Link>
      )
     }

      <div
        className={`w-full flex items-center px-2 py-3 cursor-pointer ${
          active === 4
            ? "dark:bg-slate-800 bg-[#37a39a] rounded-r-full text-white"
            : "bg-transparent"
        }`}
        onClick={() => logoutHandler()}
      >
        <AiOutlineLogout size={20} color="rgb(229 231 235 / var(--tw-text-opacity))"  className="mt-4 dark:text-gray-900 " />  
        <h5 className="pl-4 800px:block hidden text-gray-800 mt-4 dark:text-gray-200 text-[11px] font-Josefin font-semibold">Logout</h5> 

      </div>
    </div>
  );
};

export default SideBarProfile;
