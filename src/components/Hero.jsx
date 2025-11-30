import { useLang } from '../contexts/LangContext';
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
                        <Text scrollToSection={scrollToSection} />
                        <Img />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Text({ scrollToSection }) {
    const { t } = useLang()
    return (
        <div className="hi">
            <span
                dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />
            <button onClick={() => scrollToSection('learn')}>{t("hero.btn")}</button>
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