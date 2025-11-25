import { useEffect } from "react";
import About from "../About";
import Aboutus from "../Aboutus";
import Banner from "../Banner";
import Header from "../Header";
import Navbar from "../Navbar";
import Whychoose from "../Whychoose";
import Aos from "aos";
import "aos/dist/aos.css";
import Whatsapp from "../Whatsapp";
import Poster from "../Poster"
import Wholearn from "../wholearn";
import Address from "../Address";
import Footer from "../Footer";
import Companies from "../Companies";
import Testimonials from "../Testimonials";
import Rating from "../Rating";
import Socialmedia from "../Socialmedia";
import OurCourses from "../Ourcources";
import Toasts from "../Toasts";

function Homepage() {

    useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Animation only once
      easing: "ease-in-out",
    });
  }, []);

    return ( 
        <div>
            <Poster/>
            <Toasts/>
        {/* <Header/> */}
        <Rating rating={4.5}/>
        <Socialmedia/>
        <Navbar/>
        <Banner/>
        <Whychoose/>
        <About/>
        <Aboutus/>
       <OurCourses/>
        <Wholearn/>
        <Testimonials/>
        <Companies/>
        <Address/>
        <Whatsapp/>
        <Footer />
        </div>
     );
}

export default Homepage;