import React, {FC, useEffect, useState} from 'react'
import {styles} from '../../../app/styles/style'
import { useUpdatePasswordMutation } from '@/redux/features/user/userApi'
import toast from 'react-hot-toast'

type Props = {}

const ChangePassword = (props: Props) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [updatePassword, {isSuccess, error}] = useUpdatePasswordMutation()
   
    const passwordChangeHandler = async (e: any) => {

        e.preventDefault()
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match")
           
        } else {
            await updatePassword({
                oldPassword,
                newPassword
            })
        }
    }

    useEffect(() => {
     if(isSuccess) {
        toast.success("Password changed successfully")
     }

     if (error) {
        if ("data" in error) {
            const errorData = error as any
            toast.error(errorData.data.message)
        } 
     }
    }, [isSuccess, error])
    


  return (
    <div className='w-full pl-8 px-2 800px:pl-1'>

          <h1 className='block text-[25px] font-[500] font-Poppins text-center 800px:text-[30px] text-gray-600 dark:text-gray-400'>Change Password</h1>

          <div className='w-full'>
            <form
             aria-aria-required
             onSubmit={passwordChangeHandler}
             className="flex flex-col items-center"
             >
               <div className='w-[100%] 800px:w-[60%] mt-5'>
                 <label className='block pb-2 text-gray-600 dark:text-gray-400'>
                  Enter your old password
                 </label>

                 <input 
                  type="password"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-1`}
                  required
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                 />
               </div>

               <div className='w-[100%] 800px:w-[60%] mt-2'>
                 <label className='block pb-2 text-gray-600 dark:text-gray-400'>
                  Enter your new password
                 </label>

                 <input 
                  type="password"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-1`}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                 />
               </div>

               <div className='w-[100%] 800px:w-[60%] mt-2'>
                 <label className='block pb-2 text-gray-600 dark:text-gray-400'>
                  Confirm your new password
                 </label>

                 <input 
                  type="password"
                  className={`${styles.input} !w-[95%] mb-4 800px:mb-1`}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                 />
               </div>
               <input 
                type="submit"
                value="Save Changes"
                required
                className={`w-full 800px:w-[150px] h-[50px] border border-[#37a39a] text-center text-[#37a39a] rounded-[5px] mt-8 cursor-pointer  outline-none transition duration-300 hover:bg-[#37a39a] hover:text-[#ffffff]  `}
               />
            </form>
          </div>
    </div>
    
  )
}

export default ChangePassword