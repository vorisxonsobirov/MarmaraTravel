import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Link.png";
import "../main.css";
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar">
                <Link to="/">
                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        src={logo} alt=""
                    />
                </Link>

                <div className={`links ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/relaxCountry">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Страна отдыха
                        </motion.p>
                    </Link>
                    <Link to="/tickets">
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Авиабилеты
                        </motion.p>
                    </Link>
                    <Link to="/contact">
                        <motion.p
                            initial={{ opacity: 0, x: 150 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            Обратная связь
                        </motion.p>
                    </Link>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
