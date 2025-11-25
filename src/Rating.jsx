import React from "react";
import google from './assets/images/g.png'

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating = 4.6, totalReviews = 123 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <>
    <a href="https://www.google.com/search?sca_esv=467a6a31ff5f6688&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwkWUVN2ndEHK8Xo--3i8Tzqfr9V-5XzWYXey9OZNz2qccqBb3yfnkefdsE8hkt3JGbjvscByxWOH_0XyE464yzikedqYn1eqZSFVfSizUteheodeA%3D%3D&q=7ITECH+SOLUTIONS+Reviews&sa=X&ved=2ahUKEwjho7mqi9aQAxVySGwGHSn8CXsQ0bkNegQIIhAE&biw=1280&bih=551&dpr=1.5" target="_blank">
        <div className="google-rating-badge d-none d-lg-flex align-items-center shadow-sm rounded-3">
     
      <img
        src={google}
        alt="Google logo"
        className="google-logo img-fluid me-2"
      />
      <div>
        {/* <p className="m-0 fw-semibold text-dark small">Google Reviews</p> */}
        <div className="d-flex align-items-center">
          <h6 className="m-0 fw-bold text-dark me-1">{rating.toFixed(1)}</h6>
          
        </div>
        <div className="stars">
            {[...Array(5)].map((_, i) => {
              if (i < fullStars) return <FaStar key={i} className="text-warning" />;
              if (i === fullStars && halfStar)
                return <FaStarHalfAlt key={i} className="text-warning" />;
              return <FaRegStar key={i} className="text-warning" />;
            })}
          </div>
      </div>
    </div>
    </a>
    </>
  );
};

export default Rating;
