import React, {FC, useEffect, useState} from 'react'
import {styles} from '../../../app/styles/style'
import Image from 'next/image'
import avatarIcon from "../../../public/assests/avatar.png";
import { AiOutlineCamera } from 'react-icons/ai';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import toast from 'react-hot-toast';

type Props = {
    avatar: string | null;
    user: any;
}

const ProfileInfo: FC<Props> = ({avatar, user}) => {
    const [name, setName] = useState(user &&user.name)
    const [updateAvatar, {isSuccess, error}] = useUpdateAvatarMutation()
    const [editProfile, {isSuccess: success, error: updateError}] = useEditProfileMutation()
     const [loadUser, setLoadUser] = useState(false)
    const {} = useLoadUserQuery(undefined, {
        skip: loadUser ? false : true,
    })

    const imageHandler = async (e: any) => {
        
       const fileReader = new FileReader();

       fileReader.onload = () => {
          if(fileReader.readyState === 2) {
            const avatar = fileReader.result
              updateAvatar(
                avatar,
              )
          }
       }
        fileReader.readAsDataURL(e.target.files[0])
    }

       useEffect(() => {
         if (isSuccess || success) {
            setLoadUser(true)
         }

         if (error || updateError) {
            console.log(error)
         }

         if (success)  {
            toast.success("Profile updated successfully")
         }
       }, [isSuccess, error, success, updateError])
       

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (name !== "") {
            await editProfile({
                name: name,
                
                // email: user.email,
            })
            
        }
    }
  return (
    <>
       
   
    <div className='w-full flex justify-center'>
      <div className='relative'>
        <Image 
          src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
          alt='avatar'
          width={120}
          height={120}
          className='w-[90px] h-[90px] rounded-full cursor-pointer object-cover border-[3px] border-[#37a39a]'
        />
        <input 
         type='file'
         name=''
         id='avatar'
         className='hidden'
         onChange={imageHandler}
         accept='image/png, image/jpeg, /image/jpg, /image/webp'
        />
        <label htmlFor='avatar'>
            <div className="w-[30px] h-[30px] bg-white border  rounded-full absolute bottom-2 right-1 flex items-center justify-center cursor-pointer">
                <AiOutlineCamera size={20} className='z-1' />
            </div>

        </label>
      </div>
  </div>
  <br />
  <br />

  <div className='w-full pl-6 800px:pl-10'>
    <form onSubmit={handleSubmit}> 
       <div className="800px:w-[50%] m-auto block pb-4">
          <div className='w-[100%]'>
            <label className="block pb-4  text-gray-600 dark:text-gray-400">Full Name</label>
            <input 
              type="text"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='w-[100%] pt-4'>
            <label className="block pb-4 text-gray-600 dark:text-gray-400">Email Address</label>
            <input 
              type="text"
              readOnly
              className={`${styles.input} !w-[95%] mb-2 800px:mb-0`}
              required
              value={user.email}
            />
          </div>
          <input 
            type="submit"
            value="Save Changes"
            required
            className={`w-full 800px:w-[150px] h-[50px] border border-[#37a39a] text-center text-[#37a39a] rounded-[5px] mt-8 cursor-pointer  outline-none transition duration-300 hover:bg-[#37a39a] hover:text-[#ffffff]  `}
          />
       </div>
    </form>
    <br />
  </div>

    </>
  )
}

export default ProfileInfo







