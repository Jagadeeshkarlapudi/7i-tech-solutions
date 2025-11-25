import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";


const testimonials = [
  {
    text: "I appreciated the real-world application of the VIP website projects. It made the learning process more relevant and engaging.",
    name: "Vijay",
    rating: 5,
  },
  {
    text: "This VIP website projects was a great way to apply the concepts we've been learning in class. It helped solidify my understanding and gave me practical experience.",
    name: "Harika",
    rating: 4.5,
  },
  {
    text: "I loved working on this VIP projects. It was a perfect balance of challenging and achievable, and I learned a lot about project management and Time-management.",
    name: "Venkat",
    rating: 5,
  },
  {
    text: "The VIP project gave me incredible exposure. I learned teamwork, deadlines, and real client collaboration.",
    name: "Sravya",
    rating: 4.5,
  },
  {
    text: "An amazing learning experience that connected theory to practice and improved my confidence.",
    name: "Rahul",
    rating: 5,
  },
];

const Testimonials = () => {
  const loopTestimonials = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section className="testimonials-section py-5">
      <div className="testimonials-wrapper">
        <div className="testimonials-track">
          {loopTestimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <div className="testimonial-body">
                <p className="testimonial-text">"{item.text}"</p>
              </div>
              <div className="testimonial-footer">
                <div className="stars">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <FaStar key={i} color="#f8b400" />
                  ))}
                  {item.rating % 1 !== 0 && <FaStarHalfAlt color="#f8b400" />}
                </div>
                <h5 className="testimonial-name">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
