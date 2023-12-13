'use client'

import React from 'react'
import Heading from '../utils/Heading'
import { useSelector } from 'react-redux'
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar"
import AdminProtected from '../hooks/adminProtected'
import DashboardHero from "../components/Admin/DashboardHero"

type Props = {}

const page = (props: Props) => {

    const {user} = useSelector((state: any) => state.auth)
  return (
    <div>
       <AdminProtected>
       <Heading 
           title={`${user.name}'s Admin Dashboard - CohorTs`}
           description="Cohorts is an ELearning platform for students to learn and get help from teachers" 
           keywords="Programming, React, Redux, Next, MERN, Machine Learning, Typescript, Javascript, Phython, AI Programming, Graphic Design, Product Design, Project Management" 
           />

           <div className='flex h-[200vh]'>
               <div className="1500px:w-[16%] w-1/5">
                   <AdminSidebar />
               </div>

               <div className="w-[85%]">
                   <DashboardHero />
               </div>
           </div>
       </AdminProtected>
    </div>
  )
}

export default page