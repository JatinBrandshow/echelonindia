import Image from 'next/image'
import React from 'react'

const projects = [
    {
        site: "kumarawilcoxon.com",
        title: "Kumara Wilcoxon",
        description:
            "With over $1.3 Billion in sales, Kumara Wilcoxon is one of Austin’s top luxury real estate agents. Kumara’s website reflects her distinguished and elevated brand. With subtle brand elements, a warm color palette, and plenty of video content, the website has an ultra-high-end look while still being inviting.",
        image:
            "https://cdn-gdalb.nitrocdn.com/LKErezJcAyurKLBNOppXfGJVQQbZsRzg/assets/images/optimized/rev-2e7ef09/www.luxurypresence.com/wp-content/uploads/2022/12/4-kumara-wilcoxon-1200x720.jpg",
        buttonText: "Show more",
    },
    {
        site: "kumarawilcoxon.com",
        title: "Kumara Wilcoxon",
        description:
            "With over $1.3 Billion in sales, Kumara Wilcoxon is one of Austin’s top luxury real estate agents. Kumara’s website reflects her distinguished and elevated brand. With subtle brand elements, a warm color palette, and plenty of video content, the website has an ultra-high-end look while still being inviting.",
        image:
            "https://cdn-gdalb.nitrocdn.com/LKErezJcAyurKLBNOppXfGJVQQbZsRzg/assets/images/optimized/rev-2e7ef09/www.luxurypresence.com/wp-content/uploads/2022/12/4-kumara-wilcoxon-1200x720.jpg",
        buttonText: "Show more",
    },
    {
        site: "kumarawilcoxon.com",
        title: "Kumara Wilcoxon",
        description:
            "With over $1.3 Billion in sales, Kumara Wilcoxon is one of Austin’s top luxury real estate agents. Kumara’s website reflects her distinguished and elevated brand. With subtle brand elements, a warm color palette, and plenty of video content, the website has an ultra-high-end look while still being inviting.",
        image:
            "https://cdn-gdalb.nitrocdn.com/LKErezJcAyurKLBNOppXfGJVQQbZsRzg/assets/images/optimized/rev-2e7ef09/www.luxurypresence.com/wp-content/uploads/2022/12/4-kumara-wilcoxon-1200x720.jpg",
        buttonText: "Show more",
    },
    {
        site: "kumarawilcoxon.com",
        title: "Kumara Wilcoxon",
        description:
            "With over $1.3 Billion in sales, Kumara Wilcoxon is one of Austin’s top luxury real estate agents. Kumara’s website reflects her distinguished and elevated brand. With subtle brand elements, a warm color palette, and plenty of video content, the website has an ultra-high-end look while still being inviting.",
        image:
            "https://cdn-gdalb.nitrocdn.com/LKErezJcAyurKLBNOppXfGJVQQbZsRzg/assets/images/optimized/rev-2e7ef09/www.luxurypresence.com/wp-content/uploads/2022/12/4-kumara-wilcoxon-1200x720.jpg",
        buttonText: "Show more",
    },
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
            <section className="max-w-[1700px] mx-auto px-4 sm:px-6 py-8 sm:py-24 space-y-20">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 1 // 2nd, 4th, etc.
                    return (
                        <div key={index} className="grid grid-cols-5 gap-8">
                            {/* Image First if Even */}
                            {isEven && (
                                <div className="col-span-5 md:col-span-3 my-auto max-md:h-full max-lg:h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out">
                                    <Image
                                        className="h-full w-full object-cover"
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
                                <div className="col-span-5 md:col-span-3 my-auto max-md:h-full max-lg:h-64 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out">
                                    <Image
                                        className="h-full w-full object-cover"
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