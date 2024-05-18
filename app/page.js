import Carousel from "./Carousel";
import Companydetails from "./Companydetails";
import Header from "./Header";
import products from './products.jpg';
import shoecare from './shoecare.jpg';
import leatherfinishing from './leatherfinishing.jpg';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Home() {
  const servicesData = [
    {
      id: 1,
      image: leatherfinishing,
      text: 'Leather Finishing Chemicals',
      description: 'Established in 2020, Hameeds boasts a modern manufacturing and packing facility equipped with advanced technology, ensuring the production of high-quality leather finishing chemicals.',
      className: 'first-service',
    },
    {
      id: 2,
      image: shoecare,
      text: "Shoe Care",
      description: "In addition to our premium leather finishing chemicals, we offer a comprehensive range of shoe care solutions designed to maintain and enhance the quality of leather footwear. Our shoe care products are meticulously formulated to address various aspects of leather shoe maintenance, ensuring your footwear remains in top condition for years to come.",
      className: 'second-service', 
    },
    {
      id: 4,
      image: products,
      text: "Products and Services",
      description: "At Hameeds, we take pride in offering a full spectrum of leather finishing solutions tailored to meet the diverse needs of the leather industry. Our commitment to quality and innovation ensures that our products enhance the beauty, durability, and performance of leather goods. From initial treatment to final finishing, our products cover every stage of the leather manufacturing process.",
      className: 'fourth-service',
      },

  ];
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
        <Header />
        <Carousel />
        <Companydetails />
        <div className="services-container">
      <div className="heading-container">
        <h2 className="main-heading">Our Products</h2>
      </div>
      {servicesData.map((service, index) => (
         <div
         key={service.id}
         className="service-link"
       >
        <div key={service.id} className={`service-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="image-container">
          <img
              src={service.image.src}
              className={`service-image ${service.className}`}
          />
          </div>
          <div className="text-container">
            <h3 className="service-heading">{service.text}</h3>
            <p className='service-para'>{service.description}<br></br><br></br> <br></br><br></br><span className="learn-more-button"><FontAwesomeIcon icon={faArrowLeft} /></span></p>
          </div>
        </div>
        </div>
      ))}
    </div>
    </main>
  );
}
