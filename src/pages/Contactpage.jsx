import Address from "../Address";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Rating from "../Rating";
import Socialmedia from "../Socialmedia";
import Toasts from "../Toasts";
import Whatsapp from "../Whatsapp";

function Contactpage() {
    return (  
        <div>

            <Navbar/>
            <Rating/>
            <Toasts/>
            <Socialmedia/>

            <Whatsapp/>
            <Address/>
            <Footer/>


        </div>
    );
}

export default Contactpage;