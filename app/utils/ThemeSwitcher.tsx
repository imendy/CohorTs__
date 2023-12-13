"use client"
import {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import {BiSun, BiMoon} from 'react-icons/bi'



const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)


    const {theme, setTheme} = useTheme()

    useEffect(() => setMounted(true), []) 

    if(!mounted) return null


  return (
    <div className="flex items-center justify-center mx-4">
      {theme === "light" ? (
        <BiMoon
          className="w-5 h-5 cursor-pointer"
        //   fill="black"
          size={20}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
        className="w-5 h-5 cursor-pointer"
        size={20}
        fill="white"
        onClick={() => setTheme("light")}
        />
      )}
    </div>
  )
}

export default ThemeSwitcher