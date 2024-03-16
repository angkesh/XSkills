import React from "react";

const Title = ({title, des}) => {
    return (
        <div className="flex flex-col gap-4 font-titleFont mb-14">
            <h3 className="text-base uppercase font-semibold text-designColor tracking-wide">
                {title}
            </h3>
            <h1 className="text-2xl lgl:text-4xl text-color5 font-bold capitalize">{des}</h1>
        </div>
    )
}

export default Title