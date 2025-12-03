import React from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";


const testimonials = [
  {
    text: "I had a good learning experience at 7i Tech Solutions, where I learned Core Java and Spring. The trainers explained concepts clearly with practical examples, and the hands-on practice helped me improve my coding skills. Overall, it’s a great place to learn and build a strong foundation in backend development.",
    name: "Muskan Shamim",
    rating: 5,
  },
  {
    text: "My son abhiram of grade 7 had learnt css and web designing from 7itech in the last summer vacation.he had successfully completed his course .now he is very gd at his coding skills.thankyou 7itech for your good guidance and teaching.",
    name: "Divya Sree",
    rating: 4.5,
  },
  {
    text: "I didn’t know anything about it everything was completely new to me. Over time, I’ve gained a solid understanding of the basics, including HTML, CSS. I can now create simple web pages and understand how websites are structured and styled.",
    name: "Rishitha",
    rating: 5,
  },
  {
    text: "7itech solution is best institute to built your carior it's not like teaching It's based on practice Join 7i tech see your feature bright Thankyou 7itech now iam zero to hero because of 7itech solution thankyou sir To teach me I got job in nyera companey bangaluru",
    name: "Harika",
    rating: 4.5,
  },
  {
    text: "I am Kusala Nandini. Thank you 7itech Solutions, this is the best Institute for a fresher to improve the skills in Front end and back end and thanks to Venkat Sir for encouraging me. And thanks to the faculty for helping me to enhance my skills.",
    name: "Kusala Nadhini",
    rating: 5,
  },
  {
    text: "Good teaching staff, friendly environment, best training institute for IT background student's.Heartly thanks to Venkat sir (Chairman and Founder of 7i tech Solutions) and Ajit sir, Jagadeesh sir, Akhil sir, Nirikshan sir who supported and guided us for best knowledge.....👍.",
    name: "Akhil Sonu",
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
