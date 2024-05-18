import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShare } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <section id='contactus'>
        <div className="supportcontainer">
            <div className='twopartcontainer'>
            <div className='Contact-Information'>
                <p className='contactparagraph'>
                If you prefer to contact us directly, you can reach us using the following details:
                </p>
                <p className='contactparagraph'>
                <strong>Address:</strong> St 16/2 Sector 7-A Korangi Industrial Area Karachi 
                </p>
                <p className='contactparagraph'>
                <strong>Phone:</strong> <a href="tel:+923219244672">+923454845555</a>
                </p>
                <p className='contactparagraph'>
                <strong>Email:</strong> <a href="mailto:deltacn2011@gmail.com">info@thehameeds.com</a>
                </p>
                <div className="location-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5115126539768!2d67.13158047607452!3d24.84637364581976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bc9bd5ffdeb%3A0xcea9852344561fa6!2sSector%207a%20Sector%208%20A%20Korangi%20Industrial%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716016993864!5m2!1sen!2s"
                    className="google-map"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
            </div>
            </div>
            </div>
            </section>
    );
};

export default ContactUs;
