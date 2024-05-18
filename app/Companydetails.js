import React from "react";
import aboutusimg from './hameedsaboutus.jpg';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Companydetails = () => {
    return (
        <section id="aboutus">
        <div className="Companydetails">
            <h2 className="companyheading">About Us</h2>
            <img src={aboutusimg.src} className="aboutusimg" />
            <p className="companypara">Hameeds is a leading manufacturer and distributor of high-quality leather finishing chemicals in Pakistan. Established in 2020, our manufacturing and packing facility in the industrial hub of Korangi, Karachi, allows us to deliver reliable products to customers in Karachi, Lahore, Kasur, Sialkot, and across the country.<br></br><br></br>Hameeds has a specialized laboratory for conducting basic trials, ensuring that every batch of chemicals meets rigorous quality and effectiveness standards before reaching customers. Hameeds prioritizes customer satisfaction by providing exceptional products and unparalleled service, aiming to build long-lasting relationships and solidify its reputation as a reliable supplier.</p>
    
        </div>
        </section>
    );
};

export default Companydetails;