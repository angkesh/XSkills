import React from 'react';
import {Link} from "react-scroll";
import {xskillsData} from "../../constants/xskillsFooter";
import {communityData} from "../../constants/communityFooter";
import { connectData } from '../../constants/connectFooter';
import {moreFooterData} from "../../constants/moreFooter";
import {motion} from "framer-motion";
import { fadeIn, textFadeIn } from '../../animation/motion';

const Footer = (props) => {


    return (
        <>
        
        <div className='w-full py-20 h-auto border-b-[1px] border-b-color4 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-5'>

{/* <div className='w-full h-full  flex flex-col items-center justify-center gap-6'>
    <motion.div 
        className='w-full h-20 rounded-full flex flex-col items-center justify-center'
        variants={fadeIn('left', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
    >
        <span className="xskillsGradient text-xl" > XSKILLS </span>
        
        <p className='text-wrap text-base'>
            XSkills provides global access to online courses and connect individuals to mentors in various fields, addressing the challenge of access to quality education and mentorship. Users can reach out to mentors who possess the skills they wish to master, whether it's language learning or programming.
        </p>

    </motion.div>
</div> */}





<div className='w-full h-full '>
    <motion.h3 
        className='text-xl uppercase text-designColor tracking-wide'
        variants={textFadeIn(0.5)}
        initial='hidden'
        whileInView='show'
    >
        XSKILLS
    </motion.h3>
    <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
        <div>
            {
                xskillsData.map(({_id, title, link}, index)=>
                (
                    <motion.li 
                        className='text-base font-normal text-color5 tracking-wide duration-300' 
                        key={_id}
                        variants={textFadeIn(index*0.5)}
                        initial='hidden'
                        whileInView='show'
                    >
                        <Link 
                            to={link}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                                {title}
                                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                                left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'> 
                                </span>
                            </span>
                        </Link>
                    </motion.li>
                ))
            }
        </div>
    </ul>
</div>

<div className='w-full h-full '>
    <motion.h3 
        className='text-xl uppercase text-designColor tracking-wide'
        variants={textFadeIn(0.5)}
        initial='hidden'
        whileInView='show'
    >
        Community
    </motion.h3>
    <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
        <div>
            {
               communityData.map(({_id, title, link}, index)=>
               (
                   <motion.li 
                       className='text-base font-normal text-color5 tracking-wide duration-300' 
                       key={_id}
                       variants={textFadeIn(index*0.5)}
                       initial='hidden'
                       whileInView='show'
                   >
                       <Link 
                           to={link}
                           smooth={true}
                           offset={-70}
                           duration={800}>
                           <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                               {title}
                               <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                               left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'> 
                               </span>
                           </span>
                       </Link>
                   </motion.li>
               ))
            }
        </div>

    </ul>
        
</div>


<div className='w-full h-full '>
    <motion.h3 
        className='text-xl uppercase text-designColor tracking-wide'
        variants={textFadeIn(0.5)}
        initial='hidden'
        whileInView='show'
    >
        Connect
    </motion.h3>
    <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
        <div>
            {
                connectData.map(({_id, title, link}, index)=>
                (
                    <motion.li 
                        className='text-base font-normal text-color5 tracking-wide duration-300' 
                        key={_id}
                        variants={textFadeIn(index*0.5)}
                        initial='hidden'
                        whileInView='show'
                    >
                        <Link 
                            to={link}
                            smooth={true}
                            offset={-70}
                            duration={800}>
                            <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                                {title}
                                <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                                left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'> 
                                </span>
                            </span>
                        </Link>
                    </motion.li>
                ))
            }
        </div>

    </ul>
        
</div>


<div className='w-full h-full '>
    <motion.h3 
        className='text-xl uppercase text-designColor tracking-wide'
        variants={textFadeIn(0.5)}
        initial='hidden'
        whileInView='show'
    >
        More
    </motion.h3>
    <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
        <div>
            {
               moreFooterData.map(({_id, title, link}, index)=>
               (
                   <motion.li 
                       className='text-base font-normal text-color5 tracking-wide duration-300' 
                       key={_id}
                       variants={textFadeIn(index*0.5)}
                       initial='hidden'
                       whileInView='show'
                   >
                       <Link 
                           to={link}
                           smooth={true}
                           offset={-70}
                           duration={800}>
                           <span className='w-full text-lg relative hover:text-designColor duration-300 cursor-pointer group'>
                               {title}
                               <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1
                               left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'> 
                               </span>
                           </span>
                       </Link>
                   </motion.li>
               ))
            }
        </div>

    </ul>
        
</div>
</div>
        
        <span className='w-full'>
            All Icons are Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </span>
        </>
   
    )
}

export default Footer
