import React from "react";
import aboutusimg from './hameedsaboutus.jpg';

const Companydetails = () => {
    return (
        <div className="Companydetails">
            <h2 className="companyheading">About Us</h2>
            <img src={aboutusimg.src} className="aboutusimg" />
            <p className="companypara">Hameed’s is a leading manufacturer and distributor of high-quality leather finishing chemicals in Pakistan. Established in 2020, our manufacturing and packing facility in the industrial hub of Korangi, Karachi, allows us to deliver reliable products to customers in Karachi, Lahore, Kasur, Sialkot, and across the country.
</p>
        </div>
    );
};

export default Companydetails;