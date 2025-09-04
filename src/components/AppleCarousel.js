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
      <div className="max-w-[1345px] mx-auto">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <section className="space-y-6">
      <div className="bg-white p-8 rounded-3xl">
        <Image
          src="/images/plan-images/master plan new render copy new.jpg"
          alt="Floor Plans"
          height={1260}
          width={1260}
          className="h-full w-full mx-auto object-contain" />
      </div>
      <div className="bg-white p-8 rounded-3xl">
        <Image
          src="/images/plan-images/2BHK copy.jpg"
          alt="Floor Plans"
          height={1260}
          width={1260}
          className="h-full w-full mx-auto object-contain" />
      </div>
      <div className="bg-white p-8 rounded-3xl">
        <Image
          src="/images/plan-images/2BHK ISOMETRIC.jpg"
          alt="Floor Plans"
          height={1260}
          width={1260}
          className="h-full w-full mx-auto object-contain" />
      </div>
      <div className="bg-white p-8 rounded-3xl">
        <Image
          src="/images/plan-images/3BHK copy.jpg"
          alt="Floor Plans"
          height={1260}
          width={1260}
          className="h-full w-full mx-auto object-contain" />
      </div>
      <div className="bg-white p-8 rounded-3xl">
        <Image
          src="/images/plan-images/3BHK ISOMETRIC.jpg"
          alt="Floor Plans"
          height={1260}
          width={1260}
          className="h-full w-full mx-auto object-contain" />
      </div>
    </section>
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


