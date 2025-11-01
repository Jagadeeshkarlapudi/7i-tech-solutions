import React, { useEffect, useState } from "react";
import banner from './assets/images/banner-logo.png'

const Banner = () => {
  const texts = [
    { course: "Full Stack", duration: "100 Days" },
    { course: "UI/UX", duration: "30 Days" },
    { course: "Data Science", duration: "120 Days" },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const fullText = `${current.course} in ${current.duration}`;
    let timer;

    if (!isDeleting && displayText !== fullText) {
      timer = setTimeout(
        () => setDisplayText(fullText.substring(0, displayText.length + 1)),
        100
      );
    } else if (isDeleting && displayText !== "") {
      timer = setTimeout(
        () => setDisplayText(fullText.substring(0, displayText.length - 1)),
        50
      );
    } else if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts]);

  return (
    <section className="typing-section position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="row py-10">
          {/* LEFT SIDE TEXT */}
          <div className="col-lg-7 py-10 text-start">
            <h1 className="display-5 fw-bold mb-3 typing-heading">
              Learn{" "}
              <span className="highlight-text">{displayText}</span>
              <span className="cursor">|</span>
            </h1>
            <p className="lead text-muted">
              Master in-demand IT skills from industry experts — build your career with us!
            </p>
          </div>

                    <div className="col-lg-5 text-end">
          <img src={banner} alt="" width={300} />
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
