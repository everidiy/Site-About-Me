import { useEffect, useState } from 'react';
import '../styles/header.css';

export default function Header() {
    return (
        <>
        <section id="main">
        <div className="nav">
            <div className="nav-logo" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                <Logo />
            </div>
            <div className="nav-links">
               <Links /> 
            </div>
        </div>
        </section>
        </>
    )
}

function Logo() {
    return (
        <>
        <div className="logo">
            <img src="/logo.jpg" alt="me" />
        </div>
        </>
    )
}

function Links() {
    useEffect(() => {
        const checkMobyleStyle = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile)
            setIsVisible(!mobile)
        }

        checkMobyleStyle();

        window.addEventListener("resize", checkMobyleStyle);

        return () => window.removeEventListener('resize', checkMobyleStyle)

    }, [])

    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHide = () => {
        setIsVisible(false);
    }

    const handleShow = () => {
        setIsVisible(true);
    }

    return (
        <>
            <div className={`nav ${isVisible ? '' : 'collapsed'}`}>
                <div className="nav-logo">
                    <div className="logo">
                        <img src="/logo.jpg" alt="Logo" />
                    </div>
                </div>
                
                <div className="nav-links">
                    <div className={`links ${isVisible ? '' : 'hidden'}`}>
                        <div className="link" onClick={() => scrollToSection('main')}>Main</div>
                        <div className="link" onClick={() => scrollToSection('about')}>About</div>
                        <div className="link" onClick={() => scrollToSection('skills')}>Skills</div>
                        <div className="link" onClick={() => scrollToSection('projects')}>Projects</div>
                        <div className="link" onClick={() => scrollToSection('contact')}>Contact</div>
                        <button className='hide' onClick={handleHide}>⬆</button>
                    </div>
                </div>
            </div>
            
            {!isVisible && (
                <button className='show-links' onClick={handleShow}>
                    ⬇
                </button>
            )}
        </>
    );
}
