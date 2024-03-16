import React from "react";
import LeftBanner from "./LeftBanner";
import {banner_girls, 
        browser,
        calculator,
        dna,
        lamp_books,
        molecule,
        notebook,} 
from "../../assets/index";


const Banner = () => {

    return (
        <>
        <section 
            id="home" 
            className="w-full pt-[10px] mt-10 lgl:mt-0 lgl:pt-[50px] pb-[20px] relative flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center  border-b-[1px] border-b-color4 font-titleFont"
        > 
            <LeftBanner />
            <div className="w-full lgl:w-1/2  flex justify-center items-center relative">
                <img 
                  className="w-[100px] h-[200px] lgl:w-[250px] lgl:h-[250px] z-10 absolute"
                  src={banner_girls} 
                  alt="bannerImg"
                />

                <div className="absolute w-[50px] h-[50px] lgl:w-[70px] lgl:h-[70px] flex justify-center items-center -rotate-6 -translate-y-[10px] -translate-x-[220px]">
                    <img src={dna} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>

                <div className="absolute w-[50px] h-[50px] lgl:w-[70px] lgl:h-[70px] flex justify-center items-center -rotate-45 -translate-y-[150px] -translate-x-[200px]">
                    <img src={lamp_books} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>

                <div className="absolute w-[50px] h-[50px] lgl:w-[50px] lgl:h-[50px] flex justify-center items-center -rotate-12 -translate-y-[180px] -translate-x-[70px]">
                    <img src={browser} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>

                <div className="absolute w-[50px] h-[50px] lgl:w-[30px] lgl:h-[70px] flex justify-center items-center rotate-12 -translate-y-[160px] translate-x-[100px]">
                    <img src={calculator} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>

                <div className="absolute w-[50px] h-[50px] lgl:w-[50px] lgl:h-[70px] flex justify-center items-center rotate-12  -translate-y-[40px] translate-x-[200px]">
                    <img src={molecule} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>

                <div className="absolute w-[50px] h-[50px] lgl:w-[50px] lgl:h-[70px] flex justify-center items-center rotate-45  translate-y-[80px] translate-x-[220px]">
                    <img src={notebook} className="h-full w-screen absolute  sml:scale-x-[1.5] sml:scale-y-[1.1]"/>
                </div>
            </div>

        </section>
        </>
    )
}

export default Banner