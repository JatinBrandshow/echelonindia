"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffect() {
    return (
        <div
            className="flex h-[40rem] w-full items-center justify-center overflow-hidden bg-black">
            <MaskContainer
                revealText={
                    <p
                        className="text-center text-4xl font-bold font-cursive px-2 sm:px-48 md:px-72 lg:px-96 text-white">
                          From dream homes , premium properties and thriving commercial spaces -we build the future you deserve
                    </p>
                }
                className="h-[40rem] font-bold font-cursive rounded-md border text-black">
                Your trusted partner for{" "}
                <span className="text-blue-500">real estate</span> — whether it’s a dream{" "}
                <span className="text-blue-500">home</span>, prime{" "}
                <span className="text-blue-500">property</span>, or strategic{" "}
                <span className="text-blue-500">commercial space</span>.
            </MaskContainer>
        </div>
    );
}
