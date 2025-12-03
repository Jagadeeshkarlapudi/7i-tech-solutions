import AboutInstitute from "../AboutInstitute";
import Aboutus from "../Aboutus";
import Address from "../Address";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Portfolio from "../Portfolio";
import Rating from "../Rating";
import Socialmedia from "../Socialmedia";
import Testimonials from "../Testimonials";
import Toasts from "../Toasts";
import Vision from "../Vision";
import Whatsapp from "../Whatsapp";

function About() {
    return ( 
        <div>
            <Navbar/>
            <Rating/>
            <Toasts/>
            <Socialmedia/>
            <div className="abanner">
                
            </div>
            <Aboutus/>
            <AboutInstitute/>
            <Vision/>
            <Portfolio/>
            <Testimonials/>
            <Whatsapp/>
            <Address/>
            <Footer/>
        </div>
     );
}

export default About;