/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillGithub } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { styles } from '../../../app/styles/style'
import { useRegisterMutation } from '@/redux/features/auth/authApi'
import {toast }from 'react-hot-toast'


type Props = {
    setRoute: (route: string) => void;

}

const schema = Yup.object().shape({
    name: Yup.string().required('Please enter your name!').min(1, 'Name must not be empty'),
    email: Yup.string().email('Invalid email!').required('Please enter your email!'),
    password: Yup.string().required('Please enter your password!').min(6),
  });
  



const SignUp: FC<Props> = ({setRoute}) => {
   const [show, setShow] = useState(false)
   const [register, {data, error, isSuccess}] = useRegisterMutation()


  useEffect(() => {
    if(isSuccess){
        const message = data?.message || "Registration successful"
        toast.success(message)
        setRoute("Verification")
    }

    if(error) {
        if("data" in error) {
            const errorData = error as any;
            toast.error(errorData.data.message)
        }
    }
  }, [isSuccess, data, error, setRoute])

   const formik = useFormik({
       initialValues: {
           name: '',
           email: '',
           password: '',
       },
       validationSchema: schema,
       onSubmit: async({name, email, password}) => {
          //  setRoute("Verification")
          const data = {
            name, email, password
          }
          await register(data)
       }
   })

   const {errors, touched, values, handleChange, handleSubmit} = formik

   

  return (
    <div className='w-full'>
        
        <h1 className={`${styles.title}`}>
              SignUp to CohorTs
        </h1>
       <form onSubmit={handleSubmit} className='px-6'>
        <div className="mb-4">
        <label
          className={`${styles.label}`}
          htmlFor='name'
         >
          Enter your Name
         </label>

         <input 
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder='Enter your name'
          id="name"
          className={`${errors.name && touched.name && 'border-red-500'} ${styles.input}`}
         />
          {errors.name && touched.name && (
            <span className='text-red-500 pt-2 block'>{errors.name}</span>
          )}

        </div>

         <label
          className={`${styles.label}`}
          htmlFor='email'
         >
          Enter your Email
         </label>

         <input 
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder='Enter your email'
          id="email"
          className={`${errors.email && touched.email && 'border-red-500'} ${styles.input}`}
         />
          {errors.email && touched.email && (
            <span className='text-red-500 pt-2 block'>{errors.email}</span>
          )}

          <div className="w-full mt-5 relative mb-1">
          <label
          className={`${styles.label}`}
          htmlFor='password'
         >
          Enter your Password
         </label>

         <input 
           type={!show ? "password" : "text"}
           name="password"
           value={values.password}
           onChange={handleChange}
           placeholder='Enter your password'
           id="password"
           className={`${errors.password && touched.password && 'border-red-500'} ${styles.input}`}

         />

         {!show ? (
             <AiOutlineEyeInvisible 
             size={15}
             onClick={() => setShow(true)}
             className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
             />
         ) : (  
             <AiOutlineEye
             onClick={() => setShow(false)}
             size={15}
             className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
             />
         )}
          

          </div>

          {errors.password && touched.password && (
            <span className='text-red-500 pt-2 block'>{errors.password}</span>
          )}

          <div className="w-full mt-5">
            <input 
            type="submit"
            value="Sign Up"
            className={`${styles.button}`}
            />
          </div>
            <br />

            <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
               Or join with 
            </h5>

            <div className="flex items-center justify-center py-3">
                 <FcGoogle size={20} className="mr-2 cursor-pointer transition duration-300 hover:translate-x-1.5"/>
                 <AiFillGithub size={20} className="mr-2 cursor-pointer dark:text-white transition duration-300 hover:translate-x-1.5"/>
            </div>

            <h5 className='text-center pt-8 mb-12 font-Poppins text-[14px] text-black dark:text-white'>

              have an account already? {" "}<span className="text-[#37a39a] cursor-pointer pl-1 transition duration-300 hover:underline" onClick={() => setRoute('Login')}>Sign In</span>
            </h5>

       </form>
       
    </div>
  )
}

export default SignUp