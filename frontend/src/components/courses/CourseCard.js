import React from "react";
import ReactStars from "react-stars";
const CourseCard = (props) =>{
    return (
        <>
            <div className="w-full h-60 overflow-hidden rounded-lg">
                <img src={props.course.src} alt="src" className="w-full h-40 rounded-lg group-hover/main:scale-105 duration-300 cursor-pointer"/>
            </div>

            <div className="w-full h-1/3 mt-5 flex flex-col gap-6">
                <h3 className="text-base uppercase text-designColor font-semibold">{props.course.title}</h3>
                <div className="flex gap-4">
                    {
                       <ReactStars 
                        value={props.course.stars}
                        count={5}
                        size={25}
                        edit={false}
                        isHalf={false}
                        activeColor="#ffea00"
                       /> 
                    }
                </div>
            </div>
                
        </>
        
        
    )
}

export default CourseCard