"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterText() {
    const words = [
        {
            text: "Find  y",
        },
        {
            text: "our d",
        },
        {
            text: "ream h",
        },
        {
            text: "ome with E",
        },
        {
            text: "chelon.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-full py-6  ">
            <p className="text-gray-600 text-xs sm:text-base  ">
                Turning your dream of a perfect home into reality
            </p>
            <TypewriterEffectSmooth words={words} />
            <div
                className="flex flex-row space-y-4 space-x-2 md:space-x-4">
                <button
                    className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button
                    className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div>
        </div>
    );
}
