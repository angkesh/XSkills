import React, {useState, useEffect, useRef} from 'react';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {motion} from "framer-motion";
import { slideInAway } from '../../animation/motion';
import { handleThemeChange } from '../../constants/handleThemeChange';

const ThemeBar = () => {
    const [openBar, setOpenBar] = useState(false);
    const [theme, setTheme] = useState('');
    const [activeTheme, setActiveTheme] = useState('');
    var intialState = localStorage.getItem('theme') || 'main';

    useEffect(() => {
        handleThemeChange(intialState);
        setTheme(intialState)
        setActiveTheme(theme)
    }, [theme])
    
    function changeTheme(theme){
        console.log("changing theme")
        setTheme(theme);
    }

    return (
        <motion.div 
            className='themeBar'
            animate={openBar ? "open" : "closed"}
            variants={slideInAway('right', 'tween', 0.2, 1.25)}
        >
            <span className='flex items-center relative'>
                <span 
                    className='absolute -left-[45px] hover:scale-110 transition-all duration-300 cursor-pointer'
                    onClick={() => setOpenBar(!openBar)}
                >
                    {!openBar ? <BsFillArrowLeftCircleFill/> : <BsFillArrowRightCircleFill/>}
                </span>
                {/* absolute translate-x-[-240%] */}
            </span>

            <div className='flex flex-row items-center gap-4'>


                <span 
                    className={`${activeTheme==='main' ? "border-[#b91c1c] border-[2px]" : ""} flex justify-center rounded-full`}
                >
                    <span 
                        className='inline-block h-[20px] w-[20px] border-solid  border-r-white
                        border-t-white border-l-white  border-b-white border-[20px]
                        rounded-full rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer'
                        onClick={() => {changeTheme('main'); handleThemeChange('main')}}
                    >
                    </span>
                </span>



                <span 
                    className={`${activeTheme==='theme-dark' ? "border-[#b91c1c] border-[2px]" : ""} flex justify-center rounded-full`}
                >
                    <span 
                        className='themeOptions
                        border-r-[#212428] border-t-[#212428] border-l-[#212428] border-b-[#212428]'
                        onClick={() => {changeTheme('theme-dark'); handleThemeChange('theme-dark')}}
                    >

                    </span>
                </span>

                

                <span 
                    className={`${activeTheme==='theme-blue' ? "border-[#b91c1c] border-[2px]" : ""} flex justify-center rounded-full`}
                >
                    <span 
                        className='inline-block h-[20px] w-[20px] border-solid  border-r-[#111827]
                        border-t-[#111827] border-l-[#0369a1]  border-b-[#0369a1] border-[20px]
                        rounded-full rotate-45 hover:scale-110 transition-all duration-300 cursor-pointer'
                        onClick={() => {changeTheme('theme-blue'); handleThemeChange('theme-blue')}}
                    >

                    </span>
                </span>
                
            </div>
        </motion.div>
    )
}

export default ThemeBar
