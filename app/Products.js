import products from './Products.jpg';
import shoecare from './shoecare.jpg';
import leatherfinishing from './leatherfinishing.jpg';
import staricon from './staricon.png';

const Products = () => {
    const servicesData = [


        {
          id: 1,
          image: products,
          text: "Products and Services",
          description: "At Hameeds, we take pride in offering a full spectrum of leather finishing solutions tailored to meet the diverse needs of the leather industry. Our commitment to quality and innovation ensures that our products enhance the beauty, durability, and performance of leather goods. From initial treatment to final finishing, our products cover every stage of the leather manufacturing process.",
          className: 'fourth-service',
          },
        {
          id: 2,
          image: shoecare,
          text: "Shoe Care",
          description: "In addition to our premium leather finishing chemicals, we offer a comprehensive range of shoe care solutions designed to maintain and enhance the quality of leather footwear. Our shoe care products are meticulously formulated to address various aspects of leather shoe maintenance, ensuring your footwear remains in top condition for years to come.",
          className: 'second-service', 
        },
        {
          id: 3,
          image: leatherfinishing,
          text: 'Leather Finishing Chemicals',
          description: 'Established in 2020, Hameeds boasts a modern manufacturing and packing facility equipped with advanced technology, ensuring the production of high-quality leather finishing chemicals.',
          className: 'first-service',
        },
    
      ];
    return(
        <section id="products">
        <div className="services-container">
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
            <p className='service-para'>{service.description}</p>
            <img className="staricon" src={staricon.src}/>
          </div>
        </div>
        </div>
      ))}
    </div>
    </section>
    );
};

export default Products;