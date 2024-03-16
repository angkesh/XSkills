import {React} from "react";
import {motion} from "framer-motion";
import Title from "../layouts/Title";
import CourseCard from "./CourseCard";
import { coursesData } from "../../constants/coursesInfo";
import { fadeIn } from "../../animation/motion";


function Courses(props) {
    


    function handleCourseDetails(intro){
        // props.handleActive(intro);
        // props.backKey(false);
    }

    return (
        <>
        <section id="projects" className="w-full py-20 border-b-[1px] border-b-color4">

            <div className="flex justify-center items-center text-center">
                <Title 
                    title="Take a Look At Top Courses"
                    des=""
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                {
                    coursesData.map((course, index) => {
                        return (
                            <motion.div 
                                key={course._id} 
                                id="courseCard"
                                className="w-full p-4 xl:px-12 xl:py-10 h-auto  rounded-lg shadow-shadowOne flex flex-col
                                bg-gradient-to-r from-bodyColor to-color7 group/main hover:bg-gradient-to-br
                                hover:from-color17 hover:from-50% hover:to-color18 transition-colors duration-1000 cursor-pointer" 
                                onClick={() => {handleCourseDetails(course)}}
                                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                initial='hidden'
                                whileInView='show'
                            >
                                <CourseCard
                                    course={course}
                                    key={course._id}
                                />
                            </motion.div>
                            
                        )
                        
                        
                    }) 
                }
                
            </div>

        </section>

        
        </>
        
    )
}

export default Courses