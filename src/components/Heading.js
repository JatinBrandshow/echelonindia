import React from 'react'

const Heading = ({ heading }) => {
    return (
        <div className="mb-10 flex items-center justify-center gap-2 sm:gap-4 md:gap-5">
            <div className="w-28 sm:w-48 md:w-72 h-[2px] md:h-[3px] bg-gradient-to-r from-transparent to-black" />
            <h2
                className="text-center font-semibold font-cursive text-3xl md:text-4xl lg:text-5xl text-black leading-none tracking-tighter">
                {heading}
            </h2>
            <div className="w-28 sm:w-48 md:w-72 h-[2px] md:h-[3px] bg-gradient-to-l from-transparent to-black" />
        </div>
    )
}

export default Heading