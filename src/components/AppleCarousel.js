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
                className="max-w-7xl pl-4 mx-auto font-medium text-3xl md:text-4xl lg:text-5xl text-black ">
                Get to know your iSad.
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
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "EMERALD SQUARE IN KHANDARI, AGRA",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "CITY MALL IN SONEPAT",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "AAROGYAM IN HARIDWAR",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GULMOHAR IN AGRA",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GARDEN CITY IN LUDHIANA",
    src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "COMMERCIAL BUILDING IN NOIDA",
    src: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "TULSI RESIDENCY IN GOVARDHAN, MATHURA",
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "MANGAL HEIGHTS AT RAJ NAGAR EXTENSION, GHAZIABAD",
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Completed Projects",
    title: "GARDEN CITY IN RUDRAPUR",
    src: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=2787&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

