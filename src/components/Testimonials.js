import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Heading from "./Heading";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Finding our dream home was effortless. The team’s professionalism and commitment made the entire process stress-free.",
      name: "Rohit Sharma",
      designation: "Homebuyer in Delhi NCR",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Investing in their township project turned out to be the best decision. Great location and excellent long-term value.",
      name: "Priya Mehta",
      designation: "Real Estate Investor, Gurgaon",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their commercial spaces are thoughtfully designed and highly functional. Perfect for growing businesses like ours.",
      name: "Ankit Verma",
      designation: "Café Owner, Lucknow",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their transparency and timely project delivery are unmatched. Truly trustworthy developers.",
      name: "Niraj Gupta",
      designation: "IT Professional & First-time Homebuyer",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "High-quality construction and modern amenities made it an easy choice for our family. We finally found our forever home.",
      name: "Arjun Nair",
      designation: "Resident, Noida Extension",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-10 sm:py-20">
      <Heading heading="Testimonials" />
      <AnimatedTestimonials testimonials={testimonials} />;
    </section>
  )
}
