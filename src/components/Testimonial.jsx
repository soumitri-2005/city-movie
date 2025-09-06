import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "Wedding Photography Client",
    rating: 4,
    text: "The team captured every moment of our wedding so beautifully! From candid smiles to emotional moments, every picture felt like a story. Their creativity and patience made us feel super comfortable. Truly memories for a lifetime.",
  },
  {
    name: "Rohan Mehta",
    role: "Product Shoot Client",
    rating: 5,
    text: "I needed professional product photos for my brand, and the studio exceeded expectations. The lighting, detailing, and editing were spot on. Just one small delay in delivery, otherwise everything was perfect.",
  },
  {
    name: "Sneha Kapoor",
    role: "Family Portrait Client",
    rating: 4,
    text: "We booked a family photoshoot, and it was such a delightful experience. The photographers were friendly, patient with kids, and made the whole session fun. The final portraits now hang proudly in our living room.",
  },
];

const TestimonialCard = ({ name, role, rating, text }) => {
  return (
    <div className="bg-[var(--maroon-color)] text-white p-6 rounded-xl shadow-xl max-w-sm flex flex-col justify-between">
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
            }
          />
        ))}
      </div>

      {/* Text */}
      <p className="italic text-gray-300 mb-6">“{text}“</p>

      {/* Author */}
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="py-12 px-6 mt-20 mb-20">
      <h2 className="formal-font-text text-[1.7rem] sm:text-[2rem] lg:text-[3rem] font-bold tracking-[2px] text-center mb-10 text-[var(--maroon-color)]">
        What our customers say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
