import React, { useState } from 'react';
import {xskills_logo} from "../../assets/index";
import {navlinksdata} from "../../constants/navItems";
import {Link} from "react-scroll";
import {FiMenu} from "react-icons/fi";
import {MdClose} from "react-icons/md";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs"
import {motion} from "framer-motion";
import { fadeIn, slideIn, textFadeIn } from '../../animation/motion';

const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    function handleShowMenu(show){
        setShowMenu(show)
        props.handleShowMenu(show)
    }
    // w-[87%] h-21 fixed top-[60px] left-[50%] translate-y-[-50%] translate-x-[-50%] 
    // w-full h-21 sticky top-[20px]
    return (
        <>
            <div id='nav' className='navbar'> 

                <div className='flex justify-center items-center gap-5'>
                    <div className='logo-bg'>
                        <img src={xskills_logo} alt='logo' className='h-14 w-14 bg-color37 rounded-full'/>
                    </div>
                    <h1 className=''>
                        <span className="xskillsGradient">
                            XSKILLS
                        </span>
                    </h1>
                    
                </div>


                <div>
                    <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
                        {
                             
                            navlinksdata.map((item) => {
                                return (
                                    <li  className='text-xl font-normal text-center text-color38 tracking-wide cursor-pointer hover:text-designColor duration-300' key={item._id}>
                                        { 
                                            item.title !== "Login/Register" &&
                                            
                                                <Link 
                                                    activeClass='active'
                                                    to={item.link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                    onClick={()=>handleShowMenu(false)}
                                                    key={item._id}
                                                >
                                                    {item.title}
                                                </Link>
                                        }

                                        {
                                            item.title === "Login/Register" &&
                                            <div className='flex bg-designColor rounded-2xl h-10 w-[180px] items-center justify-center'>
                                                <a 
                                                href=""
                                                target="_blank"
                                                key={item._id}
                                                className='flex text-lg items-center'
                                                >
                                                    {item.title}
                                                </a>
                                            </div>
                                            
                                        }

                                    </li>
                                )
                                

                                
                            })
                            
                        }
                    </ul>

                    <div className='text-xl mdl:hidden bg-color4 w-10 h-10 inline-flex items-center
                        justify-center rounded-full text-designColor cursor-pointer'
                        onClick={() => handleShowMenu(!showMenu)}
                    >
                        { !showMenu ? <FiMenu /> : <MdClose/>}
                    </div>
                    
                    {
                        showMenu && (
                            <motion.div 
                                className='w-[100%] h-auto overflow-scroll absolute top-0 left-0 bg-bodyColor
                                    p-4 pt-20 scrollbar-hide z-[-1] rounded-[43px] border-[1px] border-color3 flex justify-center overflow-x-hidden'
                                    variants={slideIn('left', 'ease-in-out', 0, 0.5)}
                                    initial='hidden'
                                    whileInView='show'
                            > 
                                <div className='flex flex-col items-center gap-8 py-4 relative'>
                                    <ul className='flex flex-col gap-4'>
                                        {
                                            navlinksdata.map((item) => {
                                                return (
                                                    <li  className='text-xl font-normal text-center text-color2 tracking-wide cursor-pointer hover:text-designColor duration-300' key={item._id}>
                                                        { item.title !== "Login/Register" &&
                                                                <Link 
                                                                    activeClass='active'
                                                                    to={item.link}
                                                                    spy={true}
                                                                    smooth={true}
                                                                    offset={-70}
                                                                    duration={500}
                                                                    onClick={()=>handleShowMenu(false)}
                                                                    key={item._id}
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                        }

                                                        {
                                                            item.title === "Login/Register" &&
                                                            <a 
                                                                href="resume.pdf"
                                                                rel="noreferrer" target="_blank"
                                                                className='text-xl font-normal text-center text-color2 tracking-wide cursor-pointer hover:text-designColor duration-300' 
                                                                key={item._id}
                                                            >
                                                                {item.title}
                                                            </a>
                                                        }
                                                    </li>
                                                )
                                              

                                               
                                            })
                                        }
                                    </ul>

                                    <div className='w-full h-full  flex flex-col items-center justify-center gap-6'>
                                        <motion.div 
                                            className='flex gap-4'
                                            variants={fadeIn('left', 'tween', 0.3, 1)}
                                            initial='hidden'
                                            whileInView='show'
                                        >
                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.facebook.com/angineh.keshishian.94">
                                                <FaFacebookF />
                                            </a>

                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="https://twitter.com/Angineh98247327">
                                                <FaTwitter />
                                            </a>

                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anginehkeshishian">
                                                <FaLinkedinIn />
                                            </a>

                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="https://www.instagram.com/anginehkeshishian/">
                                                <AiFillInstagram />
                                            </a>
                                        </motion.div>

                                        <motion.div 
                                            className='flex gap-4'
                                            variants={fadeIn('left', 'tween', 0.4, 1)}
                                            initial='hidden'
                                            whileInView='show'
                                        >
                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="mailto:anginehkeshishian@gmail.com"  >
                                                <MdEmail />
                                            </a>

                                            <a className="footerIcon" target="_blank" rel="noreferrer" href="tel:+18184526402" >
                                                <BsFillTelephoneFill/>
                                            </a>
                                        </motion.div>
                                    </div>

                                 
                                </div>

                                
                            </motion.div>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar