import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark')
        }

        const checkMobileStyle = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setIsNavVisible(!mobile);
        }

        checkMobileStyle();
        window.addEventListener("resize", checkMobileStyle);

        return () => window.removeEventListener('resize', checkMobileStyle);
    }, []);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (isMobile) {
                closeNav();
            }
        }
    };

    const openNav = () => {
        setIsAnimating(true);
        setIsNavVisible(true);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const closeNav = () => {
        setIsAnimating(true);
        setIsNavVisible(false);
        setTimeout(() => setIsAnimating(false), 400);
    };

    const toggleNav = () => {
        if (isNavVisible) {
            closeNav();
        } else {
            openNav();
        }
    };

    return (
        <>
            {}
            {isMobile && !isNavVisible && (
                <button className='show-links' onClick={toggleNav}>
                    ☰
                </button>
            )}

            {}
            <nav className={`nav ${isNavVisible ? 'active' : ''} ${isAnimating ? 'animating' : ''} ${!isMobile && isNavVisible ? 'collapsed' : ''}`}>
                <div className="nav-logo" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                    <div className="logo">
                        <img src="/logo.jpg" alt="me" />
                    </div>
                </div>
                
                <div className="nav-links">
                    <div className={`links ${isNavVisible ? 'visible' : 'hidden'}`}>
                        <div className="link" onClick={() => scrollToSection('main')}>Main</div>
                        <div className="link" onClick={() => scrollToSection('about')}>About</div>
                        <div className="link" onClick={() => scrollToSection('skills')}>Skills</div>
                        <div className="link" onClick={() => scrollToSection('projects')}>Projects</div>
                        <div className="link" onClick={() => scrollToSection('contact')}>Contact</div>
                        
                        <button
                        className='theme-toggle'
                        onClick={toggleTheme}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? 'light' : "dark"}
                        </button>

                        {}
                        {!isMobile && (
                            <button className='hide' onClick={closeNav}>
                                ⬆
                            </button>
                        )}
                        
                        {}
                        {isMobile && (
                            <button className='hide' onClick={closeNav}>
                                ✕
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}