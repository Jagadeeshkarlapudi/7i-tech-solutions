import { useEffect, useState } from "react";
import poster from './assets/images/poster.jpeg'
function Poster() {

    const [show, setShow] = useState(true);

    //  Optional: if you want it to auto-close after few seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

    return ( 
         <div className="poster-overlay">
      <div className="poster-container">
        <button className="poster-close-btn" onClick={() => setShow(false)}>
          &times;
        </button>
        <img
          src={poster} // 👈 replace with your image path or URL
          alt="Promotional Poster"
          className="poster-image"
        />
      </div>
    </div>
     );
}

export default Poster;