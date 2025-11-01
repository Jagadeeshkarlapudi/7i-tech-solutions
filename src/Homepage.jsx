import { useEffect } from "react";
import About from "./About";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Header from "./Header";
import Navbar from "./Navbar";
import Whychoose from "./Whychoose";
import Aos from "aos";
import "aos/dist/aos.css";
import Whatsapp from "./Whatsapp";
import Poster from "./Poster";
import Wholearn from "./wholearn";
import Address from "./Address";
import Footer from "./Footer";

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
        {/* <Header/> */}
        <Navbar/>
        <Banner/>
        <Whychoose/>
        <About/>
        <Aboutus/>
        <Wholearn/>
        <Address/>
        <Whatsapp/>
        <Footer />
        </div>
     );
}

export default Homepage;