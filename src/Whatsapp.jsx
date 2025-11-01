import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    return ( 
        <a
      href="https://wa.me/919876543210" // 👉 replace with your WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
     );
}

export default Whatsapp;