import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/logof.png'
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer container mx-auto text-neutral-content p-10">
                <aside>
                    <img className='w-36' src={logo} alt="" />
                    <p>
                        Tour Palic Bangladesh Limited.
                        <br />
                        House# 495, Road: 19/B, <br />
                        Mohakhali DOHS, Dhaka-1207
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="text-3xl flex flex-col gap-3">
                       <a href="https://www.facebook.com" target='_blank'><FaFacebook/> </a>
                       <a href="https://www.instagram.com" target='_blank'><FaInstagram/></a>
                       <a href="https://x.com" target='_blank'><FaXTwitter/></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;