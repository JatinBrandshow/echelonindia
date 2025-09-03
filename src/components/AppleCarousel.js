"use client";

import React from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import Image from "next/image";

export function AppleCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-10">
            <h2
                className="text-center font-medium text-3xl md:text-5xl lg:text-6xl text-black ">
               Our Projects.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                        <p
                            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height={500}
                            width={500}
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                    </div>
                );
            })}
        </>
    );
};

const data = [
  {
    category: "Completed Projects",
    title: "EMERALD RESIDENCY IN DAYAL BAGH, AGRA",
    src: "/images/building14.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "EMERALD SQUARE IN KHANDARI, AGRA",
    src: "/images/building13.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "CITY MALL IN SONEPAT",
    src: "/images/building12.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "AAROGYAM IN HARIDWAR",
    src: "/images/building11.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GULMOHAR IN AGRA",
    src: "/images/building10.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GARDEN CITY IN LUDHIANA",
    src: "/images/building8.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "COMMERCIAL BUILDING IN NOIDA",
    src: "/images/building1.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "TULSI RESIDENCY IN GOVARDHAN, MATHURA",
    src: "/images/building3.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "MANGAL HEIGHTS AT RAJ NAGAR EXTENSION, GHAZIABAD",
    src: "/images/building15.png",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GARDEN CITY IN RUDRAPUR",
    src: "/images/building2.png",
    content: <DummyContent />,
  },
];


