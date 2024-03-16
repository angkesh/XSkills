import {React, useState} from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayCircleOutline, IoSearch } from "react-icons/io5";

const LeftBanner = () => {

    const [searchValue, setSearchValue ]= useState("What would you like to learn?");
    function keyPress(event){

    }

    function handleSearchChange(event){

    }

    return (
            <div className="w-full lgl:w-1/2 flex flex-col gap-10 z-[9]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-bold text-color5">
                        Embrace the 
                        <span className="text-gradient capitalize"> Infinite </span>
                        Possibilities of Learning
                    </h1>

                    <p className="text-color5">
                        At XSkills, we believe education is the 
                        <span className="text-gradient"> bridge </span>
                        that spans differences and connects hearts, minds, and souls in the pursuit of undestanding.
                    </p>
                </div>
                <div className="flex flex-col items-center w-full lgl:items-start xl:items-start  gap-10 xl:gap-10 justify-between">
                    <div className="w-full">
                        <div className="flex gap-10">
                            {/* search subjects */}
                            <div className="flex w-1/3 h-[50px]  gap-5 justify-center items-center bg-color33 rounded-full hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer
        duration-300">
                                <span className="text-textColor">
                                    Explore Subjects
                                </span>
                                <a className="text-textColor" target="_blank" rel="noreferrer" href="">
                                    <FaArrowRight />
                                </a>
                                
                            </div>
                         
                            {/* The video box */}
                            <div className="flex w-1/2 h-[50px]  gap-3 justify-center items-center  rounded-full">
                                
                                <a className="text-playColor text-6xl">
                                    <IoPlayCircleOutline />
                                </a>
                                
                                <span> 
                                    Watch Demo
                                </span>
                                
                            </div>

                        </div>
                    </div>
                </div>

                {/* the search box */}
                <div className="w-3/4 pl-5 pr-5 pt-3 pb-3
        flex justify-between items-center rounded-[43px] shadow-shadowTwo bg-searchBoxColor">
                    <input className="w-full italic bg-searchBoxColor" value={searchValue} onKeyDown={(event)=>{keyPress(event)}} onChange={(event) => handleSearchChange(event)} fullWidth={true} />
                   
                    <div className="text-2xl">
                        <IoSearch />
                    </div>
                </div>
            </div>
    )
}

export default LeftBanner