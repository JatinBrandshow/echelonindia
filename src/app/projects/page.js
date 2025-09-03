import Image from 'next/image'
import React from 'react'

const projects = [
    {
        site: "emeraldresidency.com",
        title: "Emerald Residency",
        description:
            "Eminent Emerald Residency in Dayal Bagh, Agra is a ready-to-move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. A Group Housing Residential Scheme having Ground + 12 Floors. With a fine elevation and all modern-day amenities at your disposal.",
        image:
            "/images/building14.png",
        buttonText: "Show more",
    },
    {
        site: "emeraldsquare.com",
        title: "Emerald Square",
        description:
            "Located in one of the posh areas of Agra, Emerald Square is a luxury apartment complex with swimming pool, spa, gymnasium, sports room, and two-level basement parking. This was the first project in Uttar Pradesh to get two-level basement parking through Government order. Ground plus Seven floors with a total area of around 1,44,000 sq. ft.",
        image:
            "/images/building13.png",
        buttonText: "Show more",
    },
    {
        site: "citymallsonepat.com",
        title: "City Mall Sonipat",
        description:
            "Eminent's City Mall is strategically located in the heart of Sonepat City on Baba Tarana Road. The mall is 1.2 acres big with 1,50,000 sq. ft of built-up area accommodating top-notch brands including Big Bazaar, Pantaloons, KFC etc and three multiplexes with food courts. It was Sonepat's first mall with shopping and entertainment under one roof.",
        image:
            "/images/building12.png",
        buttonText: "Show more",
    },
    {
        site: "aarogyamharidwar.com",
        title: "Aarogyam Haridwar",
        description:
            "Aarogyam is a grand creation inspired from life that's truly a blessing. It is a fusion between the material comforts of the West and the spiritual well being of the East. With a world-class Yog, Ayurvedic spa, health and wellness club within the complex. Spread over an area of 19 acres, Eminent Aarogyam is one of the spacious housing societies in the Haridwar region.",
        image:
            "/images/building11.png",
        buttonText: "Show more",
    },
    {
        site: "gulmoharagra.com",
        title: "Gulmohar",
        description: "Located in Phase 2 Taj Nagri, Agra, the Dynamic Gulmohar is a thoughtfully planned residential complex equipped with all amenities for a comfortable living. The Project is completed and delivered. A Group Housing Residential Scheme having Ground + 2 Floors.",
        image: "/images/building10.png",
        buttonText: "Show more",
    },
    {
        site: "gardencityludhiana.com",
        title: "Garden City Ludhiana",
        description: "Garden City is one of the most premium Townships of Ludhiana. Comprising a total area of 50 acres, 31 acres is residential, 1.5 acres is commercial, 1.7 acres is park and recreational area, 0.60 acres is Institutional and remaining is roads and parking.",
        image:
            "/images/building8.jpeg",
        buttonText: "Show more",
    },
    {
        site: "commercialnoida.com",
        title: "Commercial Building Noida",
        description: "Situated in the IT and Commercial hub of Noida, this building provides commercial office space. It has modern and elegant elevation with its architecture crafted by experienced firms. It has double height basement parking with 9 floors of elevation. It also comprises of service floor and refuge areas.",
        image:
            "/images/building1.jpeg",
        buttonText: "Show more",
    },
    {
        site: "tulsiresidency.com",
        title: "Tulsi Residency",
        description: "Tulsi Residency is one of the most premium Townships of Govardhan, Mathura. It is spread over an area of 17 acres of which 10 acres is residential, 0.75 acres is commercial, 2.5 acres is park and recreational area and remaining is community area and roads.",
        image:
            "/images/building3.jpeg",

        buttonText: "Show more",
    },
    {
        site: "mangalheights.com",
        title: "Mangal Heights",
        description: "A marvel rising bang in the heart of Raj Nagar Extension Ghaziabad. It consists of a 100 rooms luxurious Hotel, 20 Duplex Commercial Space, Banquet Halls and 50 fully furnished Service Apartments. It also comprises of triple floor Basement parking facility. Constructed with world class architectural design and superior technology.",
        image:
            "/images/building15.png",
        buttonText: "Show more",
    },
    {
        site: "gardencityrudrapur.com",
        title: "Garden City Rudrapur",
        description: "Situated on NH-74, Garden City is one of the most premium Townships of Rudrapur. Comprising of total area of 65 acres, 45 acres has been completed and delivered, which consists of 1.4 acres of commercial area, 1.2 acres of Institutional area and remaining is recreational areas, parks, roads and residential plots.",
        image:
            "/images/building2.png",
        buttonText: "Show more",
    }
]

const Projects = () => {
    return (
        <>
            <section className='h-[70vh] md:h-[90vh] flex flex-col justify-center items-center bg-gradient-to-b from-cyan-200 to-gray-300'>
                <div className='max-w-3xl mx-auto px-4 text-center space-y-6'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 font-cursive'>Award-winning real estate website designs</h1>
                    <p>With over 1,500 five-star reviews and numerous RealTrends™ awards, Luxury Presence is the leading provider of beautiful, effective real estate websites for agents, teams, and brokers. Check out the portfolio of our most recent website designs.</p>
                </div>
            </section>
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-24 space-y-20">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 1 // 2nd, 4th, etc.
                    return (
                        <div key={index} className="grid grid-cols-5 gap-8">
                            {/* Image First if Even */}
                            {isEven && (
                                <div className="col-span-5 md:col-span-3 drop-shadow-2xl my-auto max-md:h-full max-lg:h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out">
                                    <Image
                                        className="h-[30vh] sm:h-[40vh] w-full object-cover"
                                        src={project.image}
                                        height={1280}
                                        width={1280}
                                        alt={project.title}
                                    />
                                </div>
                            )}

                            {/* Text */}
                            <div
                                className={`col-span-5 md:col-span-2 md:max-w-sm flex flex-col justify-center items-start ${isEven ? "mx-auto" : "max-md:order-2"
                                    }`}
                            >
                                <span className="max-lg:text-sm font-semibold text-gray-400 uppercase">
                                    {project.site}
                                </span>
                                <h2 className="mt-5 text-3xl lg:text-4xl font-semibold tracking-tighter">
                                    {project.title}
                                </h2>
                                <p className="my-5 lg:text-lg text-gray-500 font-normal tracking-tighter leading-snug">
                                    {project.description}
                                </p>
                                <button className="bg-amber-300 max-md:w-full hover:bg-amber-200 cursor-pointer transition duration-200 ease-in-out py-4 lg:py-5 tracking-wider rounded-sm px-10 font-medium uppercase">
                                    {project.buttonText}
                                </button>
                            </div>

                            {/* Image Second if Odd */}
                            {!isEven && (
                                <div className="col-span-5 md:col-span-3 drop-shadow-2xl my-auto max-md:h-full max-lg:h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out">
                                    <Image
                                        className="h-[30vh] sm:h-[40vh] w-full object-cover"
                                        src={project.image}
                                        height={1280}
                                        width={1280}
                                        alt={project.title}
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Projects