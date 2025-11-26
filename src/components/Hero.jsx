import '../styles/hero.css';

export default function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='main'>
            <div className="hero">
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <Particles />
                        <Text scrollToSection={scrollToSection} />
                        <Img />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Particles() {
    return (
        <div className="hero-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
        </div>
    )
}

function Text({ scrollToSection }) {
    return (
        <div className="hi">
            <p>Hi, I'm Bogdan <br />- beginner Frontend developer!</p>
            <button onClick={() => scrollToSection('learn')}>Learn more</button>
        </div>
    )
}

function Img() {
    return (
        <div className="hero-logo" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
            <img src="/logo.jpg" alt="me" />
        </div>
    )
}