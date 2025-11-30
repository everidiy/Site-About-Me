import '../styles/connection.css';
import { useState } from 'react';
import { useLang } from '../contexts/LangContext';

export default function Connection() {
    const { t } = useLang()

    const dataContacts = [
    {
        id: 1,
        name: 'Telegram',
        img: "/telegram.png",
        text: t('connection.socials.tg.text'),
        link: 'https://t.me/everidiy',
        color: '#24bde4ff'
    },
    {
        id: 2,
        name: 'GitHub',
        img: "/githubsecond.png",
        text: t('connection.socials.github.text'),
        link: 'https://github.com/everidiy',
        color: '#000000ff'
    },
    {
        id: 3,
        name: 'VK',
        img: "/vk.png",
        text: t('connection.socials.vk.text'),
        link: 'https://vk.com/bogeeffff',
        color: '#01679eff'
    }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextContact = () => {
        setCurrentIndex((prev) => (prev + 1) % dataContacts.length);
    };

    const prevContact = () => {
        setCurrentIndex((prev) => (prev - 1 + dataContacts.length) % dataContacts.length);
    };

    const currentContact = dataContacts[currentIndex];

    return (
        <section id='contact'>
            <div className="connection">
                <h3 className="title-contact">{t('connection.title')}</h3>
                <div className="container-contacts">
                    <button className="contact-arrow left-arrow" onClick={prevContact}>
                        <p>‹</p>
                    </button>
                    
                    <div 
                        className="contact-card" 
                        onClick={() => window.open(currentContact.link, '_blank')}
                    >
                        <div className="contact-card-header" style={{ backgroundColor: currentContact.color }}>
                            <h4>{currentContact.name}</h4>
                        </div>
                        <div className="contact-card-body">
                            <img src={currentContact.img} alt={currentContact.name} />
                            <p>{currentContact.text}</p>
                            <button 
                                className="contact-link-btn" 
                                style={{ backgroundColor: currentContact.color }}
                            >
                                {t('connection.socials.goto')}
                            </button>
                        </div>
                    </div>
                    
                    <button className="contact-arrow right-arrow" onClick={nextContact}>
                        <p>›</p>
                    </button>
                </div>

                <div className="contact-dots">
                    {dataContacts.map((_, index) => (
                        <span
                            key={index}
                            className={`contact-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}