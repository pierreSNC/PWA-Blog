import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';
import Button from "../Button/Button";

const Footer = () => {
    const logo = process.env.PUBLIC_URL + '/img/footer-dark.png';

    return (
        <footer className="bg-black text-white">
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 auto-rows-min gap-y-8 gap-x-16">
                <div className="item xl:col-span-3">
                    <img src={logo} alt="" className={'w-[130px] h-auto'}/>
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <div className="flex flex-col xl:flex-row gap-2">
                        <input type="text" placeholder="Enter your email" className="input bg-gray-700 p-2 rounded"/>
                        <Button content="Subscribe" filled={true} dark={true} />
                    </div>
                    <p>By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                <div className="item">
                    <h3>About Us</h3>
                    <ul className="list-none space-y-1">
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Contact</li>
                        <li>Support/Help</li>
                        <li>Request Topics</li>
                    </ul>
                </div>
                <div className="item">
                    <h3>Column Two</h3>
                    <ul className="list-none space-y-1">
                        <li>FAQs</li>
                        <li>Terms and Condition</li>
                        <li>Support</li>
                        <li>Link Nine</li>
                        <li>Link Ten</li>
                    </ul>
                </div>
                <div className="item">
                    <h3>Follow Us</h3>
                    <ul className="list-none space-y-1">
                        <li>
                            <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
                            Facebook
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                            Instagram
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                            Twitter
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                            LinkedIn
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper flex flex-col md:flex-row space-y-4 justify-between mt-8 pt-8">
                <p>2022 Ddsgnr. All right reserved.</p>
                <ul className="flex flex-col sm:flex-row xs:space-y-2  sm:space-x-4">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies Settings</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
