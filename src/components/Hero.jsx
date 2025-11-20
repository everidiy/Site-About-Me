import '../styles/hero.css';

export default function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <Text scrollToSection={scrollToSection} />
            <Img />
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