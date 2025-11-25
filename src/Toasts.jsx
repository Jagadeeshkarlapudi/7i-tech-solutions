import React, { useEffect, useState } from "react";


const Toasts = () => {
  const messages = [
    "Demo completed by Jagadeesh · 30 min ago",
    "New user registered · 10 min ago",
    "Demo completed by Ajit . 1hr ago",
    "Course enquiry submitted · just now",
    "User started a free demo · 5 min ago"
  ];

  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  useEffect(() => {
     if (isMobile) return;
    const interval = setInterval(() => {
      setShow(false);

      // Wait for fade-out before changing content
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        setShow(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

   if (isMobile) return null;

  return (
    <div className="toast-container">
      {show && (
        <div className="custom-toast">
          <span>🔔</span>
          <span>{messages[current]}</span>
        </div>
      )}
    </div>
  );
};

export default Toasts;
