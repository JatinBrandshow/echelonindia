"use client";

import Heading from "./Heading";
import { Carousel } from "./ui/carousel";

export function PlansCarousel() {
    const slideData = [
        {
            src: "/images/plan-images/master plan new render copy new.jpg"
        },
        {
            src: "/images/plan-images/2BHK ISOMETRIC.jpg"
        },
        {
            src: "/images/plan-images/3BHK copy.jpg"
        },
        {
            src: "/images/plan-images/3BHK ISOMETRIC.jpg"
        },
        {
            src: "/images/plan-images/2BHK copy.jpg"
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-16 ">
            <Heading heading="Plans" />
            <Carousel slides={slideData} />
        </div>
    );
}
