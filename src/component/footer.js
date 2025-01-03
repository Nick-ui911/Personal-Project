import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="footer-content">
                    <span className="text-muted">© 2023 Your Company Name. All rights reserved.</span>
                    <div className="footer-links">
                        <a href="/about" className="footer-link">About Us</a>
                        <a href="/contact" className="footer-link">Contact</a>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                    </div>
                    {/* <h3>{user.name}</h3>
                    <h3>{user.email}</h3> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;