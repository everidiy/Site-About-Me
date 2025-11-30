import { useEffect, useState } from 'react';
import { useLang } from '../contexts/LangContext';
import '../styles/header.css';

export default function Header() {
    const { lang, toggleLang, t } = useLang()
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
                        <div className="link" onClick={() => scrollToSection('main')}>
                            {t('header.main')}
                        </div>
                        <div className="link" onClick={() => scrollToSection('about')}>
                            {t('header.about')}
                        </div>
                        <div className="link" onClick={() => scrollToSection('skills')}>
                            {t('header.skills')}
                        </div>
                        <div className="link" onClick={() => scrollToSection('projects')}>
                            {t('header.projects')}
                        </div>
                        <div className="link" onClick={() => scrollToSection('contact')}>
                            {t('header.contact')}
                        </div>
                        
                        <button
                        className='theme-toggle'
                        onClick={toggleTheme}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? "🌙" : '☀️'}
                        </button>

                        <button 
                        className='lang-toggle'
                        onClick={toggleLang}>
                            {lang === 'ru' ? '\u{1F1FA}\u{1F1F8}' : '\u{1F1F7}\u{1F1FA}' }
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