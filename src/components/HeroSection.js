"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroSection() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "/images/building1.jpeg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "/images/building2.png",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "/images/building3.jpeg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "/images/building4.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "/images/building5.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "/images/building6.jpeg",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "/images/building7.png",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "/images/building8.jpeg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "/images/building9.jpeg",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "/images/building10.png",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "/images/building11.png",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "/images/building12.png",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "/images/building13.png",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "/images/building14.png",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "/images/building15.png",
    },
];
