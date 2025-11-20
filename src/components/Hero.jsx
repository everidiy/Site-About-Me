import '../styles/hero.css';

export default function Hero() {
    return (
        <>
            <div className="hero">
                <Text />
                <Img />
            </div>
        </>
    )
}

function Text() {
    return (
        <div className="hi">
            <p>Hi, I'm Bogdan <br />- beginner Frontend developer!</p>
            <button>Learn more</button>
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