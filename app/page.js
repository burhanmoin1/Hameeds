import Carousel from "./Carousel";
import Companydetails from "./Companydetails";
import Header from "./Header";
import products from './products.jpg';
import shoecare from './shoecare.jpg';
import leatherfinishing from './leatherfinishing.jpg';
import ContactUs from "./ContactUs";
import Footer from './Footer';
import staricon from './staricon.png';
import Products from "./Products";

export default function Home() {
  
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
        <Header />
        <Carousel />
        <Companydetails />
        <Products />
    <ContactUs/>
    <Footer/>
    </main>
  );
}
