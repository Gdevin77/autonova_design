import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Card from "./ui/Card";
import testimonials from "../data/testimonials.json";

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <Card className="mx-auto max-w-3xl text-center">
      <div className="mb-4 flex justify-center gap-1 text-accent" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-lg text-textPrimary">"{item.quote}"</p>
      <p className="mt-4 text-sm font-semibold text-accent">{item.name} - {item.location}</p>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, dotIndex) => (
          <button
            key={dotIndex}
            aria-label={`Go to testimonial ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
            className={`h-2.5 w-2.5 rounded-full ${dotIndex === index ? "bg-accent" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </Card>
  );
};

export default TestimonialCarousel;